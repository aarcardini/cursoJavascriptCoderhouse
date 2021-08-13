class Carrito {
  constructor(pIdUser) {
    this.idUser = pIdUser;
    this.products = [];
  }

  guardarProducto(pProy) {
    this.products.push(pProy);
  }

  guardarProductos(pProy) {
    for (let i = 0; i < pProy.length; i++) {
      this.products.push(pProy[i]);
    }
  }
}

class Product {
  constructor(pIdProy, pName) {
    this.idProy = pIdProy;
    this.name = pName;
  }
}
//Creamos un prod-ucto
let papas = new Product(1, "papas fritas");
let coca = new Product(2, "coca cola");
let popcorn = new Product(3, "popcorn");
//Enviamos este prod-ucto como paramentro de una nuevo obj literal
let carrito = new Carrito(201);
// carrito.guardarPro-ducto(papas);
// carrito.guardarPro-ducto(coca);
// carrito.guardarPro-ducto(popcorn);
let productsToCart = [papas, coca, popcorn];
carrito.guardarProductos(productsToCart);
console.log(carrito);

//Filter antes
for (let i = 0; i < carrito.products.length; i++) {
  if (carrito.products[i].name.includes("o")) {
    console.log(carrito.products[i].name + " contiene 0");
  }
}
//Filter despues
var filtro = carrito.products.filter((productoActual) =>
  productoActual.name.includes("o")
);
console.log(filtro);
//find solo trae uno
var prod = carrito.products.find(
  (productoActual) => productoActual.idProy == 2
);
console.log(prod);

//For in for of
for (let aliasItem of carrito.products) {
  for (let property in aliasItem) {
    console.log(property + ":" + aliasItem[property]);
  }
}