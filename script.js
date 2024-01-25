// obteniendo el modall y el butón de cerrar
var modal = document.getElementById("termsModal");
var span = document.getElementsByClassName("close")[0];

//evento para cerrar el modal con el botón de cerrar.
span.onclick = function () {
    modal.style.display = "none";
}

// comprobando si el usuario ya acepto los terminos y condiciones.
if (!localStorage.getItem('terminos-aceptados')) {
    window.onload = function () {
        modal.style.display = "block";
    }
} else {
    modal.style.display = "none";
}

// evento para el butón de aceptar
document.getElementById('accept').addEventListener('click', function () {
    localStorage.setItem('terminos-aceptados', true);
    alert('Has aceptado los términos y condiciones.');
    modal.style.display = "none";
});

// evento para el butón de rechazar.
document.getElementById('reject').addEventListener('click', function () {
    alert('Has rechazado los términos y condiciones.');
    modal.style.display = "none";
});
