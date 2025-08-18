import InteractiveCard from './InteractiveCard'

type EducationItem = {
  degree: string
  school: string
  period: string
  details?: string
}

const education: EducationItem[] = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'Your University',
    period: '2017 — 2020',
    details: 'Focused on software engineering, algorithms, and web technologies.'
  },
  {
    degree: 'M.Sc. Software Engineering',
    school: 'Your University',
    period: '2020 — 2022',
    details: 'Specialized in frontend architectures and human‑computer interaction.'
  },
]

export default function Education() {
  return (
    <section id="education" className="border-t border-neutral-900/70">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold font-roboto-mono bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">Education</h2>
        <ol className="mt-8 space-y-6">
          {education.map((item) => (
            <InteractiveCard as="li" key={`${item.school}-${item.degree}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-white font-medium">{item.degree}</p>
                  <p className="text-neutral-400 text-sm">{item.school}</p>
                </div>
                <span className="text-neutral-400 text-sm">{item.period}</span>
              </div>
              {item.details && (
                <p className="mt-3 text-neutral-300 text-sm">{item.details}</p>
              )}
            </InteractiveCard>
          ))}
        </ol>
      </div>
    </section>
  )
} 