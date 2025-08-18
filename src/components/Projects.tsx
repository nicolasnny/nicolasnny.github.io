import InteractiveCard from './InteractiveCard'

type Project = {
  title: string
  description: string
  stack: string[]
  live?: string
  repo?: string
}

const projects: Project[] = [
  {
    title: 'Personal Website',
    description: 'A fast, accessible portfolio powered by React, Vite, and Tailwind with hot‑reloading DX.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'API Boilerplate',
    description: 'Production‑ready Node.js REST API with auth, testing, and CI/CD.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Jest', 'Docker'],
    repo: '#',
  },
  {
    title: 'UI Component Kit',
    description: 'Composable, accessible components documented with Storybook.',
    stack: ['React', 'Storybook', 'Tailwind'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t border-neutral-900/70">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold font-roboto-mono bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <InteractiveCard key={p.title} className="group">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-xs text-neutral-300">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    className="text-sm text-neutral-300 underline underline-offset-4 hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    className="text-sm text-neutral-300 underline underline-offset-4 hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                )}
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  )
} 