import { ArrowUpRight, Droplet, Twitter, Send } from 'lucide-react'

/* Since we can't install the 'lucide-react' library, we'll
  create simple placeholder components for the icons.
  Vercel will build this just fine.
*/
const IconTwitter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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

const IconSend = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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

const IconArrowUpRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
)

// Main Page Component
export default function Home() {
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
            <div className="flex h-2.5 w-2.5 rounded-full bg-tonr-cyan"></div>
            <div className="flex h-2.5 w-2.5 rounded-full bg-tonr-pink"></div>
            <div className="flex h-2.5 w-2.5 rounded-full bg-tonr-yellow"></div>
          </div>

          {/* Social Links */}
          <nav className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://x.com/your-twitter"
              target="_blank"
              className="rounded-lg p-2 text-light-400 transition hover:bg-dark-900 hover:text-light-100"
              aria-label="X (Twitter)"
            >
              <IconTwitter />
            </a>
            <a
              href="https://t.me/your-telegram"
              target="_blank"
              className="rounded-lg p-2 text-light-400 transition hover:bg-dark-900 hover:text-light-100"
              aria-label="Telegram"
            >
              <IconSend />
            </a>
            <a
              href="#" // Add your "Buy" link here
              className="flex items-center gap-1.5 rounded-lg bg-light-100 px-4 py-2 text-sm font-semibold text-dark-950 transition hover:bg-light-200"
            >
              Buy Now
              <IconArrowUpRight />
            </a>
          </nav>
        </header>

        {/* === HERO SECTION === */}
        <section className="flex flex-col items-center justify-center py-24 text-center md:py-40">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-3 w-16 bg-tonr-cyan" />
            <div className="h-3 w-16 bg-tonr-pink" />
            <div className="h-3 w-16 bg-tonr-yellow" />
          </div>
          <h1 className="mb-6 text-5xl font-extrabold md:text-7xl">
            The Printr runs on <span className="italic">tonr</span>.
          </h1>
          <p className="max-w-xl text-xl text-light-400 md:text-2xl">
            The beta ink powering the machine.
            <br />
            No $TONR, no print.
          </p>
        </section>

        {/* === ABOUT SECTION === */}
        <section className="mx-auto w-full max-w-2xl rounded-lg border border-dark-900 bg-dark-900/50 p-8 text-center">
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

        {/* === CTA SECTION === */}
        <section className="flex w-full flex-col items-center justify-center gap-4 py-24 md:py-32">
          <h3 className="text-3xl font-bold">Get your $TONR</h3>
          <p className="text-lg text-light-400">
            Join the community. Get the ink. Start printing.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <a
              href="#" // Add your "Buy" link here
              className="flex items-center justify-center gap-2 rounded-lg bg-tonr-cyan px-6 py-3 text-lg font-bold text-black transition hover:opacity-80"
            >
              Buy $TONR
              <IconArrowUpRight />
            </a>
            <a
              href="https://x.com/your-twitter"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-lg bg-dark-900 px-6 py-3 text-lg font-bold text-light-100 transition hover:bg-opacity-80"
            >
              <IconTwitter />
              Follow on X
            </a>
            <a
              href="https://t.me/your-telegram"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-lg bg-dark-900 px-6 py-3 text-lg font-bold text-light-100 transition hover:bg-opacity-80"
            >
              <IconSend />
              Join Telegram
            </a>
          </div>
        </section>

        {/* === FOOTER === */}
        <footer className="flex w-full flex-col items-center justify-between gap-4 border-t border-dark-900 py-8 sm:flex-row">
          <span className="font-semibold text-light-400">$TONR 2025</span>
          <div className="flex items-center gap-2">
            <div className="flex h-2 w-10 rounded-full bg-tonr-cyan"></div>
            <div className="flex h-2 w-10 rounded-full bg-tonr-pink"></div>
            <div className="flex h-2 w-10 rounded-full bg-tonr-yellow"></div>
          </div>
        </footer>
      </main>
    </div>
  )
}
