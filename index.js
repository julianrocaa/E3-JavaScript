const pizzas = [
  {
    id: 1,
    nombre: "Pizza Muzzarella Clásica",
    precio: 500,
    ingredientes: ["Muzzarella", "Salsa de Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza Fugazzetta",
    precio: 1500,
    ingredientes: ["Muzzarella", "Salsa de Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza Cuatro Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Salsa de Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Salsa de Tomate", "Rúcula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana y Jamón Cocido",
    precio: 600,
    ingredientes: ["Muzzarella", "Salsa de Tomate", "Anana", "Jamón Cocido"],
    imagen: "./img/anana.png",
  },
];

const inputTxt = document.getElementById("main-number");
const btnSubmit = document.querySelector("#main-submit");
const form = document.getElementById("form");
const caja = document.querySelector(".caja");
const body = document.querySelector("body");

let pizzaCheck;

function imprimePizza(elegirPizza) {
  const { nombre, precio, ingredientes, imagen } = elegirPizza;
  
  const cajaFoto = document.createElement("img");
  while (cajaFoto.firstChild) {
    caja.removeChild(cajaFoto.firstChild);
  }
  cajaFoto.src = imagen;
  cajaFoto.classList.add("foto");

  const cajaInfo = document.createElement("div");
  cajaInfo.classList.add("caja-info");

  const cajaInfoTitulo = document.createElement("h2");
  while (cajaInfoTitulo.firstChild) {
    caja.removeChild(cajaInfoTitulo.firstChild);
  }
  cajaInfoTitulo.textContent = nombre;
  cajaInfoTitulo.classList.add("titulo");

  const cajaInfoIngredientes = document.createElement("p");
  while (cajaInfoIngredientes.firstChild) {
    caja.removeChild(cajaInfoIngredientes.firstChild);
  }
  console.log();
  cajaInfoIngredientes.innerHTML =
    "Ingredientes: " +
    ingredientes.slice(0, ingredientes.length - 1).join(", ") +
    " y " +
    ingredientes.slice(ingredientes.length - 1) +
    ".";
  cajaInfoIngredientes.classList.add("ingredientes");

  const cajaInfoPrecio = document.createElement("p");
  while (cajaInfoPrecio.firstChild) {
    caja.removeChild(cajaInfoPrecio.firstChild);
  }
  cajaInfoPrecio.textContent = "Precio: $" + precio + "";
  cajaInfoPrecio.classList.add("precio");

  cajaInfo.appendChild(cajaInfoTitulo);
  cajaInfo.appendChild(cajaInfoIngredientes);
  cajaInfo.appendChild(cajaInfoPrecio);

  while (caja.firstChild) {
    caja.removeChild(caja.firstChild);
  }
  caja.appendChild(cajaFoto);
  caja.appendChild(cajaInfo);
}

function buscarPizza(datoId) {
  pizzaCheck = pizzas.find((pizza) => pizza.id === datoId);
  return pizzaCheck || 0;
}

function leerForm(e) {
  e.preventDefault();
  dato = parseInt(inputTxt.value);
  const ingresaDato = inputTxt.value === "" ? false : true;

  if (buscarPizza(dato) != 0) {
    imprimePizza(pizzaCheck);
    localStorage.setItem("ultimaPizza", JSON.stringify(pizzaCheck));
  } else if (ingresaDato) {

    errorCaja("❌La pizza que ingreso no está disponible❌");
  } else {

    errorCaja("❌Ingrese el número de la pizza que desea❌");
  }
  inputTxt.value = "";
}

function errorCaja(msg) {
  while (caja.firstChild) {
    caja.removeChild(caja.firstChild);
  }
  const cajaMsg = document.createElement("div");
  cajaMsg.textContent = msg;
  cajaMsg.classList.add("error");

  caja.appendChild(cajaMsg);
}

function init() {
  pizzaCheck = "";
  form.addEventListener("submit", leerForm);
}

init();