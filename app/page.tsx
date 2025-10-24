'use client' // Enables client-side interactivity

import Image from 'next/image'
import { useState } from 'react'

/* SVG Icon Components */
const IconTwitter = ({ className = 'w-6 h-6' }: { className?: string }) => (
 <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3 3.4 3 5.4 0 4.6-3.8 8.4-8.4 8.4H5.4C4.6 21.2 4 20.6 4 19.8v-.6c0-.2.1-.4.2-.5.2-.2.4-.3.6-.3h2.1c.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7v-.2c-.2.1-.4.2-.7.2h-2c-1.3 0-2.4-1.1-2.4-2.4V9.6c0-1.3 1.1-2.4 2.4-2.4h7.8c.3 0 .6.1.8.3.2.2.3.4.3.7v.2c-.2-.1-.4-.2-.7-.2h-8c-1.3 0-2.4 1.1-2.4 2.4v7.8c0 1.3 1.1 2.4 2.4 2.4h2c.3 0 .6.1.8.3.2.2.3.4.3.7v.2c-.2-.1-.4-.2-.7-.2H5.4c-.8 0-1.4.6-1.4 1.4v.6c0 .8.6 1.4 1.4 1.4h8.2c4.1 0 7.4-3.3 7.4-7.4 0-2.3-1-4.3-2.6-5.8.6-.2 1.1-.5 1.6-1 1-.8 1.9-1.8 1.9-1.8Z" /></svg>
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

// === MAIN PAGE COMPONENT ===
export default function Home() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

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
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png" // Replace with your logo filename
              alt="TONR Logo"
              width={100} // Adjust width
              height={30} // Adjust height
              priority
            />
          </div>
          {/* Social Links */}
          <nav className="flex items-center gap-2 sm:gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="group rounded p-[2px] bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse">
              <span className="flex h-full w-full items-center justify-center gap-1.5 rounded-sm px-4 py-2 text-sm font-semibold bg-dark-900 text-light-100 transition-all duration-300 group-hover:bg-transparent group-hover:text-black">
                Buy Now
                <IconArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </nav>
        </header>

        {/* === HERO SECTION (Updated Text) === */}
        <section className="flex flex-col items-center justify-center py-24 text-center md:py-40">
          <div className="mb-8 h-2 w-full max-w-sm rounded bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse" />
          <h1 className="mb-6 text-5xl font-extrabold md:text-7xl">
            TONR ($TONR) — The Ink That Runs the Market
          </h1>
          <div className="max-w-xl space-y-4 text-xl text-light-400 md:text-2xl">
            <p>
              Every printer needs toner — and every launchpad needs a first
              print. TONR is the beta runner of the newly launched PRINTR, the
              first multi-chain memecoin launchpad ready to dethrone Pump.fun.
            </p>
            <p>
              We’re not just testing the system — we’re staining the charts.
              PRINTR is about to ignite a new wave of liquidity across all
              chains, and TONR is the first drop to hit the page.
            </p>
            <p className="font-semibold text-light-100">
              When the press starts printing, we’ll already be running.
              <br />
              The printer runs on TONR.
            </p>
          </div>
        </section>

        {/* === TOKENOMICS SECTION (Updated Text) === */}
        <section className="mx-auto w-full max-w-4xl py-12">
          {/* Top 3 Boxes */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6 text-center"><h3 className="text-sm font-semibold uppercase text-light-400">Total Supply</h3><p className="mt-2 text-3xl font-bold text-light-100">1,000,000,000</p></div></div>
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6 text-center"><h3 className="text-sm font-semibold uppercase text-light-400">Taxes</h3><p className="mt-2 text-3xl font-bold text-light-100">0% / 0%</p></div></div> {/* Kept as 0/0 */}
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6 text-center"><h3 className="text-sm font-semibold uppercase text-light-400">Liquidity</h3><p className="mt-2 text-3xl font-bold text-light-100">Locked</p></div></div>
          </div>
          {/* Bottom 2 Address Boxes */}
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6"><h3 className="text-sm font-semibold uppercase text-light-400">EVM Address (Base, ETH, BNB)</h3><div className="mt-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"><p className="truncate rounded-sm bg-dark-950 px-4 py-2 font-mono text-xs text-light-400 sm:flex-grow">0x...EVM...ADDRESS...HERE</p><div className="flex-none sm:ml-auto"><button onClick={() => handleCopy('evm', '0x...EVM...ADDRESS...HERE')} aria-pressed={copiedAddress === 'evm'} className={`relative grid place-items-center w-28 min-w-[7rem] max-w-[7rem] flex-none rounded bg-dark-900 px-4 py-2 font-semibold text-light-100 leading-none whitespace-nowrap transition hover:bg-opacity-75`}><span className={`col-start-1 row-start-1 flex w-full items-center justify-center gap-2 transition-opacity duration-150 ease-out ${copiedAddress === 'evm' ? 'opacity-0' : 'opacity-100'}`}><IconCopy className="w-4 h-4 shrink-0" /> Copy</span><span aria-hidden={copiedAddress !== 'evm'} className={`col-start-1 row-start-1 flex w-full items-center justify-center gap-2 transition-opacity duration-150 ease-in bg-tonr-gradient bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-pulse ${copiedAddress === 'evm' ? 'opacity-100' : 'opacity-0'}`}><IconCheck className="w-4 h-4 shrink-0" /> Copied!</span></button></div></div></div></div>
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6"><h3 className="text-sm font-semibold uppercase text-light-400">Solana Address</h3><div className="mt-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"><p className="truncate rounded-sm bg-dark-950 px-4 py-2 font-mono text-xs text-light-400 sm:flex-grow">So...SOLANA...ADDRESS...HERE</p><div className="flex-none sm:ml-auto"><button onClick={() => handleCopy('sol', 'So...SOLANA...ADDRESS...HERE')} aria-pressed={copiedAddress === 'sol'} className={`relative grid place-items-center w-28 min-w-[7rem] max-w-[7rem] flex-none rounded bg-dark-900 px-4 py-2 font-semibold text-light-100 leading-none whitespace-nowrap transition hover:bg-opacity-75`}><span className={`col-start-1 row-start-1 flex w-full items-center justify-center gap-2 transition-opacity duration-150 ease-out ${copiedAddress === 'sol' ? 'opacity-0' : 'opacity-100'}`}><IconCopy className="w-4 h-4 shrink-0" /> Copy</span><span aria-hidden={copiedAddress !== 'sol'} className={`col-start-1 row-start-1 flex w-full items-center justify-center gap-2 transition-opacity duration-150 ease-in bg-tonr-gradient bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-pulse ${copiedAddress === 'sol' ? 'opacity-100' : 'opacity-0'}`}><IconCheck className="w-4 h-4 shrink-0" /> Copied!</span></button></div></div></div></div>
          </div>
          {/* Added Utility & Purpose Text */}
          <div className="mt-8 space-y-4 text-center text-light-400">
            <p><strong className="text-light-200">Utility:</strong> Pure narrative, pure meta, pure tone.</p>
            <p><strong className="text-light-200">Purpose:</strong> Be the first and most recognized meme under PRINTR’s ecosystem banner.</p>
            <p className="italic">Every coin printed after TONR will owe its life to this one.</p>
          </div>
        </section>

        {/* === ABOUT SECTION (Updated Text) === */}
        <section className="mx-auto w-full max-w-2xl py-24 text-center">
          <h2 className="mb-4 text-2xl font-bold text-light-100">What Is TONR?</h2>
          <div className="space-y-4 text-lg text-light-400">
            <p>
              TONR is the genesis meme of the PRINTR ecosystem — the original
              ink in the tank. Created as the first official beta coin, TONR
              exists to mark the beginning of the PRINTR era.
            </p>
            <p>
              It’s not just a coin; it’s a historical artifact — the first
              stain on the blank page before the bull run begins.
            </p>
            <h3 className="pt-4 text-xl font-semibold text-light-100">
              Why It Matters:
            </h3>
            <p>
              When PRINTR starts gaining momentum, traders will look for the
              first mover — the earliest coin tied to its launch. That’s TONR.
            </p>
            <p className="font-semibold text-light-100">
              The OG. The first print. The proof of concept that’s destined to
              become collectible history in memecoin culture.
            </p>
          </div>
        </section>

        {/* === NEW SECTION: THE VISION === */}
        <section className="mx-auto w-full max-w-2xl py-24 text-center">
          <h2 className="mb-4 text-2xl font-bold text-light-100">
            The Vision
          </h2>
          <div className="space-y-4 text-lg text-light-400">
             <h3 className="pt-4 text-xl font-semibold text-light-100">
              From One Print to a Thousand Chains.
            </h3>
            <p>
              PRINTR is building the world’s first multi-chain memecoin launchpad,
              where tokens can be minted and deployed across ecosystems without
              barriers. TONR positions itself as the core meme identity of this
              ecosystem — the original ink that powered the printer before it
              became a factory.
            </p>
            <p>
              As liquidity rotates from outdated platforms like Pump.fun, PRINTR
              will become the new global mint for memes — and TONR will sit at
              the heart of that story.
            </p>
            <p className="italic font-semibold text-light-100">
              The first test print always becomes the rarest one.
            </p>
          </div>
        </section>

        {/* === NEW SECTION: HOW TO BUY === */}
        <section className="mx-auto w-full max-w-2xl py-24 text-center">
           <h2 className="mb-4 text-2xl font-bold text-light-100">
            How to Buy
          </h2>
          <div className="space-y-4 text-lg text-light-400">
            <ol className="list-decimal list-inside space-y-2 text-left sm:text-center">
              <li>Get your wallet ready — Solana, ETH, or whatever chain PRINTR is printing next.</li>
              <li>Grab some TONR from the liquidity pool.</li>
              <li>Hold it. Smudge it. Print it.</li>
              <li>Brag that you were part of the beta batch before the full-color revolution began.</li>
            </ol>
            <p className="pt-4 font-semibold text-light-100">
              Pro Tip:
              <br />
              <span className="font-normal text-light-400">
                Early holders of TONR aren’t just traders — they’re ink suppliers for the entire PRINTR machine.
              </span>
            </p>
          </div>
        </section>

        {/* === NEW SECTION: MEME ZONE === */}
         <section className="mx-auto w-full max-w-2xl py-24 text-center">
           <h2 className="mb-4 text-2xl font-bold text-light-100">
            Meme Zone
          </h2>
          <div className="space-y-4 text-lg text-light-400">
            <p>
              TONR isn’t a token — it’s a lifestyle for the overworked,
              underpaid office printer of the crypto world.
            </p>
            <p className="font-semibold text-light-100">
              Our ink doesn’t dry. Our charts don’t sleep.
            </p>
            <p className="italic font-semibold text-light-100">
              We don’t rug — we smudge.
            </p>

            <h3 className="pt-4 text-xl font-semibold text-light-100">
              Join the TONR movement:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-left sm:text-center">
                <li>Post your best “printer jam” memes</li>
                <li>Tag $TONR and $PRINTR</li>
                <li>Let’s flood the feed with green ink</li>
            </ul>

             <h3 className="pt-4 text-xl font-semibold text-light-100">
              Catchphrases:
            </h3>
            <ul className="list-none space-y-1 italic">
              <li>“The printer runs on TONR.”</li>
              <li>“Smudge the charts.”</li>
              <li>“Ink it before they think it.”</li>
              <li>“From grayscale to green candles.”</li>
            </ul>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="flex w-full flex-col items-center justify-center gap-4 pb-24 md:pb-32">
          <h3 className="text-3xl font-bold">Get your $TONR</h3>
          <p className="text-lg text-light-400">Join the community. Get the ink. Start printing.</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <GradientButton href="#">Buy $TONR <IconArrowUpRight /></GradientButton>
            <GradientButton href="https://x.com/your-twitter"><IconTwitter /> Follow on X</GradientButton>
            <GradientButton href="https://t.me/your-telegram"><IconSend /> Join Telegram</GradientButton>
          </div>
        </section>

        {/* === FOOTER (Updated Text) === */}
        <footer className="flex w-full flex-col items-center justify-between gap-6 border-t border-dark-900 pt-8 pb-12 text-center sm:flex-row sm:text-left">
            <div className="max-w-md space-y-1 text-sm text-light-400">
                <p>TONR is not financial advice — it’s financial performance art.</p>
                <p>We are the first print, the beta stain, the genesis ink drop of PRINTR.</p>
                <p className="font-semibold text-light-200">When this thing starts printing multi-chain, you’ll wish you’d grabbed a cartridge early.</p>
                <p className="pt-2 font-bold text-light-100">TONR ($TONR) — The Ink of the New Era.</p>
            </div>
          <div className="h-1.5 w-full max-w-xs rounded bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse" />
        </footer>
      </main>
    </div>
  )
}
