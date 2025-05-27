document.addEventListener('DOMContentLoaded', function() {
    // página Avances 


    const colorPaletteTable = document.querySelector('.color-palette-table tbody');
    if (colorPaletteTable) {
        const rows = colorPaletteTable.querySelectorAll('tr');
        rows.forEach(row => {
            row.addEventListener('mouseover', function() {
                this.style.backgroundColor = '#f5f5f5'; 
                this.style.transition = 'background-color 0.3s ease-in-out';
            });
            row.addEventListener('mouseout', function() {
                this.style.backgroundColor = ''; 
            });
        });
    }

    
    const colorBoxes = document.querySelectorAll('.color-box');
    colorBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const colorCode = this.nextElementSibling.textContent;
            alert(`Has seleccionado el color: ${colorCode}`);
        });
    });

    // --- header ---

  
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

    // --- footer ---

    const footerLinks = document.querySelectorAll('footer .nav-item-footer .nav-link');
    footerLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#0056b3'; 
            this.style.transition = 'color 0.2s ease-in-out';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '#555'; 
        });
    });
});