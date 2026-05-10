import { Globe, Smartphone, Monitor, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: <Globe size={42} />,
    title: 'Desarrollo Web'
  },
  {
    icon: <Smartphone size={42} />,
    title: 'Apps Móviles'
  },
  {
    icon: <Monitor size={42} />,
    title: 'Software Escritorio'
  },
  {
    icon: <ShieldCheck size={42} />,
    title: 'Consultoría IT'
  }
]

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Servicios Premium</h2>
          <p>Diseñados para empresas modernas.</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>

                <h4>{service.title}</h4>

                <p>
                  Soluciones escalables y modernas con experiencias visuales premium.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}