export default function WhyUs() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="why-title">
              Más que desarrolladores,
              somos tu aliado tecnológico.
            </h2>

            <div className="why-list">
              <div className="why-item">
                <h5>Diseño moderno</h5>
                <p>Interfaces premium inspiradas en empresas tecnológicas.</p>
              </div>

              <div className="why-item">
                <h5>Escalable</h5>
                <p>Arquitectura preparada para crecer.</p>
              </div>

              <div className="why-item">
                <h5>Soporte continuo</h5>
                <p>Acompañamiento completo para tu empresa.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
              className="img-fluid rounded-5 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}