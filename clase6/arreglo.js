/* const carteraInv = []; */

const proyectos = [
  { idProyecto: 0, nombreProyecto: 'Vacio', invertido: 0 },
  { idProyecto: 1, nombreProyecto: 'Reforma Apartamento', invertido: 10000 },
  { idProyecto: 2, nombreProyecto: 'Edificio Punta Carretas', invertido: 300 },
  { idProyecto: 3, nombreProyecto: 'Edificio Punta del Este', invertido: 20000 },
  { idProyecto: 4, nombreProyecto: 'Edificio Marco Bruto', invertido: 80000 },
  { idProyecto: 5, nombreProyecto: 'Edificio Montero', invertido: 700 },
];

proyectos.push({idProyecto: 6, nombreProyecto: 'Edificio Ciudad Vieja', invertido: 10000});

// se agrega en el lugar 1
/* proyectos.splice(1,0, {idProyecto: 6, nombreProyecto: "Edificio Ciudad Vieja", invertido: 10000} );*/
/* console.log(proyectos); */

//se listan con su id de arreglo y se muestra el contenido
/* proyectos.forEach(function(item, index){
  console.log(index);
  console.log(item);
}); */


const buscarProyecto = function(proyectos, nombreProyecto){
  const index = proyectos.findIndex(function(proy, index){
    return proy.nombreProyecto === nombreProyecto;
  });
  return index;
};

//BUSQUEDA DE PROYEECTO EN PARTICULAR
/* console.log(proyectos[buscarProyecto(proyectos,'Edificio Ciudad Vieja')]);
console.log(proyectos[buscarProyecto(proyectos,'Edificio Punta Carretas')]); */

//FILTRO EN ARREGLO SE EXCLUYEN LAS REFORMAS
/* const filtrarProyectos = proyectos.filter(function(proy, index){
  const proyectos = proy.nombreProyecto.includes('Edif');
  return proyectos;
})
console.log(filtrarProyectos); */


//BUSQUEDA DE PROYECTO EN CIDUAD VIEJA
/* const index = proyectos.findIndex(function(proy, index){
  console.log(proy)
  return proy.nombreProyecto === 'Edificio Ciudad Vieja';
}); */

// se ordena por órden alfabético
proyectos.sort(function(a,b){
  if(a.nombreProyecto > b.nombreProyecto){
    return 1;
  }
  if(a.nombreProyecto < b.nombreProyecto){
    return -1
  }
});
console.log(proyectos);