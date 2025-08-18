type Tech = { name: string; src: string }

const techsRow1: Tech[] = [
	{ name: 'C', src: 'https://cdn.simpleicons.org/c/ffffff' },
	{ name: 'C++', src: 'https://cdn.simpleicons.org/cplusplus/ffffff' },
	{ name: 'C#', src: 'https://img.icons8.com/?size=100&id=55205&format=png&color=FFFFFF' },
	{ name: 'Python', src: 'https://cdn.simpleicons.org/python/ffffff' },
	{ name: 'React', src: 'https://cdn.simpleicons.org/react/ffffff' },
	{ name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/ffffff' },
	{ name: 'Swift', src: 'https://cdn.simpleicons.org/swift/ffffff' },
]

function Row({ items }: { items: Tech[] }) {
	const sequence = [...items, ...items]
	return (
		<div className="relative overflow-hidden max-w-[640px] mx-auto rounded-md border border-neutral-800/60 bg-transparent">
			<div className="px-4 py-3">
				<div className="marquee-outer">
					  <div className="marquee-inner flex items-center whitespace-nowrap">
						{sequence.map((t, idx) => (
							<div key={`${t.name}-${idx}`} className="flex items-center justify-center min-w-24 px-2 opacity-80 hover:opacity-100 transition-opacity">
								<img
									src={t.src}
									alt={t.name}
									loading="lazy"
									className="h-8 w-8 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<style>{`
				.marquee-outer {
					position: relative;
					width: 100%;
					overflow: hidden;
				}
				.marquee-inner {
					display: flex;
					width: max-content;
					animation: marquee-x 8s linear infinite;
				}
				@keyframes marquee-x {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}
			`}</style>
		</div>
	)
}

export default function TechCarousel() {
	return (
		<div className="space-y-6">
			<Row items={techsRow1} />
		</div>
	)
} 