import   buscarUsuario   from "./userRepository.js";

export async function obterUsuario(id) {
    return  buscarUsuario(id);//sem await por que a função buscarUsuario já tem
}

