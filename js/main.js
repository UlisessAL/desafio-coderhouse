

function Inicio(nombre,edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.saludar = () => {
        alert("Hola " + this.nombre + ", tienes " + this.edad + " años");
    }


}


function ingresoNombre() {
    let login = prompt ("Ingresa tu nombre");
    return login;
}

function ingresoEdad() {
    let loginEdad = parseInt(prompt ("Ingresa tu edad"));
    return loginEdad;
}

let nombre1= ingresoNombre();
let edad1 = ingresoEdad();


let Inicio1 = new Inicio(nombre1,edad1);

Inicio1.saludar();

// class Tortas {
//     constructor (nombre,precio) {
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.disponibilidad = false;
//     }

//     Iva () {
//         this.precio = this.precio * 0.21;
//     }

// }

// const productos = [];
// productos.push (new Tortas ("Torta de chocolate","1500"));
// productos.push (new Tortas ("Cheesecake","2000"));
// productos.push (new Tortas ("Torta de chocolate blanco","1800"));

// for (const Tortas of productos) {
//     Tortas.Iva();
// }

const productos = [
{id: 1, producto: "Torta de chocolate", precio : "1500"},
{id: 2, producto: "Torta de chocolate blanco", precio : "1800"},
{id: 3, producto: "Cheesecake", precio : "2000"}
];

let verMenu = prompt ("Le gustaría ver el menu de Tortas que tenemos a disposicion? \n En caso de que quiera, escriba Si. En el caso contrario escriba No");

if (verMenu == "No") {
    alert ("Que tenga un buen día")
} else {
    while (verMenu != "Si") {
        alert("Por favor, ingresa una opcion válida");
        verMenu = prompt ("Le gustaría ver el menu de Tortas que tenemos a disposicion? \n En caso de que quiera, escriba Si. En el caso contrario escriba No");
    }
    
}

if (verMenu === "Si") {
    for (const producto of productos) {
        alert("Producto número " + producto.id + " : " + producto.producto + " Y su precio es de: $" + producto.precio);
    }
}


