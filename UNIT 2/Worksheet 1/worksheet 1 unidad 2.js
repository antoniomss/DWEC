
/*
1. Realiza una p gina que cree un objeto de tipo Date y muestre en la á
p gina la siguiente informaci n (cada una en una l nea): á ó í
• El a o actual ñ
• El mes actual
• El d a actual í
• La hora actual
• Los minutos actuales
• Los segundos actuales
*/

// const fecha_actual = new Date();

// año = [fecha_actual.getFullYear()]
// mes = [fecha_actual.getMonth() + 1]
// dia = [fecha_actual.getDate()]
// hora = [fecha_actual.getHours()]
// minutos = [fecha_actual.getMinutes()]
// segundos = [fecha_actual.getSeconds()]

// document.write('fecha actual: ' + fecha_actual + '<br>')
// document.write('año actual: ' + año + '<br>')
// document.write('mes actual: ' + mes + '<br>')
// document.write('dia actual: ' + dia + '<br>')
// document.write('hora actual: ' + hora + '<br>')
// document.write('minutos actual: ' + minutos + '<br>')
// document.write('segundos actual: ' + segundos)



/*
2. Crea una p gina web en la que se muestre el resultado de cada uno de á
los siguientes apartados:
a. Crear variable "fechaHoy" con fecha de hoy
b. Crear variable "fecha85" que sume 85 d as a la variable "fechaHoy" í
c. Crear variable "fecha187" que reste 187 d as variable "fechaHoy" í
d. Sumar 2 a os a la variable "fecha85" ñ
e. Restar 24 horas a la variable "fecha187"
f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y
observa lo que obtienes
*/

// fechaHoy = new Date();
// document.write(`${fechaHoy} <br>`);

// fecha85 = new Date(fechaHoy.setDate(fechaHoy.getDate() + 85));
// document.write(`${fecha85} <br>`);

// fecha187 = new Date(fechaHoy.setDate(fechaHoy.getDate() - 187));
// document.write(`${fecha187} <br>`);
// document.write(`${new Date(fecha85.setFullYear(fecha85.getFullYear() + 2))} <br>`);
// document.write(`${new Date(fecha187.setHours(fecha85.getHours() - 24))} <br>`);

// fechaResto = new Date(fecha85 - fecha187);
// document.write(fechaResto);


/*
3. Utilizando setTimeout() creo un contador hac a atr s de 60 segundos. í á
*/

// function mensaje() {
 
//     alert("Han pasado 60 segundos");
// }
    
// setTimeout(mensaje,60000);

/*
4. Utilizando el programa anterior haz que al llegar a 0 se cargue la p gina á
de google, para ello puedes utilizar el objeto location.
*/

// function mensaje() {
 
//     alert("Han pasado 60 segundos");
//     location.reload();
// }
    
// setTimeout(mensaje,60000);

/*
5. Usando el objeto Date, sus m todos getHours, getMinutes y GetSeconds y é
el m todo setTimeout() crea un reloj que se actualice cada segundo.
*/

var date = new Date();

function reload() {
 	location.reload()
};

document.write(`<th>${date.getHours()}:</th><th>${date.getMinutes()}:</th><th>${date.getSeconds()}</th>`)
setTimeout(reload,1000);



