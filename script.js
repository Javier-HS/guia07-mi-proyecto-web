function saludar() {
  // Obtener el valor del input
  let nombre = document.getElementById("nombre").value;
  // Validar si el usuario escribió algo
  if (nombre === "") {
    document.getElementById("resultado").innerText =
      "Por favor, ingresa tu nombre.";
  } else {
    document.getElementById("resultado").innerText =
      "Hola " + nombre + ", bienvenido al sistema.";
  }
}

function validarCorreo() {
  let correo = document.getElementById("correo").value.trim();
  let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let mensaje = document.getElementById("mensajeCorreo");
  if (correo === "") {
    mensaje.innerText = "Debe ingresar un correo.";
    mensaje.style.color = "#e74c3c";
  } else if (!patron.test(correo)) {
    mensaje.innerText = "El formato del correo no es válido.";
    mensaje.style.color = "#e74c3c";
  } else {
    mensaje.innerText = "Correo registrado correctamente.";
    mensaje.style.color = "#27ae60";
  }
}
