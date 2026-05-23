document.addEventListener("DOMContentLoaded", () => {
    
    const selectorProducto = document.getElementById("producto-seleccionado");
    const divOpcionesTorta = document.getElementById("opciones-torta");

    // Muestra u oculta los campos de bizcocho/relleno según lo que elija el cliente
    if (selectorProducto && divOpcionesTorta) {
        selectorProducto.addEventListener("change", () => {
            if (selectorProducto.value === "Torta Personalizada") {
                divOpcionesTorta.style.display = "block";
            } else {
                divOpcionesTorta.style.display = "none";
            }
        });
    }

    // Procesamiento del formulario y apertura de la ventana de WhatsApp
    const formulario = document.getElementById("formulario-pedido");
    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById("nombre-cliente").value;
            const producto = selectorProducto.value;
            const detalles = document.getElementById("detalles-pedido").value;
            
            let textoMensaje = `¡Hola Pan & Dulces Gonzales! Mi nombre es ${nombre}. Deseo realizar un pedido de: ${producto}.\n`;
            
            // Si eligió una torta, sumamos las opciones al mensaje
            if (producto === "Torta Personalizada") {
                const sabor = document.getElementById("sabor-torta").value;
                const relleno = document.getElementById("relleno-torta").value;
                textoMensaje += `- Bizcocho: ${sabor}\n- Relleno: ${relleno}\n`;
            }
            
            textoMensaje += `\nDetalles y especificaciones:\n${detalles}`;
            
            // Usamos tu nuevo link de forma correcta enviando el texto
            const linkWhatsAppCompleto = `https://wa.link{encodeURIComponent(textoMensaje)}`;
            window.open(linkWhatsAppCompleto, "_blank");
        });
    }
});
