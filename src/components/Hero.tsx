export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-6xl px-4 min-h-[calc(100svh-64px)] py-12 flex flex-col justify-center">
        <div className="grid items-center gap-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-400">Software Engineer</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight font-roboto-mono bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Nicolas Nunney
            </h1>
            <p className="mt-6 max-w-2xl text-neutral-300 md:text-lg">
              I design and build fast, accessible web applications with React, TypeScript, and a strong focus on developer experience.
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      <a
        href="#skills"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-neutral-300 hover:text-white transition-colors"
        aria-label="Scroll down to skills"
      >
        <svg
          className="h-6 w-6 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="mt-1 text-xs">scroll down</span>
      </a>
    </section>
  )
} 