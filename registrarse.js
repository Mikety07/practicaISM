function validarFormulario() {
    var contraseña = document.getElementById("contraseña").value;
    var confirmarContraseña = document.getElementById("confirmarContraseña").value;

    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
      return false; // Evita el envío del formulario si las contraseñas no coinciden
    }

    // Aquí puedes realizar otras validaciones o enviar el formulario si todo está correcto
    return true;
  }