console.log(carrito)
console.log(carrito.length)

const totalFinalizar = document.getElementById("totalFinalizar")
const cantidadFinalizar = document.getElementById("cantidadFinalizar")

const mostrarTotal = () =>{
    let total = 0
    carrito.forEach(funko =>{
        total += funko.precio * funko.cantidad
    })

}

totalFinalizar.innerHTML = `$${mostrarTotal()}`
cantidadFinalizar.innerHTML = carrito.length

/////////ASINCRONICO////////////////


// const imgAsinUno = document.getElementById("imgAsinUno")
// const imgAsinDos = document.getElementById("imgAsinDos")
// const imgAsinTres = document.getElementById("imgAsinTres")
// const imgAsinCuatro = document.getElementById("imgAsinCuatro")
// const imgAsinCinco = document.getElementById("imgAsinCinco")
// const imgAsinSeis = document.getElementById("imgAsinSeis")
// const imgAsinSiete = document.getElementById("imgAsinSiete")
// const imgAsinOcho = document.getElementById("imgAsinOcho")
// const imgAsinNueve = document.getElementById("imgAsinNueve")
// const imgAsinDiez = document.getElementById("imgAsinDiez")
// const imgAsinOnce = document.getElementById("imgAsinOnce")
// const imgAsinDoce = document.getElementById("imgAsinDoce")
// const imgAsinTrece = document.getElementById("imgAsinTrece")
// const imgAsinCatorce = document.getElementById("imgAsinCatorce")
// const imgAsinQuince = document.getElementById("imgAsinQuince")
// const imgAsindDiSeis = document.getElementById("imgAsindDiSeis")
// const imgAsindDiSiete = document.getElementById("imgAsindDiSiete")
// const imgAsindDiOcho = document.getElementById("imgAsindDiOcho")


// const contenedorUno = document.getElementById("contenedorUno")
// const contenedorDos = document.getElementById("contenedorDos")
// const contenedorTres = document.getElementById("contenedorTres")



const asincronicoGral = document.getElementById ("asincronicoGral")


const arrayUnoImg = [
    "amazing spiderman.png",
    "coyote.png",
    "spiderWoman.png"
]

let i = 0

setInterval(() => {
    asincronicoGral.innerHTML = arrayUnoImg[i]
    i++
}, 1000);



/* <section  class="asincronicoGral">
<div class="asincronicoUno">
    <img class="imgUno" src="../img/otros/amazing spiderman.png" alt="">
    <img class="imgUno" src="../img/otros/coyote.png" alt="">
    <img class="imgUno" src="../img/otros/spiderWoman.png" alt="">
    <img class="imgUno" src="../img/otros/jacksparrow.png" alt="">
    <img class="imgUno" src="../img/otros/poo.png" alt="">
    <img class="imgUno" src="../img/otros/dinoBlue.png" alt="">
</div>

<div class="asincronicoDos">
    <img class="imgUno" src="../img/otros/sharknado.png" alt="">
    <img class="imgUno" src="../img/otros/homeroMuerte.png" alt="">
    <img class="imgUno" src="../img/otros/ironman final.png" alt="">
    <img class="imgUno" src="../img/otros/mandalorian.png" alt="">
    <img class="imgUno" src="../img/otros/charmander.png" alt="">
    <img class="imgUno" src="../img/otros/bobEsponja.png" alt="">
</div>

<div class="asincronicoTres">
    <img class="imgUno" src="../img/otros/deadpoolUno.png" alt="">
    <img class="imgUno" src="../img/otros/deadpoolRey.png" alt="">
    <img class="imgUno" src="../img/otros/deadpoolCinco.png" alt="">
    <img class="imgUno" src="../img/otros/deadpoolDos.png" alt="">
    <img class="imgUno" src="../img/otros/deadpoolCuatro.png" alt="">
    <img class="imgUno" src="../img/otros/deadpoolPorrista.png" alt="">
</div>

</section>  */