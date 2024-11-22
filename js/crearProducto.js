import { conexionAPI } from "./conexionAPI.js";
import mostrarAlerta from "./alertaPop.js";

const formulario = document.querySelector("[data-formulario]");
const botonLimpiar = document.querySelector("#btn-limpiar-formulario");

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

    // Validar que el campo nombre no exceda los 50 caracteres
    if (nombre.length > 50) {
        errorNombre.style.display = 'block';
        errorNombre.textContent = '⛔ El campo Nombre debe contener máximo 50 caracteres.';
        esValido = false;
    }

    // Validar que el campo precio no esté vacío
    if (precio.trim() === '') {
        errorPrecio.style.display = 'block';
        errorPrecio.textContent = '⛔ El campo Precio no debe estar vacío.';
        esValido = false;
    }

     // Validar que el campo precio no exceda los 10 caracteres
     if (precio.length > 10) {
        errorPrecio.style.display = 'block';
        errorPrecio.textContent = '⛔ El campo Precio debe contener máximo 10 caracteres.';
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
        return;
    } else {
        try {
            await conexionAPI.enviarProducto(nombre, precio, imagen);
            mostrarAlerta(`Producto añadido exitosamente`, "#4CAF50");
        } catch (error) {
            mostrarAlerta(error.message, "red");
        }
    }
}

const limpiarFormulario = (e) => {
    e.preventDefault();
    formulario.reset();
}

botonLimpiar.addEventListener("click", e => limpiarFormulario(e));
formulario.addEventListener("submit", evento => insertarProducto(evento));