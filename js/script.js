import SlideShow from './slideshow.js'

const fotos = [
    './images/1.jpg', './images/2.jpg', './images/3.jpg',
    './images/4.jpg', './images/5.jpg', 'images/6.jpg'
]

const slideshow = new SlideShow()
const $img = document.getElementById('foto-slide')
const $avançar = document.getElementById('avançar-foto')
const $voltar = document.getElementById('voltar-foto')

slideshow.adicionarConjuntoDeElementos(fotos)

$avançar.addEventListener('click', ()=>{
    slideshow.irParaProximoElemento()
    $img.setAttribute('src', slideshow.irParaProximoElemento())
})

$voltar.addEventListener('click', ()=>{
    $img.setAttribute('src', slideshow.irParaElementoAnterior())
})

function start(){ //looping para passar as imagens sozinho
    setInterval(()=>{
        $img.setAttribute('src', slideshow.irParaProximoElemento())
    }, 5000)
}

start()