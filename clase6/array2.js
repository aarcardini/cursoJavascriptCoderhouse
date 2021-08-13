const cartera = [];

const productos = [
  { id: 1, name: "cheesecake", precio: 500 },
  { id: 2, name: "brownie", precio: 500 },
  { id: 3, name: "lemon pie", precio: 500 },
  { id: 4, name: "oreo", precio: 500 },
  { id: 5, name: "alfajores", precio: 100 },
  { id: 6, name: "budín", precio: 80 },
  { id: 7, name: "macarons", precio: 120 },
  { id: 8, name: "shots chocotorta", precio: 140 },
  { id: 9, name: "super muffin choco", precio: 80 },
  { id: 10, name: "super muffin dulce de leche", precio: 80 },
];

///////////////////////////////////
////Armando caja de desayuno//////
//////////////////////////////////
function armarDesayuno() {
  do {
    let mostrarTortas = alert(
      "Seleccione una de las siguientes mini tortas:" +
        "\n" +
        "0 - Cheesecake" +
        "\n" +
        "1 - brownie" +
        "\n" +
        "2 - lemon pie" +
        "\n" +
        "3 - oreo"
    );
    let seleccionarTorta = parseInt(prompt("Ingrese el numero de producto: "));

    if (seleccionarTorta > 3) {
      alert("Ha ingresado un numero incorrecto, intente nuevamente");
    } else if (seleccionarTorta < 4) {
      cartera.push(productos[seleccionarTorta]);
    } else {
      alert(
        "No se ha ingresado el numero correcto de producto. Intentelo nuevamente."
      );
    }
  } while (cartera.length != 1);

  do {
    let mostrarProductos = alert(
      "Seleccione 5 de los siguientes productos" +
        "\n" +
        "4-alfajores" +
        "\n" +
        "5-budin" +
        "\n" +
        "6-macarons" +
        "\n" +
        "7-shots chocotorta" +
        "\n" +
        "8-super muffin choco" +
        "\n" +
        "9-super muffin dulce de leche"
    );
    let seleccionarProducto = parseInt(
      prompt("Ingrese el numero de producto: ")
    );
    if (seleccionarProducto > 9) {
      alert("Ha ingresado un numero incorrecto, intente nuevamente");
    } else if (seleccionarProducto > 3 && seleccionarProducto < 10) {
      cartera.push(productos[seleccionarProducto]);
    } else {
      alert(
        "No se ha ingresado el numero correcto de producto. Intentelo nuevamente."
      );
    }
  } while (cartera.length != 6);

  console.log(cartera);
  console.log(cartera.sort((a, b) => a.precio - b.precio));
}

/////////////////////////////////////
////////////CALCULAR PAGO///////////
///////////////////////////////////

function calcularMontoAPagar() {
  const precioTotalCarrito = [];

  for (let i = 0; i < cartera.length; i++) {
    precioTotalCarrito.push(cartera[i].precio);
  }

  let total =
    precioTotalCarrito[0] +
    precioTotalCarrito[1] +
    precioTotalCarrito[2] +
    precioTotalCarrito[3] +
    precioTotalCarrito[4] +
    precioTotalCarrito[5];

  alert("El monto total a pagar es de $" + total);

  console.log(total);
}

armarDesayuno();
calcularMontoAPagar();