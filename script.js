const links = document.getElementsByClassName('link');

enlaces.forEach((enlace) => {
    enlace.addEventListener('mouseenter', () => {
        enlace.style.color = '#ffecd1';
        enlace.style.transition = 'color 0.3s ease';
    });

    enlace.addEventListener('mouseleave', () => {
        enlace.style.color = '#007bff';
        enlace.style.transition = 'color 0.3s ease';
    });
    });

    const boton = document.getElementsByClassName('boton');

enlaces.forEach((enlace) => {
    enlace.addEventListener('mouseenter', () => {
        enlace.style.color = '#ffecd1';
        enlace.style.transition = 'color 0.3s ease';
    });
    });