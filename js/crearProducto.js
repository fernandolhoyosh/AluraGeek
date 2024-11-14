import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function insertarProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const errorNombre = document.getElementById('errorNombre');
    const errorPrecio = document.getElementById('errorPrecio');
    const errorImagen= document.getElementById('errorImagen');

    let esValido = true;
    
    // Resetear mensajes de error
    errorNombre.style.display = 'none';
    errorNombre.textContent = '';
    errorPrecio.style.display = 'none';
    errorPrecio.textContent = '';
    errorImagen.style.display = 'none';
    errorImagen.textContent = '';

    // Validar que el campo nombre no esté vacío
    if (nombre.trim() === '') {
        errorNombre.style.display = 'block';
        errorNombre.textContent = '⛔ El campo Nombre no debe estar vacío.';
        esValido = false;
    }

    // Validar que el campo precio no esté vacío
    if (precio.trim() === '') {
        errorPrecio.style.display = 'block';
        errorPrecio.textContent = '⛔ El campo Precio no debe estar vacío.';
        esValido = false;
    }

    // Validar que el campo imagen no esté vacío
    if (imagen.trim() === '') {
        errorImagen.style.display = 'block';
        errorImagen.textContent = '⛔ El campo Imagen no debe estar vacío.';
        esValido = false;
    }

    // Prevenir el envío del formulario si no es válido
    if (!esValido) {
        evento.preventDefault();
    } else {
        try {
            await conexionAPI.enviarProducto(nombre, precio, imagen);
        } catch (error) {
            alert(error);
        }
    }
}

formulario.addEventListener("submit", evento => insertarProducto(evento));