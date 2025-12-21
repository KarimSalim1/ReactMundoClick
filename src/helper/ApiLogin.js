// Definimos la base para no repetir código
// const BASE_URL = "https://backend-mundoclick26.vercel.app/api/auth";
const BASE_URL = "http://localhost:3000/api/auth";

// ✅ Función para Iniciar Sesión
export const authLogin = async (datos) => {
    try {
        const resp = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
        return { msg: "No se conectó con backend" };
    }
}

// ✅ Función para Solicitar Recuperación (Enviar correo)
export const recuperarPassword = async (correo) => {
    try {
        const resp = await fetch(`${BASE_URL}/olvide-password`, {
            method: "POST",
            body: JSON.stringify({ correo }), 
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
        return { msg: "No se pudo conectar con el servidor" };
    }
}

// ✅ NUEVA: Función para Guardar la Nueva Contraseña
export const actualizarPassword = async (token, password) => {
    try {
        const resp = await fetch(`${BASE_URL}/actualizar-password`, {
            method: "POST",
            body: JSON.stringify({ token, password }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        const data = await resp.json();
        // Agregamos 'ok' basado en el status para facilitar la lógica en el componente
        return { ...data, ok: resp.ok };

    } catch (error) {
        console.log(error);
        return { ok: false, msg: "No se pudo conectar con el servidor" };
    }
}