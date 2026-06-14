import { FaWhatsapp } from "react-icons/fa";
import "../styles/FloatingBot.css";

export default function FloatingWhatsApp() {

  const mensaje = encodeURIComponent(
    `Hola Ignacio,

Vi el sitio web de Ilia Systems Solutions y me gustaría recibir información sobre sus servicios.

Quedo atento(a) a sus comentarios.`
  );

  const openWhatsApp = () => {

    window.open(
      `https://wa.me/525525651695?text=${mensaje}`,
      "_blank",
      "noopener,noreferrer"
    );

  };

  return (

    <div className="whatsapp-wrapper">

      <div className="whatsapp-tooltip">

        <img
          src="ignacio.jpg"
          alt="Ignacio Vázquez"
          className="whatsapp-avatar"
        />

        <div className="whatsapp-info">

          <span className="whatsapp-name">
            Ignacio Vázquez
          </span>

          <span className="whatsapp-role">
            CEO · Ilia Systems Solutions
          </span>

        </div>

      </div>

      <button
        type="button"
        onClick={openWhatsApp}
        className="floating-whatsapp"
      >
        <FaWhatsapp />
      </button>

    </div>

  );

}