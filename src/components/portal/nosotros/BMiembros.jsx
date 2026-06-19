import { useEffect, useRef } from "react";

export default function BMiembros() {

  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="members-section" ref={sectionRef}>

      <div className="members-bg-circle circle-1"></div>
      <div className="members-bg-circle circle-2"></div>
      <div className="members-bg-circle circle-3"></div>

      <div className="container">

        <div className="members-header reveal">
          <span className="members-tag">
            NUESTROS FUNDADORES
          </span>

          <h2>
            Las personas detrás de
            <br></br>
            <span> Ilia Systems Solutions</span>
          </h2>

        </div>

        <div className="row justify-content-center g-5">

          {/* Ignacio */}
          <div className="col-lg-5 col-md-6">

            <div className="founder-card founder-card-ceo">

              <div className="card-border"></div>

              <div className="founder-top">

                <div className="founder-photo">
                  <img
                    src="https://ui-avatars.com/api/?name=Ignacio+Vazquez+Benitez&background=0f172a&color=ffffff&size=512"
                    alt="Ignacio Vázquez Benítez"
                  />
                </div>

                <div className="founder-badge">
                  CEO & Co-Founder
                </div>

              </div>

              <div className="founder-content">

                <h3>
                  Ignacio Vázquez Benítez
                </h3>

                <div className="founder-line"></div>

                <p>
                  Lidera la estrategia empresarial, innovación y crecimiento
                  de Ilia Systems Solutions. Especialista en desarrollo de
                  software, arquitectura empresarial, automatización de
                  procesos e integración de plataformas tecnológicas.
                </p>

                <div className="founder-techs">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>SAP</span>
                  <span>AWS</span>
                </div>

              </div>

            </div>

          </div>

          {/* Marco */}
          <div className="col-lg-5 col-md-6">

            <div className="founder-card founder-card-cto">

              <div className="card-border"></div>

              <div className="founder-top">

                <div className="founder-photo">
                  <img
                    src="https://ui-avatars.com/api/?name=Marco+Antonio+Vazquez+Benitez&background=0f172a&color=ffffff&size=512"
                    alt="Marco Antonio Vázquez Benítez"
                  />
                </div>

                <div className="founder-badge">
                  CTO & Co-Founder
                </div>

              </div>

              <div className="founder-content">

                <h3>
                  Marco Antonio Vázquez Benítez
                </h3>

                <div className="founder-line"></div>

                <p>
                  Responsable de la visión tecnológica de la compañía.
                  Lidera la evolución de la infraestructura, innovación,
                  seguridad y arquitectura tecnológica para garantizar
                  soluciones modernas, robustas y escalables.
                </p>

                <div className="founder-techs">
                  <span>Cloud</span>
                  <span>DevOps</span>
                  <span>Security</span>
                  <span>Infrastructure</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}