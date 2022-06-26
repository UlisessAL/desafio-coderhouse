let usuario = prompt("Ingrese su nombre");
while (usuario == "") {
    alert("Por favor, ingrese un nombre válido");
    usuario = prompt("Ingrese su nombre");
}
if (usuario != "") {
    alert ("Bienvenido " + usuario);
}


let inicio = parseFloat(prompt("Necesita pagar una deuda? descubra cuanto IVA va a tener que abonar y cuantos intereses si lo paga en cuotas:"));

let precio = inicio;
let Iva = 0;
let suma = 0;


function iva(precio) {
    Iva = precio*0.21;
    return Iva
}


function sumar(precio, Iva) {
    suma = precio + Iva;
    return suma;
}

if (isNaN(inicio)) {
    alert("El valor ingresado no es un número");
}else{
    alert("El IVA que va a tener que pagar será de: $" + iva (precio) + "\n Por lo tanto, el monto final en un pago es de: $" + sumar(precio, Iva));
}

let meses = parseFloat(prompt("Tenes que pagar en cuotas? En el caso de que sea un no, escribe la palabra No, y en el caso de que si, pon directamente el numero de cuotas. Aviso: la tasa de interes por mes es del 5%"));

let semiInteres = 0;

function semiIntereses(meses,suma) {
    semiInteres = meses*suma
    return semiInteres;
}

function interes(meses,suma) {
    let intereses = (meses*suma)*0.05;
    return intereses;
}


while (meses != "No") {


        if(isNaN(meses)) {
            alert("El valor ingresado no es un número");
        }else{
    
    
                switch (meses) {
                    case meses:
        
                        alert("Usted eligió pagar en " + meses + " cuotas, por ende va a tener un interes de $" + interes(meses,suma)) ;
        
                        break;
                
                    default:
                        alert("Opcion no valida");
                        break;
                }
        
        }

    meses = prompt("Tenes que pagar en cuotas? En el caso de que sea un no, escribe la palabra No, y en el caso de que si, pon directamente el numero de cuotas. Aviso: la tasa de interes por mes es del 5%");

}





