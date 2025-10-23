'use client' // <- This is new: enables client-side interactivity for the copy button

/*
  We define our SVG icons as components here.
  This avoids needing to install any libraries.
*/
const IconTwitter = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3 3.4 3 5.4 0 4.6-3.8 8.4-8.4 8.4H5.4C4.6 21.2 4 20.6 4 19.8v-.6c0-.2.1-.4.2-.5.2-.2.4-.3.6-.3h2.1c.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7v-.2c-.2.1-.4.2-.7.2h-2c-1.3 0-2.4-1.1-2.4-2.4V9.6c0-1.3 1.1-2.4 2.4-2.4h7.8c.3 0 .6.1.8.3.2.2.3.4.3.7v.2c-.2-.1-.4-.2-.7-.2h-8c-1.3 0-2.4 1.1-2.4 2.4v7.8c0 1.3 1.1 2.4 2.4 2.4h2c.3 0 .6.1.8.3.2.2.3.4.3.7v.2c-.2-.1-.4-.2-.7-.2H5.4c-.8 0-1.4.6-1.4 1.4v.6c0 .8.6 1.4 1.4 1.4h8.2c4.1 0 7.4-3.3 7.4-7.4 0-2.3-1-4.3-2.6-5.8.6-.2 1.1-.5 1.6-1 1-.8 1.9-1.8 1.9-1.8Z" />
  </svg>
)

const IconSend = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="m22 2-11 11" />
  </svg>
)

const IconArrowUpRight = ({
  className = 'w-5 h-5',
}: {
  className?: string
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
)

const IconCopy = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
)

// === GRADIENT BUTTON COMPONENT ===
const GradientButton = ({
  href,
  children,
  className = '',
  target = '_blank',
}: {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
}) => (
  <a
    href={href}
    target={target}
    rel="noopener noreferrer"
    // The outer 'a' tag is the gradient.
    className={`group rounded-lg p-[2px] bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse ${className}`}
  >
    {/* The inner 'span' is the dark background.
        On hover, we make it transparent to "reveal" the gradient.
    */}
    <span
      className={`flex h-full w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-lg font-bold
       bg-dark-900 text-light-100 transition-all duration-300 group-hover:bg-transparent group-hover:text-black`}
    >
      {children}
    </span>
  </a>
)

