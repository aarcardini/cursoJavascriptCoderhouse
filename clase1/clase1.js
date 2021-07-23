document.getElementById('nombre').onclick = function(let){
    nombre = prompt("¿Me podrías decir tu nombre?");
}
document.getElementById('apellido').onclick = function(let){
    apellido = prompt("¿Me podrías decir tu apellido?");
}

document.getElementById('edad').onclick = function(let){
    num1 = prompt("¿Me podrías decir tu edad?");
}
let num1 = 0;
let num2 = 1;

document.getElementById('numero').onclick = function(){
    alert('El año que viene vas a tener'+" "+(parseInt(num1) + parseInt(num2))+" "+'años');
}

document.getElementById('pepe').onclick = function(){
    alert("Lo lamento pero este botón no sirve para nada");
}
