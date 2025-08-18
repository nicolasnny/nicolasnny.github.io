import TechCarousel from './TechCarousel'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-neutral-900/70">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold font-roboto-mono bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">Skills</h2>
        <p className="mt-4 text-neutral-300">A snapshot of tools and platforms I use regularly.</p>
        <div className="mt-8">
          <TechCarousel />
        </div>
      </div>
    </section>
  )
} 