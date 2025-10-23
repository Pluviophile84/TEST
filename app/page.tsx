'use client' // Enables client-side interactivity

import Image from 'next/image'
import { useState } from 'react' // Import useState for managing state

/* SVG Icon Components (Twitter, Send, ArrowUpRight, Copy) remain the same */
const IconTwitter = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg /* ... icon path ... */ >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3 3.4 3 5.4 0 4.6-3.8 8.4-8.4 8.4H5.4C4.6 21.2 4 20.6 4 19.8v-.6c0-.2.1-.4.2-.5.2-.2.4-.3.6-.3h2.1c.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7v-.2c-.2.1-.4.2-.7.2h-2c-1.3 0-2.4-1.1-2.4-2.4V9.6c0-1.3 1.1-2.4 2.4-2.4h7.8c.3 0 .6.1.8.3.2.2.3.4.3.7v.2c-.2-.1-.4-.2-.7-.2h-8c-1.3 0-2.4 1.1-2.4 2.4v7.8c0 1.3 1.1 2.4 2.4 2.4h2c.3 0 .6.1.8.3.2.2.3.4.3.7v.2c-.2-.1-.4-.2-.7-.2H5.4c-.8 0-1.4.6-1.4 1.4v.6c0 .8.6 1.4 1.4 1.4h8.2c4.1 0 7.4-3.3 7.4-7.4 0-2.3-1-4.3-2.6-5.8.6-.2 1.1-.5 1.6-1 1-.8 1.9-1.8 1.9-1.8Z" />
  </svg>
)
const IconSend = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg /* ... icon path ... */ >
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="m22 2-11 11" />
  </svg>
)
const IconArrowUpRight = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg /* ... icon path ... */ >
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </svg>
)
const IconCopy = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg /* ... icon path ... */ >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
)
const IconCheck = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
) // New Check icon

// Gradient Button Component remains the same
const GradientButton = ({ /* ... props ... */ }: { /* ... types ... */ }) => (
  <a /* ... button structure ... */ >
    <span /* ... inner span ... */ >
      {children}
    </span>
  </a>
)

// === MAIN PAGE COMPONENT ===
export default function Home() {
  // NEW STATE: Keep track of which address was copied
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  // UPDATED FUNCTION: Handles copy and sets state
  const handleCopy = (addressType: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopiedAddress(addressType) // Set which address was copied
        // Reset the button text after 2 seconds
        setTimeout(() => {
          setCopiedAddress(null)
        }, 2000)
      },
      (err) => {
        console.error('Failed to copy text: ', err)
        // Optionally: Show an error message to the user
      },
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-dark-950 text-light-100">
      <main className="flex w-full max-w-5xl flex-col">
        {/* === HEADER (No changes needed here) === */}
        <header /* ... header structure ... */ >
          {/* Logo */}
          <div /* ... logo div ... */ >
            <Image /* ... Image component ... */ />
          </div>
          {/* Social Links */}
          <nav /* ... nav structure ... */ >
            {/* ... Twitter link ... */}
            {/* ... Telegram link ... */}
            {/* ... Buy Now button ... */}
          </nav>
        </header>

        {/* === HERO SECTION (No changes needed here) === */}
        <section /* ... hero structure ... */ >
          {/* ... Gradient Line ... */}
          {/* ... Headline ... */}
          {/* ... Subtext ... */}
        </section>

        {/* === TOKENOMICS SECTION (UPDATED COPY BUTTONS) === */}
        <section className="mx-auto w-full max-w-4xl py-12">
          {/* Top 3 Boxes (No changes needed here) */}
          <div /* ... grid for supply, taxes, liquidity ... */ >
            {/* ... Supply Box ... */}
            {/* ... Taxes Box ... */}
            {/* ... Liquidity Box ... */}
          </div>

          {/* Bottom 2 Address Boxes (Buttons updated) */}
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* EVM Address Box */}
            <div className="rounded-lg bg-tonr-gradient p-[1.5px]">
              <div className="h-full w-full rounded-md bg-dark-900 p-6">
                <h3 className="text-sm font-semibold uppercase text-light-400">
                  EVM Address (Base, ETH, BNB)
                </h3>
                <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row">
                  <p className="truncate rounded-md bg-dark-950 px-4 py-2 font-mono text-sm text-light-200 sm:flex-grow">
                    0x...EVM...ADDRESS...HERE
                  </p>
                  <button
                    onClick={() => handleCopy('evm', '0x...EVM...ADDRESS...HERE')} // Pass type and address
                    // Change text and icon based on 'copiedAddress' state
                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold transition sm:w-auto ${
                      copiedAddress === 'evm'
                        ? 'bg-tonr-cyan text-black' // Indicate success
                        : 'bg-dark-900 text-light-100 hover:bg-opacity-75' // Default state
                    }`}
                  >
                    {copiedAddress === 'evm' ? (
                      <>
                        <IconCheck className="w-4 h-4" /> Copied!
                      </>
                    ) : (
                      <>
                        <IconCopy className="w-4 h-4" /> Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Solana Address Box */}
            <div className="rounded-lg bg-tonr-gradient p-[1.5px]">
              <div className="h-full w-full rounded-md bg-dark-900 p-6">
                <h3 className="text-sm font-semibold uppercase text-light-400">
                  Solana Address
                </h3>
                <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row">
                  <p className="truncate rounded-md bg-dark-950 px-4 py-2 font-mono text-sm text-light-200 sm:flex-grow">
                    So...SOLANA...ADDRESS...HERE
                  </p>
                  <button
                    onClick={() => handleCopy('sol', 'So...SOLANA...ADDRESS...HERE')} // Pass type and address
                    // Change text and icon based on 'copiedAddress' state
                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold transition sm:w-auto ${
                      copiedAddress === 'sol'
                        ? 'bg-tonr-cyan text-black' // Indicate success
                        : 'bg-dark-900 text-light-100 hover:bg-opacity-75' // Default state
                    }`}
                  >
                    {copiedAddress === 'sol' ? (
                      <>
                        <IconCheck className="w-4 h-4" /> Copied!
                      </>
                    ) : (
                      <>
                        <IconCopy className="w-4 h-4" /> Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === ABOUT SECTION (No changes needed here) === */}
        <section /* ... about structure ... */ >
          {/* ... Headline ... */}
          {/* ... Paragraphs ... */}
        </section>

        {/* === CTA SECTION (No changes needed here) === */}
        <section /* ... cta structure ... */ >
          {/* ... Headline ... */}
          {/* ... Subtext ... */}
          <div /* ... button group ... */ >
            {/* ... Buy Button ... */}
            {/* ... X Button ... */}
            {/* ... Telegram Button ... */}
          </div>
        </section>

        {/* === FOOTER (No changes needed here) === */}
        <footer /* ... footer structure ... */ >
          {/* ... Copyright ... */}
          {/* ... Gradient Line ... */}
        </footer>
      </main>
    </div>
  )
}
