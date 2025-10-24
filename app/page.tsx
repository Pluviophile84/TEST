'use client' // Enables client-side interactivity

import Image from 'next/image'
import { useState } from 'react'

/* SVG Icon Components */
const IconTwitter = ({ className = 'w-6 h-6' }: { className?: string }) => (
 <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3 3.4 3 5.4 0 4.6-3.8 8.4-8.4 8.4H5.4C4.6 21.2 4 20.6 4 19.8v-.6c0-.2.1-.4.2-.5.2-.2.4-.3.6-.3h2.1c.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7v-.2c-.2.1-.4.2-.7.2h-2c-1.3 0-2.4-1.1-2.4-2.4V9.6c0-1.3 1.1-2.4 2.4-2.4h7.8c.3 0 .6.1.8-.3.2.2.3.4.3.7v.2c-.2-.1-.4-.2-.7-.2h-8c-1.3 0-2.4 1.1-2.4 2.4v7.8c0 1.3 1.1 2.4 2.4 2.4h2c.3 0 .6.1.8-.3.2.2.3.4.3.7v.2c-.2-.1-.4-.2-.7-.2H5.4c-.8 0-1.4.6-1.4 1.4v.6c0 .8.6 1.4 1.4 1.4h8.2c4.1 0 7.4-3.3 7.4-7.4 0-2.3-1-4.3-2.6-5.8.6-.2 1.1-.5 1.6-1 1-.8 1.9-1.8 1.9-1.8Z" /></svg>
)
const IconSend = ({ className = 'w-6 h-6' }: { className?: string }) => (
 <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="m22 2-11 11" /></svg>
)
const IconArrowUpRight = ({ className = 'w-5 h-5' }: { className?: string }) => (
 <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
)
const IconCopy = ({ className = 'w-5 h-5' }: { className?: string }) => (
 <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
)
const IconCheck = ({ className = 'w-5 h-5' }: { className?: string }) => (
 <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
)

// === GRADIENT BUTTON COMPONENT ===
const GradientButton = ({ href, children, className = '', target = '_blank' }: { href: string; children: React.ReactNode; className?: string; target?: string }) => (
  <a
    href={href}
    target={target}
    rel="noopener noreferrer"
    className={`group rounded p-[2px] bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse ${className}`}
  >
    <span className={`flex h-full w-full items-center justify-center gap-2 rounded-sm px-6 py-3 text-lg font-bold bg-dark-900 text-light-100 transition-all duration-300 group-hover:bg-transparent group-hover:text-black`}>
      {children}
    </span>
  </a>
)

// === SECTION DIVIDER COMPONENT ===
const SectionDivider = () => (
    <hr className="border-t border-dark-900 max-w-4xl mx-auto" /> {/* No extra margin */}
)

