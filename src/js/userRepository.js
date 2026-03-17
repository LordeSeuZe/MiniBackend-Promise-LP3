const users = [
    { id: 1, nome: "Rafael Cacho" },
    { id: 2, nome: "Dr. Leandro Guedes" },
    { id: 3, nome: "Amelie Carmen" }
];

function buscarUsuario(id) {
    return new Promise((resolve, reject) => {//Tentarei ser mais serio
        setTimeout(() => {
            const usuario = users.find(user => user.id === id)
            if (usuario) {
                resolve(`Usuário: ${usuario.nome}, com o ID: ${usuario.id}, foi encontrado!`);
            } else {
                reject(`Usuário não encontrado`)
            }
        }, 2000);
    })
}

async function executarBucaUsuario(id) {
    try {
        const usuario = await buscarUsuario(id);
        console.log(usuario);
    } catch (error) {
        console.error(error);

    }
}

export default buscarUsuario;