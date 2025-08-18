import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
	return (
		<div className="bg-[#1E1E1E] text-neutral-100 min-h-screen w-screen">
			<Navbar />
			<main className="px-4 sm:px-6 md:px-8">
				<Hero />
				<Skills />
				<Projects />
				<Experience />
				<Education />
				<Contact />
			</main>
			<footer className="border-t border-neutral-900/70">
				<div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-400">
					© {new Date().getFullYear()} Nicolas Nunney. All rights reserved.
				</div>
			</footer>
		</div>
	)
}

export default App