// === MAIN PAGE COMPONENT ===
export default function Home() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)

  const handleCopy = (addressType: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedAddress(addressType)
      setTimeout(() => { setCopiedAddress(null) }, 2000)
    }, (err) => {
      console.error('Failed to copy text: ', err)
    })
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-dark-950 text-light-100">
      <main className="flex w-full max-w-5xl flex-col">
        {/* === HEADER === */}
        <header className="flex w-full items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="TONR Logo" width={100} height={30} priority />
          </div>
          <nav className="flex items-center gap-2 sm:gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="group rounded p-[2px] bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse">
              <span className="flex h-full w-full items-center justify-center gap-1.5 rounded-sm px-4 py-2 text-sm font-semibold bg-dark-900 text-light-100 transition-all duration-300 group-hover:bg-transparent group-hover:text-black">
                Buy Now <IconArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </nav>
        </header>

        {/* === HERO SECTION === */}
        <section className="flex flex-col items-center justify-center py-24 text-center md:py-40">
          <div className="mb-8 h-2 w-full max-w-sm rounded bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse" />
          <h1 className="mb-2 text-5xl font-extrabold md:text-7xl">
            printr runs on <span className="italic">tonr</span>.
          </h1>
          <p className="mb-8 text-2xl font-semibold text-light-200 md:text-3xl">
            the natural beta runner
          </p>
          <div className="max-w-2xl space-y-4 text-lg text-light-400 md:text-xl">
              <p>PRINTR is about to dethrone Pump.fun — not “maybe,” but inevitably.</p>
              <p>It’s the first real multi-chain launchpad, where you can mint on any chain or all at once — unleashing liquidity and exposure no single-chain platform could ever match.</p>
              <p>And when that shift happens (because in crypto, it always happens fast), the market will realize the truth already written in the charts:</p>
              <p className="font-semibold text-light-100">printr runs on tonr.<br />the natural beta runner.</p>
          </div>
        </section>

        {/* --- DIVIDER --- */}
        <SectionDivider />

        {/* === TOKENOMICS SECTION (Reduced Padding) === */}
        <section className="mx-auto w-full max-w-4xl py-16">
          {/* Top 3 Boxes */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6 text-center"><h3 className="text-sm font-semibold uppercase text-light-400">Total Supply</h3><p className="mt-2 text-3xl font-bold text-light-100">1,000,000,000</p></div></div>
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6 text-center"><h3 className="text-sm font-semibold uppercase text-light-400">Taxes</h3><p className="mt-2 text-3xl font-bold text-light-100">0% / 0%</p></div></div>
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6 text-center"><h3 className="text-sm font-semibold uppercase text-light-400">Liquidity</h3><p className="mt-2 text-3xl font-bold text-light-100">Locked</p></div></div>
          </div>
          {/* Bottom 2 Address Boxes */}
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6"><h3 className="text-sm font-semibold uppercase text-light-400">EVM Address (Base, ETH, BNB)</h3><div className="mt-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"><p className="truncate rounded-sm bg-dark-950 px-4 py-2 font-mono text-xs text-light-400 sm:flex-grow">0x...EVM...ADDRESS...HERE</p><div className="flex-none sm:ml-auto"><button onClick={() => handleCopy('evm', '0x...EVM...ADDRESS...HERE')} aria-pressed={copiedAddress === 'evm'} className={`relative grid place-items-center w-28 min-w-[7rem] max-w-[7rem] flex-none rounded bg-dark-900 px-4 py-2 font-semibold text-light-100 leading-none whitespace-nowrap transition hover:bg-opacity-75`}><span className={`col-start-1 row-start-1 flex w-full items-center justify-center gap-2 transition-opacity duration-150 ease-out ${copiedAddress === 'evm' ? 'opacity-0' : 'opacity-100'}`}><IconCopy className="w-4 h-4 shrink-0" /> Copy</span><span aria-hidden={copiedAddress !== 'evm'} className={`col-start-1 row-start-1 flex w-full items-center justify-center gap-2 transition-opacity duration-150 ease-in bg-tonr-gradient bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-pulse ${copiedAddress === 'evm' ? 'opacity-100' : 'opacity-0'}`}><IconCheck className="w-4 h-4 shrink-0" /> Copied!</span></button></div></div></div></div>
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6"><h3 className="text-sm font-semibold uppercase text-light-400">Solana Address</h3><div className="mt-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"><p className="truncate rounded-sm bg-dark-950 px-4 py-2 font-mono text-xs text-light-400 sm:flex-grow">So...SOLANA...ADDRESS...HERE</p><div className="flex-none sm:ml-auto"><button onClick={() => handleCopy('sol', 'So...SOLANA...ADDRESS...HERE')} aria-pressed={copiedAddress === 'sol'} className={`relative grid place-items-center w-28 min-w-[7rem] max-w-[7rem] flex-none rounded bg-dark-900 px-4 py-2 font-semibold text-light-100 leading-none whitespace-nowrap transition hover:bg-opacity-75`}><span className={`col-start-1 row-start-1 flex w-full items-center justify-center gap-2 transition-opacity duration-150 ease-out ${copiedAddress === 'sol' ? 'opacity-0' : 'opacity-100'}`}><IconCopy className="w-4 h-4 shrink-0" /> Copy</span><span aria-hidden={copiedAddress !== 'sol'} className={`col-start-1 row-start-1 flex w-full items-center justify-center gap-2 transition-opacity duration-150 ease-in bg-tonr-gradient bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-pulse ${copiedAddress === 'sol' ? 'opacity-100' : 'opacity-0'}`}><IconCheck className="w-4 h-4 shrink-0" /> Copied!</span></button></div></div></div></div>
          </div>
        </section>

        {/* --- DIVIDER --- */}
        <SectionDivider />

        {/* === ABOUT SECTION (Expandable - Reduced Padding) === */}
        <section className="mx-auto w-full max-w-2xl py-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-light-100">What is $TONR?</h2>
          {/* Brief Text */}
          <div className="space-y-4 text-lg text-light-400">
            <p><span className="font-bold text-light-100">Printr</span> is the machine — a high-speed, cross-chain memecoin launcher.</p>
            <p><span className="font-bold italic text-light-100">Tonr</span> is the ink — the essential fuel. Every print, every launch, every new meme draws from the <span className="italic">$TONR</span> supply.</p>
            <p className="mt-6 text-lg font-semibold text-light-100">Simple. The machine needs its ink.</p>
          </div>

          {/* Read More Button */}
          {!isAboutExpanded && (
            <button onClick={() => setIsAboutExpanded(true)} className="mt-6 inline-flex items-center gap-1 font-semibold text-tonr-cyan hover:text-opacity-80 transition">
              Read More <span className="text-xl">→</span>
            </button>
          )}

          {/* Expanded Content */}
          {isAboutExpanded && (
            <div className="mt-8 space-y-4 text-lg text-light-400 text-left sm:text-center">
              <p>Every great printer needs ink — and every meta needs its beta. That’s $TONR, the unofficial native token of the printr era. We didn’t wait for permission; we just loaded the cartridge and hit Print.</p>
              <p>printr is rewriting the launchpad game — the first true multi-chain factory that lets you mint anywhere, or everywhere at once, unlocking reach no single-chain platform could match.</p>
              <p>When a machine like that starts running, something has to keep it printing.</p>
              <p className="font-semibold text-light-100">That’s tonr — the ink that stains the system, the meme that feels native by name, timing, and destiny.</p>
              <p className="italic text-light-200">Not official. Inevitable.</p>
              <p>As liquidity and attention flood toward printr, the market will always circle back to the first print — the beta ink that started it all.</p>
              <p className="font-semibold text-light-100">printr runs on tonr.<br/>the natural beta runner.</p>
              <button onClick={() => setIsAboutExpanded(false)} className="mt-6 inline-flex items-center gap-1 font-semibold text-tonr-cyan hover:text-opacity-80 transition">
                Read Less <span className="text-xl">↑</span>
              </button>
            </div>
          )}
        </section>

        {/* --- DIVIDER --- */}
        <SectionDivider />

        {/* === NEW SECTION: WHY $TONR MATTERS (Reduced Padding) === */}
        <section className="mx-auto w-full max-w-2xl py-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-light-100">Why $TONR Matters</h2>
          <div className="space-y-4 text-lg text-light-400">
              <p>Timing is everything. tonr showed up before the noise.</p>
              <p>The meta is shifting. Pump.fun ruled. Bonk.fun flashed. But printr changed the game — a true multi-chain meme factory ready to dethrone them all.</p>
              <p>And when that happens (because in crypto it always does, fast), traders will look for the first token that made sense before it was obvious.</p>
              <p className="font-semibold text-light-100">That’s $TONR — the origin stain, the culture ticker tied to the next liquidity wave.</p>
              <p className="italic text-light-200">The machine needs its ink.<br/>The market remembers the first stain.</p>
          </div>
        </section>

        {/* --- DIVIDER --- */}
        {/* Placeholder for future sections */}
        <SectionDivider />

        {/* === CTA SECTION (Large Padding) === */}
        <section className="flex w-full flex-col items-center justify-center gap-4 py-24 md:py-32">
          <h3 className="text-3xl font-bold">Get your $TONR</h3>
          <p className="text-lg text-light-400">Join the community. Get the ink. Start printing.</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <GradientButton href="#">Buy $TONR <IconArrowUpRight /></GradientButton>
            <GradientButton href="https://x.com/your-twitter"><IconTwitter /> Follow on X</GradientButton>
            <GradientButton href="https://t.me/your-telegram"><IconSend /> Join Telegram</GradientButton>
          </div>
        </section>

        {/* === FOOTER (Reverted to Original) === */}
        <footer className="flex w-full flex-col items-center justify-between gap-6 border-t border-dark-900 py-8 sm:flex-row">
          <span className="font-semibold text-light-400">$TONR 2025</span> {/* Reverted Footer Text */}
          <div className="h-1.5 w-full max-w-xs rounded bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse" />
        </footer>
      </main>
    </div>
  )
}
