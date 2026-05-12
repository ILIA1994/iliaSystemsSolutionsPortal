
import "../styles/services.css";

const services = [
  {
    title: "Consultoría de Procesos",
    text: "Analizamos y optimizamos procesos empresariales."
  },
  {
    title: "Automatización de Procesos",
    text: "Reducimos tareas repetitivas y manuales."
  },
  {
    title: "Integraciones y Sistemas",
    text: "Conectamos plataformas y servicios."
  },
  {
    title: "Mejora Continua",
    text: "Aumentamos la eficiencia operativa."
  }
]

export default function Services(){
  return(
    <section className="services-section">
      <div className="container-custom">

        <span className="section-mini">
          NUESTROS SERVICIOS
        </span>

        <h2 className="section-title dark">
          Soluciones diseñadas para optimizar cada área de tu negocio
        </h2>

        <div className="services-grid">

          {services.map((service,index)=>(
            <div className="service-card" key={index}>
              <div className="service-icon"></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span>Más información →</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
