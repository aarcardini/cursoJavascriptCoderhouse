class GeneradorDeUsuarios {
    constructor(pNombre, pApellido, pExistente, pPais, pCiudad, pEdad){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.existente = pExistente;
        this.pais = pPais;
        this.ciudad = pCiudad;
        this.edad = pEdad;
    }

    seMueve() {
        console.log("El usuario se movió");
    };
    salto() {
        console.log("El usuario saltó")
    }

}

var nuevoUsuario = new GeneradorDeUsuarios( "Alejandro", "Arcardini", true, "Uruguay", "Montevideo", 33)