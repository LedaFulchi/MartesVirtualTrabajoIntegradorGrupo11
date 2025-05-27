// script.js (Este sería un archivo separado que enlazarías en tu HTML)

document.addEventListener('DOMContentLoaded', function() {
    // --- Funcionalidades de la página Avances ---

    // Resaltar la fila de la tabla de colores al pasar el mouse
    const colorPaletteTable = document.querySelector('.color-palette-table tbody');
    if (colorPaletteTable) {
        const rows = colorPaletteTable.querySelectorAll('tr');
        rows.forEach(row => {
            row.addEventListener('mouseover', function() {
                this.style.backgroundColor = '#f5f5f5'; // Un gris claro al pasar el mouse
                this.style.transition = 'background-color 0.3s ease-in-out';
            });
            row.addEventListener('mouseout', function() {
                this.style.backgroundColor = ''; // Volver al color original
            });
        });
    }

    // Mostrar un mensaje al hacer clic en un color de la paleta
    const colorBoxes = document.querySelectorAll('.color-box');
    colorBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const colorCode = this.nextElementSibling.textContent;
            alert(`Has seleccionado el color: ${colorCode}`);
        });
    });

    // --- Funcionalidades del header ---

    // Agregar un efecto sutil al pasar el mouse por los enlaces del header
    const headerLinks = document.querySelectorAll('header .nav-pills .nav-link');
    headerLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.opacity = '0.8';
            this.style.transition = 'opacity 0.2s ease-in-out';
        });
        link.addEventListener('mouseout', function() {
            this.style.opacity = '1';
        });
    });

    // --- Funcionalidades del footer ---

    // Agregar un efecto sutil al pasar el mouse por los enlaces del footer
    const footerLinks = document.querySelectorAll('footer .nav-item-footer .nav-link');
    footerLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#0056b3'; // Un azul más oscuro al pasar el mouse
            this.style.transition = 'color 0.2s ease-in-out';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '#555'; // Volver al color original
        });
    });
});