$(document).ready(function () {
    $("#formContacto").submit(function (e) {
        e.preventDefault();

        let nombre = $("#nombre").val().trim();
        let email = $("#email").val().trim();
        let mensaje = $("#mensaje").val().trim();

        if (!nombre || !email || !mensaje) {
            alert("Por favor completa todos los campos.");
            return;
        }

        alert("¡Gracias por tu mensaje, " + nombre + "! Me pondré en contacto contigo pronto.");
        $("#formContacto")[0].reset();
    });
});