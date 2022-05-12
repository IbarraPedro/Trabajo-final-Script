


const datos = document.querySelector('#enviar');
// GENERANDO LA CLASE

class DatosPersonales{

        constructor (nombre, apellido,mail,comentario){

            this.nombre = nombre;
            this.apellido = apellido;
            this.mail = mail;
            this.comentario = comentario;
        }
}
const datosUsuarios =[];
const datosJSON =[];



//ENVIANDO DATOS DEL FORMULARIO AL LOCALSTORAGE
(() =>{

    datos.addEventListener('click', enviarInfo);
    

})();

function enviarInfo(e) {

    let nombre = document.querySelector('#nombre').value;    
    localStorage.setItem('nome', nombre);

    let apellido = document.querySelector('#apellido').value;    
    localStorage.setItem('sobrenome', apellido); 

    let mail = document.querySelector('#mail').value;    
    localStorage.setItem('correio', mail); 

    let comentario = document.querySelector('#comentario').value;    
    localStorage.setItem('informacion', comentario); 

    const datos = new DatosPersonales(nombre, apellido, mail, comentario);
    //console.log(datos);


    
    datosUsuarios.push(datos); //Enviando el objeto al Arrays
    console.log(datosUsuarios);//Mostrando el Array por consola

//APLICANDO DESESTRUCTURACION DEL ARRAY DE OBJETOS 

const [a,b,c,d] = datosUsuarios;
console.log(a);
console.log(b);//Va a mostrar "undefined" a medida que se vayan cargando más objetos va a ir desapareciendo.
console.log(c);
console.log(d);

// SPREAD DE arrays

const datosArrays = [...datosUsuarios];
//console.log(datosArrays);



//Passando los objetos a JSON

const aJSON = JSON.stringify(datos);
datosJSON.push(aJSON); 
console.log(datosJSON);//Mostrando el arrays de JSON


//UTILIZANDO LIBRERIA SWEET ALERT
//Aviso de confirmación de registro.
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tú registro se completo exitosamente!',
        showConfirmButton: false,
        timer: 2000
      })

     e.preventDefault();

}

//Trayendo elementos JSON de página web y pasándolos a objetos en consola.
    
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        console.log(data)
    })

