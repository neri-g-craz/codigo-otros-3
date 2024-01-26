// Tenemos un li de productos

// const productos = [
//   {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
//   {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
//   {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
//   {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
//   {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
// ];
// const li = document.getElementsByName("lista-de-productos")[0]
// const $i = document.querySelector('.input');

/* for (let i = 0; i < productos.length; i++) {
   var d = document.createElement("div")
   d.classList.add("producto")

   var ti = document.createElement("p")
   ti.classList.add("titulo")
   ti.textContent = productos[i].nombre
  
   var imagen = document.createElement("img");
   imagen.setAttribute('src', productos[i].img);

   d.appendChild(ti)
   d.appendChild(imagen)

   li.appendChild(d)
 }
*/

// displayProductos(productos)
// const botonDeFiltro = document.querySelector("button");

// botonDeFiltro.onclick = function() {
//   while (li.firstChild) {
//     li.removeChild(li.firstChild);
//   }

//   const texto = $i.value;
//   console.log(texto);
//   const productosFiltrados = filtrado(productos, texto );

//   for (let i = 0; i < productosFiltrados.length; i++) {
//     var d = document.createElement("div")
//     d.classList.add("producto")
  
//     var ti = document.createElement("p")
//     ti.classList.add("titulo")
//     ti.textContent = productosFiltrados[i].nombre
    
//     var imagen = document.createElement("img");
//     imagen.setAttribute('src', productosFiltrados[i].img);
  
//     d.appendChild(ti)
//     d.appendChild(imagen)
  
//     li.appendChild(d)
//   }
// }

// const filtrado = (productos = [], texto) => {
//   return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
// }  

/*const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const ul = document.querySelector('[name="lista-de-productos"]');
const $i = document.querySelector('.input');

function displayProductos(productos) {
  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
 
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre
   
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
 
    d.appendChild(ti)
    d.appendChild(imagen)
 
    li.appendChild(d)
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const ul = document.querySelector('[name="lista-de-productos"]');
  const $i = document.querySelector('.input');


const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  const texto = $i.value;
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    ul.appendChild(d);
  }
};

function filtrado(productos = [], texto) {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};
});*/


const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

document.addEventListener("DOMContentLoaded", function() {
  const ul = document.querySelector('#lista-de-productos');
  const input = document.querySelector('.input');

  function displayProductos(productos) {
    productos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto");

      const p = document.createElement("p");
      p.classList.add("titulo");
      p.textContent = producto.nombre;

      const imagen = document.createElement("img");
      imagen.setAttribute('src', producto.img);

      div.appendChild(p);
      div.appendChild(imagen);

      ul.appendChild(div);
    });
  }

  const botonDeFiltro = document.querySelector(".boton-filtrar");

  botonDeFiltro.onclick = function() {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  
    const texto = input.value.toLowerCase();
    const productosFiltrados = filtrado(productos, texto);
  
    displayProductos(productosFiltrados);
  };

  function filtrado(productos = [], texto) {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }

  displayProductos(productos);
});