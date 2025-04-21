import React, { useState } from 'react';
import '../css/Contacto.css'; // Asegúrate de usar el archivo de estilos que prefieras
import { FaCommentDots, FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Importa el icono de WhatsApp

function Contacto({ darkMode }) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setTimeout(() => {
        setMessages([...messages, { text: getChatbotResponse(newMessage), sender: 'bot' }]);
      }, 500);
      setNewMessage('');
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const getChatbotResponse = (userMessage) => {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes('dirección')) {
      return 'Nuestra dirección es Calle Falsa 123, La Paz, Bolivia.';
    } else if (userMessage.includes('teléfono')) {
      return 'Nuestro número de teléfono es +591 7XXXXXXX.';
    } else if (userMessage.includes('correo') || userMessage.includes('email')) {
      return 'Nuestro correo electrónico es info@tunegocio.bo.';
    } else if (userMessage.includes('hola') || userMessage.includes('buenas')) {
      return '¡Hola! ¿En qué puedo ayudarte hoy? Si necesitas más asistencia, puedes contactarnos por WhatsApp.';
    } else if (userMessage.includes('whatsapp')) {
      // Respuesta si el usuario menciona WhatsApp directamente
      return '¡Claro! Haz clic en el icono de WhatsApp para continuar la conversación.';
    } else {
      return 'Gracias por tu mensaje. Te responderemos a la brevedad. Si necesitas asistencia inmediata, puedes contactarnos por WhatsApp.';
    }
  };

  // Reemplaza con tu número de WhatsApp (con el código de país, sin el +)
  const whatsappNumber = '59175824357';
  const defaultWhatsappMessage = 'Hola, necesito más información desde el chatbot web.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;
  const facebookLink = 'https://facebook.com/tunegocio'; // Reemplaza con tu enlace de Facebook
  const linkedinLink = 'https://linkedin.com/company/tunegocio'; // Reemplaza con tu enlace de LinkedIn

  return (
    <section id="contacto" className={`contacto-seccion ${darkMode ? 'dark' : ''}`}>
      <div className="contacto-grid">
        <div className="contacto-info">
          
          {/*<p>¡No dudes en ponerte en contacto con nosotros!</p>*/}
          <div className="informacion-contacto">
            <div>
              <h3>Dirección:</h3>
              <p> La Paz - Bolivia</p>
            </div>
            
            <div>
              <h3>Correo Electrónico:</h3>
              <p>reynaldocalani80@tgmail.com</p>
            </div>
            <div>
              <h3>Redes Sociales:</h3>
              <div className="redes-sociales-links">
               <a href={facebookLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook size={24} />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a> 
              </div>
            </div>
          </div>
          {/* Enlace para continuar en WhatsApp */}
          <div className="whatsapp-link-container">
            <p>¿Necesitas asistencia más personalizada?</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
              <FaWhatsapp size={24} /> Continuar en WhatsApp
            </a>
          </div>
        </div>

        <div className="chatbot-container">
          {/* Chatbot Icon */}
          <div className={`chatbot-icon ${isChatbotOpen ? 'open' : ''}`} onClick={toggleChatbot}>
            <FaCommentDots size={30} color={darkMode ? '#eee' : '#333'} />
          </div>

          {/* Chatbot Window */}
          {isChatbotOpen && (
            <div className={`chatbot-window ${darkMode ? 'dark' : ''}`}>
              <div className="chatbot-header">
                Chat en vivo
                <button onClick={toggleChatbot} className="chatbot-close-button">
                  X
                </button>
              </div>
              <div className="chatbot-messages">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.sender}`}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="chatbot-input">
                <input
                  type="text"
                  value={newMessage}
                  onChange={handleInputChange}
                  placeholder="Escribe tu mensaje..."
                />
                <button onClick={handleSendMessage}>Enviar</button>
              </div>
              {/* Enlace dentro del chatbot también (opcional) */}
              <div className="chatbot-whatsapp-link">
                <p>¿Prefieres chatear directamente en WhatsApp?</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button-small">
                  <FaWhatsapp size={20} /> Chatear en WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contacto;