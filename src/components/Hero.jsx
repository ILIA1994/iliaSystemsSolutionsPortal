import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-badge">
                Soluciones tecnológicas a la medida
              </span>

              <h1 className="hero-title">
                Transformamos ideas en soluciones digitales
              </h1>

              <p className="hero-text">
                Desarrollo de aplicaciones web, móviles y de escritorio con diseños premium,
                animaciones modernas y arquitectura escalable.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-primary btn-lg rounded-pill px-5">
                  Nuestros servicios
                </button>

                <button className="btn btn-outline-light btn-lg rounded-pill px-5">
                  Ver proyectos
                </button>
              </div>

              <div className="stats-row">
                <div>
                  <h3>+50</h3>
                  <span>Proyectos</span>
                </div>

                <div>
                  <h3>98%</h3>
                  <span>Clientes satisfechos</span>
                </div>

                <div>
                  <h3>24/7</h3>
                  <span>Soporte</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="hero-image-wrapper"
            >
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop"
                className="img-fluid hero-image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}