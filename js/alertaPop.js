function mostrarAlerta (alerta, color) {
        const mensaje = document.getElementById('mensaje-pop');
        mensaje.classList.remove('oculto', 'fade-out');
        mensaje.classList.add('visible');
        mensaje.style.backgroundColor = color;
        mensaje.style.fontWeight = "bolder";
        mensaje.textContent = alerta;
    
        // Después de 3 segundos, empieza a desvanecer el mensaje
        setTimeout(() => {
            mensaje.classList.add('fade-out');
        }, 5000);
    
        // Después de 3 segundos, oculta el mensaje completamente
        setTimeout(() => {
            mensaje.classList.remove('visible');
            mensaje.classList.add('oculto');
        }, 5000);
}

export default mostrarAlerta;