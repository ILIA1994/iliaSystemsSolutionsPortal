import {
  FaRobot,
  FaBrain,
  FaLaptopCode,
  FaCloud,
  FaRocket
} from "react-icons/fa";

export default function Inicio() {
  return (
    <section className="hero">

      <img
        src="/image.png"
        alt="Tecnología e innovación"
        className="hero-image"
      />

      <div className="hero-cards">

        <div className="hero-card">
          <FaRobot className="hero-icon" />
          <h3>IA</h3>
          <p>Automatización inteligente</p>
        </div>

        <div className="hero-card">
          <FaBrain className="hero-icon" />
          <h3>Transformación</h3>
          <p>Evolución digital empresarial</p>
        </div>

        <div className="hero-card">
          <FaLaptopCode className="hero-icon" />
          <h3>Software</h3>
          <p>Soluciones a medida</p>
        </div>

        <div className="hero-card">
          <FaCloud className="hero-icon" />
          <h3>Cloud</h3>
          <p>Infraestructura escalable</p>
        </div>

        <div className="hero-card">
          <FaRocket className="hero-icon" />
          <h3>Innovación</h3>
          <p>Crecimiento tecnológico</p>
        </div>

      </div>

    </section>
  );
}