export default class SlideShow {
    constructor(){
        this.inicio = null
        this.final = null
        this.elementoAtual = null
    }
    adicionarElemento(url){   
        if(this.inicio == null){
            this.inicio = { url: url, proximo: this.inicio, anterior: this.inicio }
            this.final = this.inicio
            this.elementoAtual = this.inicio
        } else {
            this.final.proximo = { url: url, proximo: this.inicio, anterior: this.final }
            this.final = this.final.proximo
            this.inicio.anterior = this.final
            this.elementoAtual = this.inicio
        }
    }

    adicionarConjuntoDeElementos(vetorDeUrl){
        vetorDeUrl.forEach((elemento)=>{
            this.adicionarElemento(elemento)
        })
    }

    irParaProximoElemento(){
        this.elementoAtual = this.elementoAtual.proximo
        return this.elementoAtual.url
    }

    irParaElementoAnterior(){
        this.elementoAtual = this.elementoAtual.anterior
        return this.elementoAtual.url
    }
}