// === MAIN PAGE COMPONENT ===
export default function Home() {
  // This new function handles the copy-to-clipboard logic
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Address copied to clipboard!') // Simple feedback
      },
      (err) => {
        console.error('Failed to copy text: ', err)
      },
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-dark-950 text-light-100">
      <main className="flex w-full max-w-5xl flex-col">
        {/* === HEADER === */}
        <header className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black italic lowercase text-light-100">
              tonr
            </span>
          </div>

          {/* Social Links */}
          <nav className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://x.com/your-twitter"
              target="_blank"
              className="rounded-lg p-2 text-light-400 transition hover:bg-dark-900 hover:text-light-100"
              aria-label="X (Twitter)"
            >
              <IconTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/your-telegram"
              target="_blank"
              className="rounded-lg p-2 text-light-400 transition hover:bg-dark-900 hover:text-light-100"
              aria-label="Telegram"
            >
              <IconSend className="w-5 h-5" />
            </a>

            {/* NEW: Gradient Button in Header */}
            <a
              href="#" // Add your "Buy" link here
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg p-[2px] bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse"
            >
              <span
                className="flex h-full w-full items-center justify-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold
                 bg-dark-900 text-light-100 transition-all duration-300 group-hover:bg-transparent group-hover:text-black"
              >
                Buy Now
                <IconArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </nav>
        </header>

        {/* === HERO SECTION === */}
        <section className="flex flex-col items-center justify-center py-24 text-center md:py-40">
          {/* Animated Gradient Line */}
          <div className="mb-8 h-2 w-full max-w-sm rounded-full bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse" />

          <h1 className="mb-6 text-5xl font-extrabold md:text-7xl">
            The Printr runs on <span className="italic">tonr</span>.
          </h1>
          <p className="max-w-xl text-xl text-light-400 md:text-2xl">
            The beta ink powering the machine.
            <br />
            No $TONR, no print.
          </p>
        </section>

        {/* === TOKENOMICS SECTION (WITH GRADIENT BORDERS) === */}
        <section className="mx-auto w-full max-w-4xl py-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Total Supply Box */}
            <div className="rounded-lg bg-tonr-gradient p-[1.5px]">
              <div className="h-full w-full rounded-md bg-dark-900 p-6 text-center">
                <h3 className="text-sm font-semibold uppercase text-light-400">
                  Total Supply
                </h3>
                <p className="mt-2 text-3xl font-bold text-light-100">
                  1,000,000,000
                </p>
              </div>
            </div>

            {/* Taxes Box */}
            <div className="rounded-lg bg-tonr-gradient p-[1.5px]">
              <div className="h-full w-full rounded-md bg-dark-900 p-6 text-center">
                <h3 className="text-sm font-semibold uppercase text-light-400">
                  Taxes
                </h3>
                <p className="mt-2 text-3xl font-bold text-light-100">0% / 0%</p>
              </div>
            </div>

            {/* Liquidity Box */}
            <div className="rounded-lg bg-tonr-gradient p-[1.5px]">
              <div className="h-full w-full rounded-md bg-dark-900 p-6 text-center">
                <h3 className="text-sm font-semibold uppercase text-light-400">
                  Liquidity
                </h3>
                <p className="mt-2 text-3xl font-bold text-light-100">
                  Locked
                </p>
              </div>
            </div>
          </div>

          {/* === NEW: DUAL CONTRACT ADDRESSES === */}
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* EVM Address */}
            <div className="rounded-lg border border-dark-900 bg-dark-900/50 p-6">
              <h3 className="text-sm font-semibold uppercase text-light-400">
                EVM Address (Base, ETH)
              </h3>
              <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row">
                <p className="truncate rounded-md bg-dark-950 px-4 py-2 font-mono text-sm text-light-200 sm:flex-grow">
                  0x...EVM...ADDRESS...HERE
                </p>
                <button
                  onClick={() => handleCopy('0x...EVM...ADDRESS...HERE')}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-dark-900 px-4 py-2 font-semibold text-light-100 transition hover:bg-opacity-75 sm:w-auto"
                >
                  <IconCopy className="w-4 h-4" />
                  Copy
                </button>
              </div>
            </div>

            {/* Solana Address */}
            <div className="rounded-lg border border-dark-900 bg-dark-900/50 p-6">
              <h3 className="text-sm font-semibold uppercase text-light-400">
                Solana Address
              </h3>
              <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row">
                <p className="truncate rounded-md bg-dark-950 px-4 py-2 font-mono text-sm text-light-200 sm:flex-grow">
                  So...SOLANA...ADDRESS...HERE
                </p>
                <button
                  onClick={() => handleCopy('So...SOLANA...ADDRESS...HERE')}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-dark-900 px-4 py-2 font-semibold text-light-100 transition hover:bg-opacity-75 sm:w-auto"
                >
                  <IconCopy className="w-4 h-4" />
                  Copy
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* === ABOUT SECTION === */}
        <section className="mx-auto w-full max-w-2xl py-24 text-center">
          <h2 className="mb-4 text-2xl font-bold text-light-100">
            What is $TONR?
          </h2>
          <p className="text-lg text-light-400">
            <span className="font-bold text-light-100">Printr</span> is the
            machine. A high-speed, cross-chain memecoin launcher.
          </p>
          <p className="mt-2 text-lg text-light-400">
            <span className="font-bold italic text-light-100">Tonr</span> is the
            ink. The essential fuel. Every print, every launch, every new meme
            draws from the <span className="italic">$TONR</span> supply.
          </p>
          <p className="mt-6 text-lg font-semibold text-light-100">
            Simple. The machine needs its ink.
          </p>
        </section>

        {/* === CTA SECTION (ALL BUTTONS BORDER-ONLY) === */}
        <section className="flex w-full flex-col items-center justify-center gap-4 pb-24 md:pb-32">
          <h3 className="text-3xl font-bold">Get your $TONR</h3>
          <p className="text-lg text-light-400">
            Join the community. Get the ink. Start printing.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            {/* "Buy" Button (no longer primary) */}
            <GradientButton href="#">
              Buy $TONR
              <IconArrowUpRight />
            </GradientButton>

            {/* "X" Button */}
            <GradientButton href="https://x.com/your-twitter">
              <IconTwitter />
              Follow on X
            </GradientButton>

            {/* "Telegram" Button */}
            <GradientButton href="https://t.me/your-telegram">
              <IconSend />
              Join Telegram
            </GradientButton>
          </div>
        </section>

        {/* === FOOTER === */}
        <footer className="flex w-full flex-col items-center justify-between gap-6 border-t border-dark-900 py-8 sm:flex-row">
          <span className="font-semibold text-light-400">$TONR 2025</span>
          {/* Animated Gradient Line */}
          <div className="h-1.5 w-full max-w-xs rounded-full bg-tonr-gradient bg-[length:200%_auto] animate-gradient-pulse" />
        </footer>
      </main>
    </div>
  )
}
