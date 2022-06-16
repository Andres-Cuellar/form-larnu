document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formLogin")
    .addEventListener("submit", validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  if (email === "afca133@gmail.com" && pass === "123") {
      location.href = 'index.html';
      alert("Usuario y contraseña Correctos");
  } else {
    alert("Usuario o contraseña incorrecta");
  }
  this.submit();
}
