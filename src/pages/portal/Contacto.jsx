import { useState } from "react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCar,
  FaBuilding,
} from "react-icons/fa";

import "../../styles/portal/contacto.css";

export default function Contacto() {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = "Ingresa tu nombre";
    }

    if (!form.correo.trim()) {
      newErrors.correo = "Ingresa tu correo";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)
    ) {
      newErrors.correo = "Correo inválido";
    }

    if (
      form.telefono &&
      !/^[0-9+\s()-]{10,20}$/.test(form.telefono)
    ) {
      newErrors.telefono = "Teléfono inválido";
    }

    if (!form.asunto.trim()) {
      newErrors.asunto = "Ingresa un asunto";
    }

    if (!form.mensaje.trim()) {
      newErrors.mensaje = "Ingresa un mensaje";
    }

    if (form.mensaje.length < 10) {
      newErrors.mensaje =
        "Debe contener al menos 10 caracteres";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");

    if (!validate()) return;

    try {
      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 2500)
      );

      console.log("Formulario enviado:", form);

      setSuccess(
        "Tu mensaje ha sido enviado correctamente."
      );

      setForm({
        nombre: "",
        correo: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="container-fluid px-lg-5 contact-wrapper">
        <div className="row g-4 align-items-start">
          {/* LEFT COLUMN */}



          {/* RIGHT COLUMN */}
          <div className="col-lg-8">

              <div className="map-container">

              <div className="glass-card map-card">

                <iframe
                  title="ILIA Systems Solutions"
                  src="https://maps.google.com/maps?q=19.4123133,-99.1671027&z=17&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="location-card">

                  <div className="location-badge">
                    📍 Nuestra Ubicación
                  </div>

                  <h3>
                    ILIA Systems Solutions
                  </h3>

                  <p>
                    Ciudad de México, México
                  </p>

                  <a
                    href="https://maps.google.com/?q=19.4123133,-99.1671027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-button"
                  >
                    Ver en Google Maps
                  </a>

                </div>

              </div>

            </div>

            <div className="glass-card mt-4">
              <div className="contact-info">
                <h3 className="info-title">
                  Información de contacto
                </h3>

                <div className="row">
                  <div className="col-md-6">
                    <div className="info-item">
                      <div className="icon-box">
                        <FaPhone />
                      </div>

                      <div>
                        <h5>Teléfono</h5>
                        <p>+52 55 1234 5678</p>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="icon-box">
                        <FaEnvelope />
                      </div>

                      <div>
                        <h5>Correo electrónico</h5>
                        <p>
                          contacto@iliasystems.com
                        </p>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="icon-box">
                        <FaClock />
                      </div>

                      <div>
                        <h5>Horario</h5>
                        <p>
                          Lunes a Viernes
                          <br />
                          9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="info-item">
                      <div className="icon-box">
                        <FaMapMarkerAlt />
                      </div>

                      <div>
                        <h5>Dirección</h5>
                        <p>
                          Av. Innovación 123
                          <br />
                          Oficina 502
                          <br />
                          Querétaro, México
                        </p>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="icon-box">
                        <FaCar />
                      </div>

                      <div>
                        <h5>Estacionamiento</h5>
                        <p>
                          Contamos con estacionamiento
                          para visitantes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className="col-lg-4">
              <br></br>
              <br></br>

<div className="phone-frame">

  <div className="phone-notch"></div>

  <div className="phone-screen">

    <div className="phone-status">
      <span>10:30</span>
      <span>📶 🔋</span>
    </div>

    <div className="phone-app">

      <h3>📩 Contacto</h3>

      <p>
        Escríbenos y te responderemos pronto.
      </p>

      <form onSubmit={handleSubmit}>

        <div className="mobile-input">
          <label>Nombre</label>

          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="mobile-input">
          <label>Correo</label>

          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
          />
        </div>

        <div className="mobile-input">
          <label>Teléfono</label>

          <input
            type="text"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
          />
        </div>

        <div className="mobile-input">
          <label>Mensaje</label>

          <textarea
            rows="6"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
        </div>

        <button
          className="mobile-send-btn"
          type="submit"
        >
          Enviar mensaje
        </button>

      </form>

    </div>

  </div>

  <div className="phone-home-bar"></div>

</div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
}