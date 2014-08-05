// Declaramos variables sin valor
var peso;
var pesoEnMarte;
// Declaramos variables sin valor

// Ventana emergente con mensaje
alert("¿Quieres saber cuál es tu peso en Marte?")
// Ventana emergente con mensaje

// Obtenemos el valor del peso con una ventana emergente
peso = prompt("¿Cuál es tu peso en KG?", "70");
// Obtenemos el valor del peso con una ventana emergente

// Convertimos peso a número con parseInt() pero también se puede hacer con Number()
peso = parseInt(peso);
// Convertimos peso a número con parseInt() pero también se puede hacer con Number()

// Convertimos el peso en peso en Marte con la siguiente ecuación
pesoEnMarte = (peso / 9.81) * 3.711;
// Convertimos el peso en peso en Marte con la siguiente ecuación

// Imprimimos el peso en Marte
alert("Tu peso en marte es: " + pesoEnMarte);
// Imprimimos el peso en Marte

// Imprimimos valor dado por el usuario
// alert(peso + 10);
// Imprimimos valor dado por el usuario