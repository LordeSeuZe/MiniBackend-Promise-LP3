function buscarMensagem() {
    return new Promise((res, rej)=>{
        setTimeout(() => {
        res('Operação Concluida')
        }, timeout);
    })
}