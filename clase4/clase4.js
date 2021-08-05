const restar = (a,b) => a - b;
const sumar = (a,b) => a + b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
const porcentaje = (a, b) => multiplicar(a, b) / 100;

let pConstruccion = prompt("¿Precio de la construcción?");
let pVenta = prompt("¿Precio de venta estimado?");
let pMktn = 10;
let pPorcentaje = 100;

let rentabilidadTot = multiplicar(dividir(restar(restar(pVenta, pConstruccion), porcentaje(pConstruccion, pMktn)), pVenta), pPorcentaje);
console.log('La rentabildiad es del ' + rentabilidadTot + '%');


/* class Proyecto {
    constructor(pPromotor, pNombreProyecto, pUbicacion, pRequisitos, pTipo, pScoring, pFinanciado, pConstruccion, pVenta) {
        this.promotor = pPromotor;
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
 */
