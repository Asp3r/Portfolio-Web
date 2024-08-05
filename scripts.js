
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validación básica del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && mensaje) {
            alert('Formulario enviado correctamente.');
            form.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Script cargado correctamente');
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const yOffset = -70; // Ajuste del desplazamiento, si tienes un header fijo por ejemplo
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        });
    }
});


