// js/modal.js

document.addEventListener('DOMContentLoaded', () => {
    const modalButtons = document.querySelectorAll('[data-modal-target]');
    const closeButtons = document.querySelectorAll('[data-modal-close]');
    const modals = document.querySelectorAll('.modal');

    // Función para abrir un modal
    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita scroll en el body cuando el modal está abierto
    }

    // Función para cerrar un modal
    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaura el scroll del body
    }

    // Event listeners para abrir modales
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalTarget;
            const modal = document.querySelector(modalId);
            openModal(modal);
        });
    });

    // Event listeners para cerrar modales (botón "x")
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal'); // Encuentra el modal padre del botón
            closeModal(modal);
        });
    });

    // Event listener para cerrar modales haciendo clic fuera del contenido
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            // Cierra si el clic es directamente sobre el fondo del modal (no en el contenido)
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Event listener para cerrar modales con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
});