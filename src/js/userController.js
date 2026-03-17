import obterUsuario from "./userService.js";

export async function buscarUsuarioController(id) {
    try {
        const resultBusca = await obterUsuario(id);
        console.log(resultBusca);
    } catch (error) {
        console.error(error);      
    }
}


