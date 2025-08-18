import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/70 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="font-semibold tracking-tight text-neutral-100">Nicolas Nunney</a>
        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 text-neutral-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block h-0.5 w-4 bg-neutral-200" />
          <span className="block h-0.5 w-4 bg-neutral-200 mt-1" />
          <span className="block h-0.5 w-4 bg-neutral-200 mt-1" />
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-neutral-800 md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-neutral-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
} 