import { useEffect } from "react";

export default function QuienesSomos() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-nextgen ">

      <div className="container about-container">

        {/* STORY */}
        <div className="about-story">

          <span className="about-tag reveal">
            Consultoría en Inteligencia Artificial y Transformación Digital
          </span>

          <h2 className="about-title reveal">
            Impulsamos empresas hacia una nueva era tecnológica
          </h2>

          <p className="about-text reveal">
            En <strong>Ilia Systems Solutions</strong> desarrollamos soluciones tecnológicas avanzadas basadas en inteligencia artificial,
            automatización de procesos y software escalable de alto rendimiento.
          </p>

          <p className="about-text reveal">
            Ayudamos a las organizaciones a optimizar sus operaciones, mejorar la toma de decisiones y aumentar su competitividad mediante tecnología inteligente.
          </p>

          {/* MÉTRICAS */}
          <div className="about-metrics">

            <div className="metric reveal">
              <span>+ IA aplicada</span>
              <p>Automatización inteligente de procesos</p>
            </div>

            <div className="metric reveal">
              <span>+ Automatización</span>
              <p>Flujos digitales optimizados</p>
            </div>

            <div className="metric reveal">
              <span>+ Eficiencia</span>
              <p>Optimización operativa empresarial</p>
            </div>

            <div className="metric reveal">
              <span>+ Escalabilidad</span>
              <p>Sistemas listos para crecer</p>
            </div>

            <div className="metric reveal">
              <span>+ Innovación</span>
              <p>Soluciones tecnológicas modernas</p>
            </div>

          </div>

        </div>

        {/* VISUAL - ARQUITECTURA IA */}
        <div className="about-visual">

          <div className="ai-architecture reveal">

            <div className="core-node"></div>

            <div className="node n1"></div>
            <div className="node n2"></div>
            <div className="node n3"></div>
            <div className="node n4"></div>

            <div className="line l1"></div>
            <div className="line l2"></div>
            <div className="line l3"></div>
            <div className="line l4"></div>

            <div className="pulse"></div>

          </div>

          {/* CARDS */}
          <div className="about-cards">

            <div className="card reveal">
              <h3>Inteligencia Artificial</h3>
              <p>Sistemas que aprenden, analizan y optimizan decisiones empresariales.</p>
            </div>

            <div className="card reveal">
              <h3>Automatización Empresarial</h3>
              <p>Reducción de tareas manuales mediante flujos digitales inteligentes.</p>
            </div>

            <div className="card reveal">
              <h3>Arquitectura Moderna</h3>
              <p>Infraestructura tecnológica segura, escalable y de alto rendimiento.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}