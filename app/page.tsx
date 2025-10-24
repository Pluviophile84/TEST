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

// === SECTION DIVIDER COMPONENT ===
const SectionDivider = () => (
    <hr className="my-16 md:my-24 border-t border-dark-900 max-w-4xl mx-auto" />
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

        {/* === HERO SECTION (Reduced Headline Size) === */}
        <section className="flex flex-col items-center justify-center py-24 text-center md:py-40">
          <div className="mb-8 h-2 w-full max-w-sm rounded bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse" />
          {/* Headline size reduced */}
          <h1 className="mb-6 text-4xl font-extrabold md:text-5xl">
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

        {/* --- DIVIDER --- */}
        <SectionDivider />

        {/* === TOKENOMICS SECTION === */}
        <section className="mx-auto w-full max-w-4xl"> {/* Removed py-12 */}
          {/* Top 3 Boxes */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6 text-center"><h3 className="text-sm font-semibold uppercase text-light-400">Total Supply</h3><p className="mt-2 text-3xl font-bold text-light-100">1,000,000,000</p></div></div>
            <div className="rounded bg-tonr-gradient p-[1.5px]"><div className="h-full w-full rounded-sm bg-dark-900 p-6 text-center"><h3 className="text-sm font-semibold uppercase text-light-400">Taxes</h3><p className="mt-2 text-3xl font-bold text-light-100">0% / 0%
