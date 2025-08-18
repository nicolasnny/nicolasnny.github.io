export default function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-900/70">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Get in touch</h2>
        <p className="mt-4 max-w-2xl text-neutral-300">
          Interested in collaborating ? I’m open to internships.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:nicolas.nunney@gmail.com" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-neutral-900 hover:bg-neutral-200 transition-colors">
            Email me
          </a>
          <a href="https://github.com/nicolasnny" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-4 py-2 text-white hover:bg-neutral-900 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nicolasnunney" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-4 py-2 text-white hover:bg-neutral-900 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
} 