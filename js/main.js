let usuario = prompt("Ingresa tu nombre");

alert ("Bienvenido " + usuario);


let materias = prompt("Ingresa el numero de las siguientes materias y anotar cuanto sacaste \n 1-Matemáticas \n 2-Fisica \n 3-Química \n 4-Arte \n 5-Historia \n Para salir escribe Listo");



while (materias != "Listo") {
    switch (materias) {
        case "1":
            alert ("Seleccionaste Matemáticas, cuanto te sacaste? Dependiento tu nota vas a estar aprobado o no");
            
            numero = parseInt (prompt("Pon la calificacion que obtuviste aqui"));

            if (isNaN(numero)) {
                alert("El valor ingresado no es un número");
            }else {
                if (numero >= 7 && numero != 10) {
                    alert("Felicidades, estás probado!!");
                }else {
                    if (numero == 10) {
                        alert("Felicidades, sacaste 10!");
                    }else {
                        alert("Estás desaprobado, no te rindas!!");
                    }
                }
            };
            
            break;

        
        case "2":
            alert ("Seleccionaste Física, cuanto te sacaste? Dependiento tu nota vas a estar aprobado o no");

            numero = parseInt (prompt("Pon la calificacion que obtuviste aqui"));

            if (isNaN(numero)) {
                alert("El valor ingresado no es un número");
            }else {
                if (numero >= 7 && numero != 10) {
                    alert("Felicidades, estás probado!!");
                }else {
                    if (numero == 10) {
                        alert("Felicidades, sacaste 10!");
                    }else {
                        alert("Estás desaprobado, no te rindas!!");
                    }
                }
            };
            

            break;

        case "3":
            alert ("Seleccionaste Química, cuanto te sacaste? Dependiento tu nota vas a estar aprobado o no");

            numero = parseInt (prompt("Pon la calificacion que obtuviste aqui"));

            if (isNaN(numero)) {
                alert("El valor ingresado no es un número");
            }else {
                if (numero >= 7 && numero != 10) {
                    alert("Felicidades, estás probado!!");
                }else {
                    if (numero == 10) {
                        alert("Felicidades, sacaste 10!");
                    }else {
                        alert("Estás desaprobado, no te rindas!!");
                    }
                }
            };

            break;
    
        case "4":
            alert ("Seleccionaste Arte, cuanto te sacaste? Dependiento tu nota vas a estar aprobado o no");

            numero = parseInt (prompt("Pon la calificacion que obtuviste aqui"));

            if (isNaN(numero)) {
                alert("El valor ingresado no es un número");
            }else {
                if (numero >= 7 && numero != 10) {
                    alert("Felicidades, estás probado!!");
                }else {
                    if (numero == 10) {
                        alert("Felicidades, sacaste 10!");
                    }else {
                        alert("Estás desaprobado, no te rindas!!");
                    }
                }
            };

            break;

        case "5":
            alert ("Seleccionaste Historia, cuanto te sacaste? Dependiento tu nota vas a estar aprobado o no");

            numero = parseInt (prompt("Pon la calificacion que obtuviste aqui"));

            if (isNaN(numero)) {
                alert("El valor ingresado no es un número");
            }else {
                if (numero >= 7 && numero != 10) {
                    alert("Felicidades, estás probado!!");
                }else {
                    if (numero == 10) {
                        alert("Felicidades, sacaste 10!");
                    }else {
                        alert("Estás desaprobado, no te rindas!!");
                    }
                }
            };

            break;
    
        default:
            alert("Opcion no valida");
            break;
    }
    materias = prompt("Ingresa el numero de las siguientes materias y anotar cuanto sacaste \n 1-Matematicas \n 2-Fisica \n 3-Química \n 4-Arte \n 5-Historia \n Para salir escribe Listo");
}
