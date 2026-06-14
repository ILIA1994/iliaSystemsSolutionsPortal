import NeuralNetwork from "../effects/NeuralNetwork";
import "../../styles/portal/footer.css";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
export default function Footer() {

  return (

    <footer className="footer network-background"  >
 <NeuralNetwork />

      <div className="footer-glow footer-glow-1"></div>
      <div className="footer-glow footer-glow-2"></div>

      <div className="container-custom">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>
              Ilia Systems Solutions
            </h2>

            <p>
              Transformamos procesos empresariales
              mediante automatización, integración
              y soluciones tecnológicas de alto impacto.
            </p>

<div className="footer-socials">

  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-circle linkedin"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-circle facebook"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-circle instagram"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="social-circle youtube"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>

</div>
          </div>

          <div className="footer-links">

            <div>

              <h4>Servicios</h4>

              <ul>

                <li>Consultoría</li>
                <li>Automatización</li>
                <li>Integraciones</li>
                <li>Desarrollo Web</li>

              </ul>

            </div>

            <div>

              <h4>Empresa</h4>

              <ul>

                <li>Nosotros</li>
                <li>Proyectos</li>
                <li>Blog</li>
                <li>Contacto</li>

              </ul>

            </div>

            <div>

              <h4>Contacto</h4>

              <ul>

                <li>Ciudad de México</li>
                <li>iliasystemssolutions@gmail.com</li>
                <li>Atención Empresarial</li>

              </ul>

            </div>

          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">

          <span>
            © 2026 Ilia Systems Solutions
          </span>

          <span>
            Todos los derechos reservados
          </span>

        </div>

      </div>

    </footer>

  );

}