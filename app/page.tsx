"use client";
import { useMemo, useState, useEffect } from "react";

export default function Home() {
  const [copied, setCopied] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(null), 1200);
    return () => clearTimeout(t);
  }, [copied]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const TOKEN = {
    name: "tonr",
    ticker: "TONR",
    links: {
      buy: "#",
      telegram: "#",
      twitter: "#",
      chart: "#",
    },
    contracts: {
      evm: "0xTONR...EVM",
      sol: "TONR1111111111111111111111111111111111111",
    },
  } as const;

  const ui = useMemo(
    () => ({
      sub: "text-sub",
      panel: "panel",
      navBorder: "border-b border-[var(--border)]",
      sectionBorderY: "border-y border-[var(--border)]",
    }),
    []
  );

  const copy = async (val: string) => {
    try {
      await navigator.clipboard.writeText(val);
      setCopied(val);
    } catch {
      console.warn("Clipboard copy failed");
    }
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header
        className={`sticky top-0 z-30 backdrop-blur bg-[rgba(10,10,10,0.7)] ${ui.navBorder}`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 select-none">
            {/* YOUR TONR LOGO */}
            <img
              src="/your-logo.png"
              alt="TONR logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#why" className="opacity-80 hover:opacity-100">
              why tonr
            </a>
            <a href="#beta" className="opacity-80 hover:opacity-100">
              beta runner
            </a>
            <a href="#token" className="opacity-80 hover:opacity-100">
              token
            </a>
            <a href="#cta" className="opacity-80 hover:opacity-100">
              get $TONR
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="sm:hidden px-3 py-2 border border-white text-white"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="hmb mb-1" />
            <span className="hmb mb-1" />
            <span className="hmb" />
          </button>
        </div>

        {/* Mobile dropdown panel */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="sm:hidden border-t border-[var(--border)] bg-[rgb(10,10,10)]"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3">
              <a
                href="#why"
                className="opacity-90 hover:opacity-100"
                onClick={closeMobile}
              >
                why tonr
              </a>
              <a
                href="#beta"
                className="opacity-90 hover:opacity-100"
                onClick={closeMobile}
              >
                beta runner
              </a>
              <a
                href="#token"
                className="opacity-90 hover:opacity-100"
                onClick={closeMobile}
              >
                token
              </a>
              <a
                href="#cta"
                className="opacity-90 hover:opacity-100"
                onClick={closeMobile}
              >
                get $TONR
              </a>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={TOKEN.links.buy}
                  className="btn-cmyk btn-sm"
                  onClick={closeMobile}
                >
                  Buy
                </a>
                <a
                  href={TOKEN.links.telegram}
                  className="btn-cmyk btn-sm"
                  onClick={closeMobile}
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden sec-0">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 grid gap-6">
          <p className="uppercase tracking-[0.18em] text-xs opacity-70">
            low ink warning
          </p>
          <h1 className="font-heading font-black tracking-widest uppercase text-4xl sm:text-6xl leading-[1.05]">
            THE PRINTR RUNS ON <span className="italic">TONR</span>.
          </h1>
          <p className={`text-lg sm:text-xl ${ui.sub} max-w-3xl`}>
            $TONR is the beta cartridge of the Printr ecosystem — the black
            liquidity that powers every print. No TONR, no print. No print, no
            launch.
          </p>
          <div className="flex flex-wrap gap-3 pt-2" id="cta">
            <a href={TOKEN.links.buy} className="btn-cmyk">
              Buy $TONR
            </a>
            <a href={TOKEN.links.telegram} className="btn-cmyk-ghost">
              Join Telegram
            </a>
            <a href={TOKEN.links.chart} className="btn-cmyk-ghost">
              View Chart
            </a>
          </div>
        </div>
        <div className="cmyk-grad" />
        <InkDrip />
      </section>

      {/* WHY */}
      <section id="why" className="sec-1">
        <div className="mx-auto max-w-6xl px-4 py-14 grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="font-heading font-black uppercase tracking-widest text-2xl sm:text-3xl mb-3">
              WHY TONR?
            </h2>
            <ul className={`space-y-3 ${ui.sub}`}>
              <li>
                <b>Fuel, not hype.</b> TONR is the machine’s substance — the
                beta ink that keeps prints flowing.
              </li>
              <li>
                <b>Printr-native.</b> Lowercase lore; uppercase output. CMYK
                pulse mirrors the ecosystem’s DNA.
              </li>
              <li>
                <b>Cross-chain drip.</b> When the printer goes omnichain, TONR
                spreads across every tray.
              </li>
              <li>
                <b>Simple rule.</b> No TONR, no print. It’s that blunt.
              </li>
            </ul>
          </div>
          <div className={`p-6 ${ui.panel}`}>
            <p className="uppercase tracking-[0.18em] text-xs opacity-70 mb-2">
              mini lore
            </p>
            <p className={`${ui.sub}`}>
              The Printer spun up and leaked. A black droplet rolled across the
              console and said: “I am TONR — the beta ink.” Before CMYK paints
              the spectrum, TONR keeps the machine alive.
            </p>
          </div>
        </div>
      </section>

      {/* TOKEN DETAILS */}
      <section id="token" className="sec-1">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-heading font-black uppercase tracking-widest text-2xl sm:text-3xl mb-6">
            TOKEN DETAILS
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className={`p-6 ${ui.panel}`}>
              <div className="uppercase tracking-[0.18em] text-xs opacity-70 mb-2">
                ticker
              </div>
              <div className="text-3xl font-heading font-black">$TONR</div>
              <div className="uppercase tracking-[0.18em] text-xs opacity-70 mt-4">
                canonical contracts
              </div>
              <div className="mt-2 space-y-2">
                <CopyRow
                  label="EVM (omnichain)"
                  value={TOKEN.contracts.evm}
                  onCopy={copy}
                  copied={copied === TOKEN.contracts.evm}
                />
                <CopyRow
                  label="Solana (SPL mint)"
                  value={TOKEN.contracts.sol}
                  onCopy={copy}
                  copied={copied === TOKEN.contracts.sol}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="sec-0 border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-2 items-center">
          <div>
            <img
              src="/your-logo.png"
              alt="TONR logo"
              className="h-7 w-auto mb-2"
            />
            <p className="text-sub mt-1">
              Without ink, nothing prints. Refill responsibly.
            </p>
          </div>
          <div className="flex justify-start sm:justify-end gap-3">
            <a href={TOKEN.links.buy} className="btn-cmyk">
              Buy $TONR
            </a>
            <a href={TOKEN.links.telegram} className="btn-cmyk-ghost">
              Join Telegram
            </a>
          </div>
        </div>
        <div className="cmyk-grad" />
        <div className="text-center text-xs text-sub py-4">
          © {new Date().getFullYear()} tonr.money — beta ink for the Printr.
        </div>
      </footer>
    </main>
  );
}

/* === Inline components ==================================================== */
function CopyRow({
  label,
  value,
  onCopy,
  copied,
}: {
  label: string;
  value: string;
  onCopy: (v: string) => void;
  copied: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <div className="uppercase tracking-[0.18em] text-xs opacity-70">
          {label}
        </div>
        <div className="font-code text-sm break-all select-all">{value}</div>
      </div>
      <button
        onClick={() => onCopy(value)}
        className={`px-3 py-1.5 border text-xs font-semibold uppercase tracking-wide transition-colors duration-300 ${
          copied
            ? "border-cyan-400 text-cyan-400"
            : "border-[rgba(255,255,255,0.4)] text-white hover:border-white hover:text-cyan-300"
        }`}
      >
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}

function InkDrip() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="absolute top-0 bg-white/5"
          style={{
            left: `${(i * 17) % 90 + 2}%`,
            width: `${8 + (i % 3) * 6}px`,
            height: "140%",
            filter: "blur(6px)",
            animation: `drip ${6 + i}s ease-in forwards`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
