class Proyecto {
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
