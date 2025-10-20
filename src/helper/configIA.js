import { GoogleGenAI} from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

/* consulta a gemini */
export async function mundoclick(mensaje = "") {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: mensaje,
    });
    const respuesta = response.text;
    console.log(respuesta);
    return respuesta;
};