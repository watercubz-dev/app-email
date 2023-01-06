// variables
const btnEnviar = document.querySelector(".btnEnviar");
const btnReset = document.querySelector(".btnReset");
const formulario = document.querySelector("#enviarFormulario");

// variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#Asunto");
const mensaje = document.querySelector("#Mensaje");

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
  // cuando la app inicia
  document.addEventListener("DOMContentLoaded", iniciarApp);


  // campos del folmulario
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);

   // reinicia el formulario
   btnReset.addEventListener('click', resetearFormulario);
  // enviar email
  formulario.addEventListener('submit', enviarEmail)

}

// funciones
function iniciarApp() {
  btnEnviar.disabled = true;
}

function validarFormulario(e) {
  if (e.target.value.length > 0) {

  } else {
    e.target.classList.add("border", "border-red-500");

    mostrarError("Todos los campos son obligadorios");


  }

  if (e.target.type === "email") {
   
    if (er.test(e.target.value)) {
      console.log("email valido");
    } else {
      e.target.classList.add("border", "border-red-500");

      mostrarError("email no valido");
    }
  }


      if(er.test(email.value) && Asunto.value != '' && mensaje.value != '' ) {
        btnEnviar.disabled = false;
      }

}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  ("error");


  const errores = document.querySelectorAll(".error");
  if (errores.length == 0) {
    formulario.appendChild(mensajeError);

  }
}


// envia el email
function enviarEmail(e) {
 e.preventDefault();

  console.log('enviando...');


  // mensaje que dice que se envio correctamente
  const parrafo = document.createElement('p');
  parrafo.textContent = 'el correo se envio correctamente';
  formulario.insertBefore(parrafo, btnEnviar);
  
}

// funcion que reinici el form

function resetearFormulario() {
    iniciarApp();
    formulario.reset();
}