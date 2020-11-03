import ListaCircular from './ListaCircular.js'

const fotos = ['./images/1.jpg', './images/2.jpg', './images/3.jpg']
const c = new ListaCircular()
c.adicionarConjuntoDeElementos(fotos)

const $img = document.getElementById('foto-carrossel')

function start(){
    setInterval(()=>{
        $img.setAttribute('src', c.obterUrlAtual())
        c.irParaProximoElemento()
    }, 2100)
}

start()