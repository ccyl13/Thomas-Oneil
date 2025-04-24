// Obtener el botón para cambiar el tema
const themeToggleButton = document.getElementById('theme-toggle-btn');

// Función para alternar entre el tema oscuro y claro
themeToggleButton.addEventListener('click', () => {
    const body = document.body;

    // Si el tema actual es oscuro, cambiar a claro, y viceversa
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        // Cambiar el icono a sol (claro)
        themeToggleButton.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        // Cambiar el icono a luna (oscuro)
        themeToggleButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
});
