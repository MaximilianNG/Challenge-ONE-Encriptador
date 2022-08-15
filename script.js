//Capturo los elementos en variables usando el nombre de su clase.
//Podría usar IDs pero hay muy pocos elementos y no amerita.
const ingresado = document.querySelector(".campoParaIngresarTexto");
const desencriptado = document.querySelector(".mensajeDesencriptado");
const botonEncriptar = document.querySelector(".encriptar");
const botonDesencriptar = document.querySelector(".desencriptar");
const munieco = document.querySelector(".muñeco");
const recomendacion = document.querySelector(".recomendacion");
const botones2 = document.querySelector(".botones2");
const botonRefrescar = document.querySelector(".refrescar");
const botonCopiar = document.querySelector(".copiar");
const desktop = window.matchMedia("(min-width: 992px)");

//Diccionario que contiene la clave
const clave = {"a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"};
const claveR = {"ai":"a", "enter":"e", "imes":"i", "ober":"o", "ufat":"u"};

//Regular expressions para encriptar y desencriptar
const regexp = /[aeiou]/g;
const regexpR = /(ai)|(enter)|(imes)|(ober)|(ufat)/g;

//Funciones que encriptan y desencriptan para ser pasadas a replace()
function encriptar (texto) {
    return clave[texto]
}

function desencriptar (texto) {
    return claveR[texto]
}

//Botón de Encriptar: captura el texto, lo encripta y lo muestra.
//También oculta el muñeco, la recomendación y quita la negrita al texto.
botonEncriptar.onclick = function(texto) {
    texto = ingresado.value;
    let textoEncriptado = texto.replace(regexp, encriptar);
    munieco.style.display = "none";
    recomendacion.style.display = "none";
    desencriptado.innerText = textoEncriptado;
    desencriptado.style.fontWeight = "normal";
    //break-all evita que las palabras muy largas salgan de su contenedor
    desencriptado.style.wordBreak = "break-all";
    botones2.style.display = "block";
}

botonDesencriptar.onclick = function(texto) {
    texto = ingresado.value;
    let textoDesencriptado = texto.replace(regexpR, desencriptar);
    munieco.style.display = "none";
    recomendacion.style.display = "none";
    desencriptado.innerText = textoDesencriptado;
    desencriptado.style.fontWeight = "normal";
    desencriptado.style.wordBreak = "break-all";
}

//Este botón fue un proyectito personal adicional que revierte todo
//al estado inicial. Aprendí a usar media querys en JS :D
botonRefrescar.onclick = function (){
    ingresado.value = "";
    desencriptado.innerText = "Ningún mensaje fue encontrado";
    desencriptado.style.fontWeight = "bold";
    desencriptado.style.wordBreak = "keep-all";
    //Este if hace que la imagen vuelva solo en las resoluciones correspondientes
    if (desktop.matches) {
        munieco.style.display = "block";
    }
    recomendacion.style.display = "block";
    botones2.style.display = "none";
}

botonCopiar.onclick = function () {
    navigator.clipboard.writeText(desencriptado.innerText);
}