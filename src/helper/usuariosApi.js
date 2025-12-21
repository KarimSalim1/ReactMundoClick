const url = "backendmundoclick.vercel.app/api/usuarios";

export const getUsuario = async (desde = 0) => {
    try {
        const resp = await fetch(url + "?limite=" + limite + "&desde=" + desde, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": token,
            },
        });

        const data = await resp.json();
        return data;

    } catch (error) {
        console.log(error);
        throw new Error("No se pudo obtener la info");
    }
};

//traer usuario por id
export const getUsuarioById = async (id) => {
    try {
        const resp = await fetch(url + "/" + id);
        const data = await resp.json();

        return data;

    } catch (error) {
        console.log(error);
        throw new Error("No se pudo obtener la info");
    }
};

//crear un usuario (Registro)
export const crearUsuario = async (datos) => {
    try {
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const data = await resp.json();
        return data;

    } catch (error) {
        console.log(error);
        return { msg: "No se conectó con backend" };
    }
};