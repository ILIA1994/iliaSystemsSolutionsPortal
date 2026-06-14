import { useEffect, useState } from "react";

import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaExclamationTriangle
} from "react-icons/fa";

import "../styles/FloatingBot.css";

export default function FloatingBot() {

  const initialMessage = [
    {
      sender: "bot",
      text: "👋 Bienvenido a Ilia Systems Solutions. ¿Cuál es tu nombre?"
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessage);
  const [input, setInput] = useState("");
  const [step, setStep] = useState("name");
  const [showConfirm, setShowConfirm] = useState(false);

  const [hover, setHover] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {

    const handleBeforeUnload = () => {
      sessionStorage.removeItem("ilia-chat");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };

  }, []);

  const resetChat = () => {

    setMessages(initialMessage);
    setInput("");
    setStep("name");

    setUserData({
      name: "",
      email: ""
    });

    setIsOpen(false);
    setShowConfirm(false);
  };

  const showMenu = (name) => {
    return `Gracias ${name} 👋

Selecciona una opción:

1️⃣ Servicios de Ilia Systems Solutions
2️⃣ Contacto
3️⃣ Horarios
4️⃣ Ubicación`;
  };

  const sendMessage = () => {

    if (!input.trim()) return;

    const currentInput = input.trim();

    const userMessage = {
      sender: "user",
      text: currentInput
    };

    let botResponse = "";

    if (step === "name") {

      setUserData(prev => ({
        ...prev,
        name: currentInput
      }));

      botResponse =
        "Perfecto. Ahora por favor ingresa tu correo electrónico.";

      setStep("email");

    } else if (step === "email") {

      setUserData(prev => ({
        ...prev,
        email: currentInput
      }));

      botResponse = showMenu(userData.name || currentInput);

      setStep("menu");

    } else if (step === "menu") {

      switch (currentInput.toUpperCase()) {

        case "1":
          botResponse =
`💡 Servicios de Ilia Systems Solutions

• Consultoría tecnológica
• Automatización de procesos
• Desarrollo de software a medida
• Soluciones con Inteligencia Artificial
• Integración de sistemas empresariales
• Transformación digital

Escribe:

M = Menú principal`;
          break;

        case "2":
          botResponse =
`📩 Contacto

Correo:
iliasystemssolutions@gmail.com

Atendemos solicitudes de proyectos, cotizaciones y asesorías.

Escribe M para volver al menú.`;
          break;

        case "3":
          botResponse =
`🕒 Horarios

Lunes a Viernes
09:00 AM - 06:00 PM

Escribe M para volver al menú.`;
          break;

        case "4":
          botResponse =
`📍 Ubicación

Ciudad de México
Servicio remoto disponible en todo México

Escribe M para volver al menú.`;
          break;

        case "M":
          botResponse = showMenu(userData.name);
          break;

        default:
          botResponse =
`Selecciona una opción válida:

1️⃣ Servicios de Ilia Systems Solutions
2️⃣ Contacto
3️⃣ Horarios
4️⃣ Ubicación

También puedes escribir M para regresar al menú.`;
      }
    }

    setMessages(prev => [
      ...prev,
      userMessage,
      {
        sender: "bot",
        text: botResponse
      }
    ]);

    setInput("");
  };

  return (
    <>

<div className="bot-wrapper">

  {hover && (
  <div className="bot-tooltip">

    <img
      src="/bot.png"
      alt="Bot"
      className="bot-tooltip-avatar"
    />

    <div className="bot-tooltip-text">
      <span className="bot-tooltip-title">
        Asistente Virtual
      </span>

      <span className="bot-tooltip-sub">
        ¿En qué puedo ayudarte?
      </span>
    </div>

  </div>
  )}

  <button
    className="floating-bot"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onClick={() => {
      if (isOpen) {
        setShowConfirm(true);
      } else {
        setIsOpen(true);
      }
    }}
  >
    {isOpen ? <FaTimes /> : <FaRobot />}
  </button>

</div>

      {isOpen && (
        <div className="chat-window">

<div className="chat-header">

  <img
    src="/bot.png"
    alt="Asistente Virtual"
    className="chat-header-avatar"
  />

  <span>Asistente Virtual</span>

</div>

          <div className="chat-body">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}

          </div>

          <div className="chat-footer">

            <input
              type="text"
              value={input}
              placeholder="Escribe aquí..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
            />

            <button
              type="button"
              onClick={sendMessage}
            >
              <FaPaperPlane />
            </button>

          </div>

        </div>
      )}

      {showConfirm && (

        <div className="confirm-overlay">

          <div className="confirm-modal">

            <div className="confirm-icon">
              <FaExclamationTriangle />
            </div>

            <h3>¿Finalizar conversación?</h3>

            <p>
              Si cierras el asistente se perderá toda la conversación actual.
            </p>

            <div className="confirm-actions">

              <button
                className="btn-cancel"
                onClick={() => setShowConfirm(false)}
              >
                Continuar Chat
              </button>

              <button
                className="btn-confirm"
                onClick={resetChat}
              >
                Finalizar
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}