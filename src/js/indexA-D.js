// 4.A
function buscarMensagem() {
    return new Promise((result, rej) => {
        setTimeout(() => {// muito mais simples do que no react
            result('Operação Concluída')
        }, 4000);//4 segundinhos, da pra dar um gole no café
    })
}
// 4.B
buscarMensagem()
    .then((result) => {
        console.log(`Resultado do consumo com then(): ${result}`);
    }).catch((erro) => {
        console.error(erro);
    });

// 4.C
async function espereABusca() {
    try{
        const result = await buscarMensagem()//Espera a resposta da chamada de função antes de salvar o resultado e continuar com o código
        console.log(`Resultado da busca: ${result}`);
    }catch (erro){
        console.error(erro);
    }
}
espereABusca()

// 4.D
function buscarUsuario() {
    return new Promise((resolve, reject) => {// não tinha visto que o VS tinha uma versão pronta do promise "newpromise"
        setTimeout(() => {
            reject("Não temos o usuario em questão cadastrado no BD, gostaria de fazer o Cartão da loja e resolver esse problema?")
        }, 1500);
    })
}

async function procurarPeloEmOvo() {// se tá procurando problema, mas em questões mais serias seria executarBucaUsuario()
    try {
        const usuario = await buscarUsuario()
        console.log(`Se apareceu tu fez errado :)`);
    } catch (error) {
        console.error(error);  
    }
}
procurarPeloEmOvo();