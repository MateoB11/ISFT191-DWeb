// js/accordion.js

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.closest('.accordion-item'); // Busca el padre .accordion-item
            const accordionContent = accordionItem.querySelector('.accordion-content');

            // Cierra todos los otros acordeones activos
            document.querySelectorAll('.accordion-content.active').forEach(content => {
                if (content !== accordionContent) { // Si no es el acordeón actual
                    content.classList.remove('active');
                    content.style.maxHeight = null; // Reinicia la altura para la animación
                    content.previousElementSibling.classList.remove('active'); // Quita 'active' del header
                }
            });

            // Toggle (abre/cierra) el acordeón clicado
            header.classList.toggle('active'); // Agrega/quita la clase 'active' al header
            accordionContent.classList.toggle('active'); // Agrega/quita la clase 'active' al content

            if (accordionContent.classList.contains('active')) {
                // Si está activo, establece max-height a scrollHeight para animación fluida
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = null; // Cierra el contenido
            }
        });
    });
});