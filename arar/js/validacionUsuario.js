// -----------> VALIDACIÓN FORMULARIO DE REGISTRO <-----------
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("alerta")

form.addEventListener("submit", logIn=>{
    logIn.preventDefault()
    let alerta = ""
    let mostroAlerta = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        alerta += `Intrese un nombre válido<br>`
        mostroAlerta = true
    }
  
    if(!regexEmail.test(email.value)){
        alerta += `Ingrese un mail válido <br>`
        mostroAlerta = true
    }
    if(pass.value.length < 8){
        alerta += `La contraseña no es lo suficientemente fuerte <br>`
        mostroAlerta = true
    }
    if(mostroAlerta){
        parrafo.innerHTML = alerta
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
// -----------> FIN FORMULARIO DE REGISTRO <-----------