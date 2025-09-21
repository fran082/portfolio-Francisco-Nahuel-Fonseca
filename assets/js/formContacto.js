
function sendEmail() {
    // Previene el envío automático del formulario
    event.preventDefault();
  
    // Obtiene los valores del formulario
    var nombre = document.getElementById("nombre").value;
    //var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var asunto = document.getElementById("asunto").value;
  
    // Crea el cuerpo del correo en formato texto con saltos de línea y un renglón vacío
    var body = `Nombre o Empresa: ${nombre}%0D%0A%0D%0AMensaje:%0D%0A${mensaje}`;
  
    // Abre la aplicación de correo con el destinatario, asunto ingresado y cuerpo del mensaje
    window.location.href = `mailto:francisco.n.fonseca.tech@outlook.com?subject=${asunto}&body=${body}`;
  }
