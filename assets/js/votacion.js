const productos = [
    {
        id: 1,
        nombre: 'Relleno N° 1',
        descripcion: 'EN CHOCO-LATE SIEMPRE BUSCAMOS IMNOVAR PARA SORPRENDER A TÚ PALADAR, EN ESTA OPORTUNIDAD QUEREMOS QUE SEAS PROTRAGONISGA DEL QUE SERÁ NUESTRO PRODUCTO ESTRELLA DE ESTE INVIERNO, PARA ELLO ESTAMOS PENSANDO EN ESTE RELLENO COMO OPCIÓN, DULCE DE LECHE DEL CAMPO, AROMATIZADO CON VAINILLA, VOS QUE OPINAS?'
        
    },
    {
        id: 2,
        nombre: 'Relleno N°2 ',
        descripcion: 'CONTINUANDO CON LAS TENDENCIAS QUE EL MERCADO NOS VA MARCANDO Y ESCUCHANDO LAS RECOMENDACIONES DE NUESTROS CONSUMIDORES, NUESTRO MAESTRO CHOCOLATERO DISEÑO UN RELLENO DE MENTA PARA UN MEDALLON DE CHOCOLATE QUE PROMETE SORPRENDER TU PALADAR, ESTAS LISTO PARA LA EXPERIENCIA!'
        
    }
    
];
//Referenciando al producto.
const productosContenedor = document.getElementById('productos');

function votarProducto(e) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tú voto se registró exitosamente, gracias!',
        showConfirmButton: false,
        timer: 2000
      })

    e.preventDefault();
    e.target.disabled = true;
}

function crearProducto(producto) {
    const articulo = document.createElement('article');

    articulo.dataset.producto = producto.id;
    articulo.className = 'producto';

  //Creando los elementos.
    const nombre = document.createElement('h3');
    const descripcion = document.createElement('p');
    const votar = document.createElement('button');

   const textoNombre = document.createTextNode(producto.nombre)

    nombre.appendChild(textoNombre);
    nombre.className = 'nombre';
    
    descripcion.textContent = producto.descripcion;
    descripcion.className = 'descripcion';


    votar.textContent = 'Votar';
    votar.className = 'votar';
    votar.addEventListener('click', votarProducto);

    
    articulo.appendChild(nombre);
    articulo.appendChild(descripcion);
    articulo.appendChild(votar);

    productosContenedor.appendChild(articulo);
}

productos.forEach(crearProducto);

