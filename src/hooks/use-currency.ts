import { useEffect, useState } from "react";

type CurrencyCode = "INR" | "USD" | "GBP" | "EUR" | "CAD" | "AUD" | "AED" | "SGD";

const SYMBOLS: Record<CurrencyCode, string> = {
  INR: "₹",
  USD: "$",
  GBP: "£",
  EUR: "€",
  CAD: "CA$",
  AUD: "A$",
  AED: "AED ",
  SGD: "S$",
};

const EU_COUNTRIES = new Set([
  "AT", "BE", "CY", "DE", "EE", "ES", "FI", "FR", "GR", "IE", "IT", "LT", "LU",
  "LV", "MT", "NL", "PT", "SI", "SK", "HR",
]);

const COUNTRY_TO_CURRENCY: Record<string, CurrencyCode> = {
  IN: "INR",
  US: "USD",
  GB: "GBP",
  CA: "CAD",
  AU: "AUD",
  AE: "AED",
  SG: "SGD",
};

function countryToCurrency(country: string | null): CurrencyCode {
  if (!country) return "INR";
  const c = country.toUpperCase();
  if (COUNTRY_TO_CURRENCY[c]) return COUNTRY_TO_CURRENCY[c];
  if (EU_COUNTRIES.has(c)) return "EUR";
  return "INR";
}

async function detectCountry(): Promise<string | null> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 2500);
    const res = await fetch("https://ipapi.co/country/", { signal: ctrl.signal });
    clearTimeout(t);
    if (res.ok) {
      const txt = (await res.text()).trim();
      if (txt && txt.length === 2) return txt;
    }
  } catch {
    /* ignore */
  }
  try {
    const locale = navigator.language || "";
    const parts = locale.split("-");
    if (parts.length >= 2) return parts[1];
  } catch {
    /* ignore */
  }
  return null;
}

async function fetchRate(currency: CurrencyCode): Promise<number | null> {
  if (currency === "INR") return 1;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 3000);
    const res = await fetch("https://open.er-api.com/v6/latest/INR", { signal: ctrl.signal });
    clearTimeout(t);
    if (!res.ok) return null;
    const json = (await res.json()) as { rates?: Record<string, number> };
    const rate = json.rates?.[currency];
    return typeof rate === "number" ? rate : null;
  } catch {
    return null;
  }
}

function roundNice(value: number): number {
  if (value >= 1000) return Math.round(value / 10) * 10;
  if (value >= 100) return Math.round(value);
  return Math.round(value * 10) / 10;
}

export type CurrencyState = {
  currency: CurrencyCode;
  symbol: string;
  ready: boolean;
  isLocal: boolean;
  format: (amountInr: number) => string;
};

const CACHE_KEY = "wl_currency_v1";

export function useCurrency(): CurrencyState {
  const [currency, setCurrency] = useState<CurrencyCode>("INR");
  const [rate, setRate] = useState<number>(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Try cache first
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { currency: CurrencyCode; rate: number };
        if (parsed?.currency && typeof parsed.rate === "number") {
          setCurrency(parsed.currency);
          setRate(parsed.rate);
          setReady(true);
        }
      }
    } catch {
      /* ignore */
    }

    (async () => {
      const country = await detectCountry();
      const cur = countryToCurrency(country);
      let r = 1;
      if (cur !== "INR") {
        const fetched = await fetchRate(cur);
        if (fetched && fetched > 0) {
          r = fetched;
        } else {
          // Fallback to INR if exchange rate fails
          if (!cancelled) {
            setCurrency("INR");
            setRate(1);
            setReady(true);
          }
          return;
        }
      }
      if (cancelled) return;
      setCurrency(cur);
      setRate(r);
      setReady(true);
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ currency: cur, rate: r }));
      } catch {
        /* ignore */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const symbol = SYMBOLS[currency];

  const format = (amountInr: number) => {
    const converted = amountInr * rate;
    const rounded = roundNice(converted);
    const formatted = new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
      maximumFractionDigits: 0,
    }).format(rounded);
    return `${symbol}${formatted}`;
  };

  return {
    currency,
    symbol,
    ready,
    isLocal: currency !== "INR",
    format,
  };
}
