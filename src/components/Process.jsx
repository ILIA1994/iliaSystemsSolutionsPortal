
import "../styles/process.css";

export default function Process(){
  return(
    <section className="process-section">
      <div className="container-custom">

        <span className="section-mini blue">
          NUESTRO PROCESO
        </span>

        <h2 className="section-title dark">
          Un enfoque claro para transformar tu negocio
        </h2>

        <div className="process-grid">

          <div className="process-card">
            <div className="number">01</div>
            <h4>Diagnóstico</h4>
          </div>

          <div className="process-card">
            <div className="number">02</div>
            <h4>Diseño</h4>
          </div>

          <div className="process-card">
            <div className="number">03</div>
            <h4>Implementación</h4>
          </div>

          <div className="process-card">
            <div className="number">04</div>
            <h4>Pruebas y Ajustes</h4>
          </div>

          <div className="process-card">
            <div className="number">05</div>
            <h4>Mejora Continua</h4>
          </div>

        </div>

      </div>
    </section>
  )
}
