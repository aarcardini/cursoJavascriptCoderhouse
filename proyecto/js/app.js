/* para tener el elemento de html a la vista y los id </div>
<div class="col-sm-12 col-md-4 col-xl-3 mx-auto gy-3">
  <div class="progress" id="progressProyecto">
    <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" id="financiado">50% Financiado</div>
  </div>
  <img loading="lazy" class="figure-img img-fluid" src="img/proyectos/montero/render1.jpg" alt="apartamento en montero" title="Edificio de apartamentos">
  <h4>Montevideo - Uruguay</h4>
  <h3>Edificio Marco Bruto</h3>
  <button id="invProyecto">Invertir</button>
</div> */




document.getElementById('invProyecto').onclick = function(let)
    {
        inversion = prompt("¿Cuál es el % de financiación?");
    };


let porcentaje = document.createElement("p");
porcentaje.innerHTML = '<div class="progress-bar" role="progressbar" style="width: 30%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" id="financiado">30% Financiado</div>';

document.body.appendChild(porcentaje);







/* class Proyecto {
    constructor(pPromotor, pNombreProyecto, pUbicacion, pRequisitos, pTipo, pScoring, pFinanciado, pConstruccion, pVenta) {
        this.idPromotor = pPromotor;
        this.nombreProyecto = pNombreProyecto;
        this.ubicacion = pUbicacion;
        this.requisitos = pRequisitos;
        this.tipo = pTipo;
        this.scoring = pScoring;
        this.financiado = pFinanciado;
        this.construccion = pConstruccion;
        this.venta = pVenta;
    }
    rentabilidad() {
        this.rentabilidad = ((this.venta - this.construccion)/this.venta)*100;
    }
    vender() {
        this.vendido = true;
    }
}

const proyecto1 = new Proyecto("arar,uy", "Residencia X", "Montevideo", "100000U$S", "Residencia", "A++", "20%", 100000, 140000);
const proyecto2 = new Proyecto("arar,uy", "Residencia Anne", "Miami", "80000$S", "Residencia", "B+", "20%", 80000, 120000);

proyecto1.rentabilidad();
proyecto2.rentabilidad();

console.log(proyecto1.rentabilidad);
console.log(proyecto2.rentabilidad);

class Inversor {
    constructor(pInversor, pNombreInversor, pCategoria) {
        this.idInversor = pInversor;
        this.nombreInversor = pNombreInversor;
        this.categoria = pCategoria;
    }
    invirtio() {
        this.inversion = true;
    }
    montoInvertido() {
        this.invertido = prompt("¿Cuanto desea invertir? Ingrese un número");
    }
}


const inversor1 = new Inversor("in01", "Javier", "A");


inversor1.montoInvertido();

console.log(inversor1);
alert(inversor1.nombreInversor + " Invirtió: " + inversor1.invertido + " U$S");
 */

