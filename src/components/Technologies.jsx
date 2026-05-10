const techs = [
  'React',
  'Vite',
  'Bootstrap',
  'Node.js',
  'AWS',
  'TypeScript',
  'MongoDB',
  'PostgreSQL'
]

export default function Technologies() {
  return (
    <section className="tech-section">
      <div className="container text-center">
        <h2 className="text-white mb-5">Tecnologías modernas</h2>

        <div className="tech-grid">
          {techs.map((tech) => (
            <div className="tech-card" key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}