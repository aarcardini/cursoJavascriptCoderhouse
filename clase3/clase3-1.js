let entrada = prompt("Ingrese su genero");
while(entrada != "Marciano"){
   switch (entrada) {
       case "Hombre" || "hombre":
            alert("No eres un marciano");
            break;
        case "Mujer" || "mujer":
            alert("No eres una marciana");
            break;
       default:
           alert("¿No eres un Marciano?")
           break;
   }
   entrada = prompt("Ingrese su genero");
}
