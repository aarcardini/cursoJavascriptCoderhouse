// -----------> CREACIÓN DE PROYECTO PROYECTO Y CLIENTE <-----------
class Proyecto {
    constructor(id, pNombre, pPromotor, pUbicacion, pCosto){
        this.id = id;
        this.nombre = pNombre;
        this.promotor = pPromotor;
        this.ubicacion = pUbicacion;
        this.costo = pCosto;
    }
}

class Cliente{
    constructor(cId, cNombre, cUbicacion, cTelefono, cEmail){
        this.id = cId;
        this.nombre = cNombre;
        this.localidad = cUbicacion;
        this.telefono = cTelefono;
        this.email = cEmail;

    }
}

let arrayProyectos = [];
let arrayClientes = [];
let proyecto1 = new Proyecto('pr1', 'Rambla', 'arar.uy', 'Montevideo', 100000);
let proyecto2 = new Proyecto('pr2', 'Edif. Sur', 'Builder', 'Montevideo', 2500000);

arrayProyectos.push(proyecto1);
arrayProyectos.push(proyecto2);

let buttonSubmit = document.getElementById('submitButton');
buttonSubmit.addEventListener("click", function(event){
    event.preventDefault();

    let clientId = document.getElementById('cId').value;
    let clientName = document.getElementById('cNombre').value;
    let clientLocation = document.getElementById('cUbicacion').value;
    let clientTel = document.getElementById('cTelefono').value;
    let clientEmail = document.getElementById('cEmail').value;

    let cliente = new Cliente (clientId, clientName, clientLocation, clientTel, clientEmail);

    arrayClientes.push (cliente);
    localStorage.setItem(1, JSON.stringify(arrayClientes));

    document.getElementById('newClient').submit();
});

console.log(JSON.parse(localStorage.getItem(1)));