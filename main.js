document.addEventListener('DOMContentLoaded', function() {
    const botonPublicar = document.querySelector('.boton-publicar');
    const formularioPublicar = document.querySelector('.publicar-computadora');


botonPublicar.addEventListener('click', function(e) {
    e.preventDefault();
 margin-top: 2rem;
    formularioPublicar.classList.toggle('visible');
});

});
