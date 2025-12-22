// ✅ Definimos la URL base usando la variable de entorno de VITE
// Si no encuentra la variable (ej. en local), usa localhost por seguridad
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// ✅ Función para Iniciar Sesión
export const authLogin = async (datos) => {
    try {
        //Agregué "/api/auth" porque el backend define esa ruta en "this.authPath"
        const resp = await fetch(`${BASE_URL}/api/auth/login`, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        // Si el backend responde con error (ej. 400 o 404), lanzamos error para que lo atrape el catch
        if (!resp.ok) {
             const errorData = await resp.json();
             throw new Error(errorData.msg || "Error en la petición");
        }

        const data = await resp.json();
        return data;

    } catch (error) {
        console.error("Error en Login:", error);
        // Devolvemos el mensaje de error para mostrarlo en pantalla
        return { msg: error.message || "No se conectó con backend" };
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