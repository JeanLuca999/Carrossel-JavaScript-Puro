import Carrossel from './carrossel.js'

const fotos = [
    './images/1.jpg', './images/2.jpg', './images/3.jpg',
    './images/4.jpg', './images/5.jpg', 'images/6.jpg'
]

const carrossel = new Carrossel()
const $img = document.getElementById('foto-carrossel')
const $avançar = document.getElementById('avançar-foto')
const $voltar = document.getElementById('voltar-foto')

carrossel.adicionarConjuntoDeElementos(fotos)

$avançar.addEventListener('click', ()=>{
    carrossel.irParaProximoElemento()
    $img.setAttribute('src', carrossel.obterUrlAtual())
})

$voltar.addEventListener('click', ()=>{
    carrossel.irParaElementoAnterior()
    $img.setAttribute('src', carrossel.obterUrlAtual())
})

function start(){ //looping para passar as imagens sozinho
    setInterval(()=>{
        $img.setAttribute('src', carrossel.obterUrlAtual())
        carrossel.irParaProximoElemento()
    }, 3700)
}

start()