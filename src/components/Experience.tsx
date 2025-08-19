import InteractiveCard from './InteractiveCard'

type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
  stack: string[]
}

const experience: ExperienceItem[] = [
  {
    role: 'Technical Assistant Intern',
    company: 'Epitech Lyon',
    period: '2025 — Present',
    description: 'Assisting new students in their learning journey at Epitech',
    stack: ['C', 'C++', 'Python', 'Pedagogy', 'Problem solving']
  },
  {
    role: 'Software Developer Intern',
    company: 'SIC Marking',
    period: 'July 2024 — January 2025',
    description: 'Built a software to pilot a new marking system.',
    stack: ['C#', 'WPF', '.NET', 'Modbus TCP', 'XAML']
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
              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <span key={s} className="rounded-md border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-xs text-neutral-300">
                    {s}
                  </span>
                ))}
              </div>
            </InteractiveCard>
          ))}
        </ol>
      </div>
    </section>
  )
} 