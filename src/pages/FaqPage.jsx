import { useState } from "react";
import "../styles/FaqPage.css";


// Lista de preguntas y respuestas
const preguntasFrecuentes = [
  {
    pregunta: "¿Cómo realizo una compra?",
    respuesta: "Seleccioná el producto que querés, agregalo al carrito y completá la información de pago y envío."
  },
  {
    pregunta: "¿Qué medios de pago aceptan?",
    respuesta: "Aceptamos tarjetas de crédito y débito"
  },
  {
    pregunta: "¿Hacen envíos a todo el pais?",
    respuesta: "Sí, realizamos envíos a todo el país a través de empresas de logística confiables"
  },
  {
    pregunta: "¿Cuánto tarda en llegar mi pedido?",
    respuesta: "Los tiempos de entrega dependen de tu ubicación. Generalmente el envío tarda entre 2 y 7 días hábiles."
  },
  {
    pregunta: "¿Cómo puedo seguir mi pedido?",
    respuesta: "Una vez despachado, te enviamos un número de seguimiento para que puedas ver el estado de tu compra."
  },
  {
    pregunta: "¿Qué hago si mi producto llega con un problema?",
    respuesta: "Contactanos de inmediato a nuestro soporte y te ayudaremos a resolverlo lo antes posible."
  }
];

export default function FAQPage() {
  // Guarda qué pregunta está abierta (por número)
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  // Abre o cierra una pregunta
  function cambiarPregunta(indice) {
    if (preguntaAbierta === indice) {
      setPreguntaAbierta(null); // si ya estaba abierta, se cierra
    } else {
      setPreguntaAbierta(indice); // abre la pregunta seleccionada
    }
  }

  return (
    <section className="faq">
      <h1 className="faq-titulo">Preguntas Frecuentes</h1>

      {preguntasFrecuentes.map((item, indice) => (
        <div className="faq-item" key={indice}>
          <button
            className="faq-pregunta"
            onClick={() => cambiarPregunta(indice)}
          >
            {item.pregunta}
          </button>

          {preguntaAbierta === indice && (
            <p className="faq-respuesta">
              {item.respuesta}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
