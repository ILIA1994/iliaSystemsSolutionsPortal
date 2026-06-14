import "../../styles/portal/nosotros.css";

export default function Nosotros() {
  return (
    <section className="nosotros-section">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <span className="section-badge">
              SOBRE NOSOTROS
            </span>

            <h1 className="section-title">
              Transformamos ideas en soluciones digitales
            </h1>

            <p className="section-description">
              En ILIA Systems Solutions desarrollamos soluciones
              tecnológicas modernas para empresas que buscan
              optimizar procesos, automatizar operaciones y acelerar
              su transformación digital.
            </p>

            <p className="section-description">
              Nuestro equipo cuenta con experiencia en desarrollo
              Full Stack, SAP, Cloud Computing, Integraciones,
              Inteligencia Artificial y Arquitecturas Empresariales.
            </p>

            <div className="stats-container">

              <div className="stat-card">
                <h2>10+</h2>
                <span>Años de experiencia</span>
              </div>

              <div className="stat-card">
                <h2>100%</h2>
                <span>Compromiso</span>
              </div>

              <div className="stat-card">
                <h2>24/7</h2>
                <span>Soporte</span>
              </div>

            </div>

          </div>

          <div className="col-lg-6">

            <div className="devices-container">

              {/* Desktop */}
              <div className="desktop-device">
                <div className="screen">
                  <div className="typing-code"></div>
                </div>

                <div className="desktop-stand"></div>
                <div className="desktop-base"></div>
              </div>

              {/* Laptop */}
              <div className="laptop-device">

                <div className="laptop-screen">
                  <div className="typing-code small"></div>
                </div>

                <div className="laptop-keyboard">
                  <div className="keys"></div>
                </div>

              </div>

              {/* Tablet */}
              <div className="tablet-device">
                <div className="tablet-screen">
                  <div className="typing-code tablet"></div>
                </div>
              </div>

              {/* Phone */}
              <div className="phone-device">
                <div className="phone-screen">
                  <div className="typing-code mobile"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}