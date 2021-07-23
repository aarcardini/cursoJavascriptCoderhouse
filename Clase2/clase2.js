document.getElementById('boton').onclick = function(let){
     nombre = prompt("¿Me podrías decir tu nombre?");
     if (nombre == ("Alejandro") || nombre == ("Ramon")) {
        alert("wowwww nos llamamos igual!!!")
    }else{
        alert("que lástima tu es diferente al mío")
    }
}




document.getElementById('numero1').onclick = function(let){
    numero1 = prompt("Tipea un número");}

document.getElementById('numero2').onclick = function(let){
    numero2 = prompt("Tipea otro número");
}

document.getElementById('igualdad').onclick = function(let){
    if (numero1 == numero2) {
        alert("Tus números son iguales")
    }else{
        alert("Elegiste dos números que son diferentes")
    }
}