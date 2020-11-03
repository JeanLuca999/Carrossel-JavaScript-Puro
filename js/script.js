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
    $img.setAttribute('src', carrossel.irParaProximoElemento())
})

$voltar.addEventListener('click', ()=>{
    $img.setAttribute('src', carrossel.irParaElementoAnterior())
})

function start(){ //looping para passar as imagens sozinho
    setInterval(()=>{
        $img.setAttribute('src', carrossel.irParaProximoElemento())
    }, 5000)
}

start()