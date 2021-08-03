const inputNum = document.getElementById("numero")
const tablaMulti = document.getElementById("tabla")

function multiplicar() {
  const numero = parseInt(inputNum.value)
  
  let template = ''

  for (let i = 1; i <= 10; i++) {
      template += numero + "x" + i + "=" + numero * i  + "</br>"
  }
  tablaMulti.innerHTML = template
};