const inputNum = document.getElementById("numero")
const tablaMulti = document.getElementById("tabla-multi")

function multi() {
  const numero = parseInt(inputNum.value)
  
  let template = ''

  for (let i = 1; i <= 10; i++) {
      template += numero + "x" + i + "=" + numero * i + "</br>" + "</br>"
  }
  tablaMulti.innerHTML = template
};


const inmName = document.getElementById("nombre")

function nombre() {

    let entrada = prompt("Ingresar un nombre");
    //Repetimos hasta que se ingresa "ESC"
    while(entrada != "ESC" ){
    switch (entrada) {
        case "ANA":
                alert("HOLA ANA");
                break;
            case "JUAN":
                alert("HOLA JUAN");
                break;
        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre");
    }
}
