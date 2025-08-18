import InteractiveCard from './InteractiveCard'

type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
}

const experience: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Acme Corp',
    period: '2023 — Present',
    description: 'Lead frontend initiatives, architect design systems, and mentor engineers.'
  },
  {
    role: 'Full‑stack Engineer',
    company: 'Startup XYZ',
    period: '2021 — 2023',
    description: 'Built and scaled web apps across the stack with a focus on performance.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="border-t border-neutral-900/70">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold font-roboto-mono bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">Experience</h2>
        <ol className="mt-8 space-y-6">
          {experience.map((item) => (
            <InteractiveCard as="li" key={item.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-white font-medium">{item.role}</p>
                  <p className="text-neutral-400 text-sm">{item.company}</p>
                </div>
                <span className="text-neutral-400 text-sm">{item.period}</span>
              </div>
              <p className="mt-3 text-neutral-300 text-sm">{item.description}</p>
            </InteractiveCard>
          ))}
        </ol>
      </div>
    </section>
  )
} 