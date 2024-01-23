// Obteniendo el modal
var modal = document.getElementById("termsModal");

// Obteniendo el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Abre el modal automáticamente al cargar la página
window.onload = function() {
    modal.style.display = "block";
}

document.getElementById('accept').addEventListener('click', function() {
    // Código para manejar la aceptación
    alert('Has aceptado los términos y condiciones.');
    // Redireccionar a otra página o realizar otra acción
});

document.getElementById('reject').addEventListener('click', function() {
    // Código para manejar el rechazo
    alert('Has rechazado los términos y condiciones.');
    // Posiblemente redirigir a otra página o mostrar un mensaje
});
