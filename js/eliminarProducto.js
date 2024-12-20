import { conexionAPI } from "./conexionAPI.js";
import mostrarAlerta from "./alertaPop.js";

//Codigo que observa cambios en el DOM y ejecuta la funcio ncada vez vez que se observe cambios en el DOM

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length) {
        eliminarProducto();
    }
  });
});
observer.observe(document.body, { childList: true, subtree: true });

function eliminarProducto() {
  const listaProductos = document.querySelectorAll(".card__producto");
  const botonesEliminar = document.querySelectorAll(".btn-eliminar-producto");
  /* console.log(listaProductos); */
 /*  console.log(botonesEliminar); */

  for (let i = 0; i < listaProductos.length; i++) {
    const producto = listaProductos[i];
    const boton = botonesEliminar[i];
    const idProducto = producto.id;
    /* console.log(idProducto); */
    /* console.log(boton); */

    boton.onclick = async function (e){
      e.preventDefault();
        console.log(idProducto);
        try {
          await conexionAPI.enviarProductoEliminar(idProducto);
          mostrarAlerta(`Producto eliminado`,"#8c0375")   
        } catch (error) {
          mostrarAlerta(error.message, "red");
        }
    }
  }
}
