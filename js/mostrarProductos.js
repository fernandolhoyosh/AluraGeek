import { conexionAPI } from "./conexionAPI.js";

const listaProductos = document.querySelector("[data-lista]");

function crearCard(nombre, precio, imagen){
    const producto = document.createElement("li");
    producto.className = "card__producto";
    producto.innerHTML = `
    <img src="${imagen}" alt="imagen producto ${nombre}">
    <p>${nombre}</p>
    <div class="card__producto-info">
        <p>$ ${precio}</p>
        <button>borrar</button>
    </div>`;

    return producto;
}

async function mostrarProductos(){
    const data = await conexionAPI.listarProductos();
    console.log(data)
    data.forEach(producto => listaProductos.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen)));
}

mostrarProductos();