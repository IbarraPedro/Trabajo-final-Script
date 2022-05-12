

//Modifico la frase inicial
let tituloPagina = document.getElementById('frase');

tituloPagina.innerHTML = "Un sabor para cada ocasión...."


// Modifico las imágenes al pasar el mouse sobre ellas

//Regalo empresarial
window.addEventListener('load', iniciar);

function iniciar(){
  let imagen = document.getElementById("img1")  
  imagen.addEventListener('mouseover',empresa);
  imagen.addEventListener('mouseout',regalos);
}

function regalos(){

    let imagen = document.getElementById('img1').src ="assets/img/reunion.png";
}

function empresa(){
    let imagen = document.getElementById('img1').src ="assets/img/empresariales.jpg"
}

// Eventos
window.addEventListener('load', comienzo);

function comienzo(){
  let imagen2 = document.getElementById("img2")  
  imagen2.addEventListener('mouseover',fiesta);
  imagen2.addEventListener('mouseout',eventos);
}

function eventos(){

    let imagen2 = document.getElementById('img2').src ="assets/img/unicos.png"
}

function fiesta(){
    let imagen2 = document.getElementById('img2').src ="assets/img/tabletas.png"
}

//Para esa persona especial
window.addEventListener('load', comenzar);

function comenzar(){
  let imagen3 = document.getElementById("img3")  
  imagen3.addEventListener('mouseover',especial2);
  imagen3.addEventListener('mouseout',especial);
}

function especial(){

    let imagen3 = document.getElementById('img3').src ="assets/img/especial.png"
}

function especial2(){
    let imagen3 = document.getElementById('img3').src ="assets/img/caja.png"
}

//Momentos únicos

window.addEventListener('load', run);

function run(){
  let imagen4 = document.getElementById("img4")  
  imagen4.addEventListener('mouseover',unicos2);
  imagen4.addEventListener('mouseout',unicos);
}

function unicos(){

    let imagen4 = document.getElementById('img4').src ="assets/img/eventounico.png"
}

function unicos2(){
    let imagen4 = document.getElementById('img4').src ="assets/img/corazon.png"
}


let mensaje = document.getElementById("principal");
mensaje.onmousemove = () => {
   
    mensaje.innerText ="Principal";
}
