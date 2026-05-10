const projects = [
  'Dashboard Empresarial',
  'Aplicación Móvil',
  'Sistema Administrativo'
]

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Proyectos</h2>
          <p>Diseños modernos y visuales premium.</p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4" key={index}>
              <div className="project-card">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
                  className="img-fluid"
                />

                <div className="project-content">
                  <h4>{project}</h4>
                  <p>Diseño moderno empresarial.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}