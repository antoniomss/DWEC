
// Ejercicio 4.10.

/*
Escribir un programa que muestre la frase “Cabecera h” seguido del número.
Las frases deben estar formateadas con las etiquetas adecuadas.
*/

document.write("<h1>" + "PRÁCTICA DE BUCLE FOR" + "</h1>")

var i
for (i=1;i<=6;i++) 
{
document.write("<h" + i + ">" + "Cabecera" + " " + "h" + i + "</h" + i + ">")
}


document.write(`<h1> Practica del bucle FOR</h1>`)
for (let i = 1; i < 7; i++)
{
    document.write(`<h${i}> Cabecera h${i} </h${i}>`)

} ;


// Ejercicio 4.11.

/*
Hacer un programa que pida por teclado tres valores: el número de columnas
de una tabla y, la altura y anchura (en pixels) de sus celdas. Una vez
tecleados estos valores, el programa pintará en la página web una tabla
HTML de una fila por el nº de columnas tecleadas.
*/

var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr bgcolor = "white" height = "${alto}"> `);
for (let i = 0; i < n_columnas; i++){
    document.write(`<td width = "${ancho}"> &nbsp; </td>`)
} ;
document.write(`</tr>`);
document.write(`</table>`);

// Ejercicio 4.12.

/*
Modifica el ejercicio anterior para que las columnas impares tengan un
fondo negro y las pares fondo blanco.
*/

var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr height = "${alto}"> `);
for (let i = 1; i < n_columnas + 1; i++){
    if (i % 2) 
        document.write(`<td bgcolor = "black" width = "${ancho}"> &nbsp; </td>`)
    else 
        document.write(`<td bgcolor = "white" width = "${ancho}"> &nbsp; </td>`)
} ;
document.write(`</tr>`);
document.write(`</table>`);

// Ejercicio 4.13.

/*
Adapta el ejercicio 4.11 utilizando un bucle while en vez de un bucle for.
*/

var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))
var i = 0

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr bgcolor = "white" height = "${alto}"> `);
while (i < n_columnas ){
    document.write(`<td width = "${ancho}"> &nbsp; </td>`)
    i += 1
} ;
document.write(`</tr>`);
document.write(`</table>`);

// Ejercicio 4.14.

/*
Adapta el ejercicio 4.12 utilizando un bucle while en vez de un bucle for.
*/

var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))
var i = 1
document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr height = "${alto}"> `);
while (i < (n_columnas + 1)) {
    if (i % 2) 
        document.write(`<td bgcolor = "black" width = "${ancho}"> &nbsp; </td>`)
    else 
        document.write(`<td bgcolor = "white" width = "${ancho}"> &nbsp; </td>`)
    i += 1
} ;
document.write(`</tr>`);
document.write(`</table>`);

// Ejercicio 4.15.

/*
Escribe un programa en JavaScript que consista en adivinar un número
previamente introducido por teclado (jugador 1).
El programa pedirá tantos números como intentos erróneos haga el jugador
2. Solamente terminará cuando el jugador 2 acierte.
El programa dará pistas al jugador 2 indicándole si su número es mayor o
menor que el número a adivinar.
*/

var num_adivinar = parseInt(prompt(`Introduce un número que otro jugador deberá adivinar`));
var num = parseInt(prompt(`Intenta adivinar el número`))

while (num_adivinar != num) {
    if (num < num_adivinar) 
        alert(`El número que tienes que adivinar es mayor`)
    else
        alert(`El número que tienes que adivinar es menor`)
    
    var num = parseInt(prompt(`Intenta adivinar el número`))
}

alert(`Has acertado el número!!`)


// Ejercicio 4.16.

/*
Adaptar el ejercicio 4.15. al bucle DO..WHILE
*/

var num_adivinar = parseInt(prompt(`Introduce un número que otro jugador deberá adivinar`));
var num = parseInt(prompt(`Intenta adivinar el número`))

do {
    if (num < num_adivinar) 
        alert(`El número que tienes que adivinar es mayor`)
    else
        alert(`El número que tienes que adivinar es menor`)
    
    var num = parseInt(prompt(`Intenta adivinar el número`))
}   while (num_adivinar != num) 

alert(`Has acertado el número!!`)


// Ejercicio 4.17.

/*
Hacer un programa en JavaScript que usando
dos bucles anidados for imprima por pantalla
todas las tablas de multiplicar.
*/

for ( i = 1; i <= 10; i++){
    document.write(`<h1> Tabla del ${i}</h1>`)
    for ( j = 1; j <= 10; j++){
        
        let multiplicacion = i * j
        document.write(`${i} x ${j} = ${multiplicacion} <br>`)  
    } }


// Ejercicio 4.18.

/*
Hacer un programa que pida por teclado cuatro valores: el número de
columnas y filas de una tabla y, la altura y anchura (en pixels) de sus
celdas. Una vez tecleados estos valores, el programa pintará en la página
web una tabla HTML del nº de filas por el nº de columnas tecleadas.
*/

var n_filas = parseInt(prompt(`Introduce el número de filas que quieres que tenga la tabla`))
var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr height = "${alto}"> `);
for (let i = 0; i < n_filas; i++){

    document.write(`<tr bgcolor ="white" height = "${alto}">`)

    for (let i = 0; i < n_columnas; i++){
        document.write(`<td width = "${ancho}"> &nbsp; </td>`)  
    } }

    document.write(`</tr>`)

document.write(`</table>`);


// Ejercicio 4.19.

/*
Hacer un programa que pinte un tablero de ajedrez de 8x8 casillas usando
dos for anidados.
El programa pedirá solamente el ancho de la celda que será igual que el
alto.
*/


var ancho = prompt('Ancho:');

document.write(`<table border="0" cellspacing="2" bgcolor="black" width="200">`)
for (var e = 0; e < 9; e++){
	document.write(`<tr bgcolor="white" height= "${ancho}">`)

	if (e%2 == 0) {
		for (var i = 0; i < 9; i++) {
			if (i%2 == 0) {
				document.write(`<td width = "${ancho}" bgcolor="black">&nbsp;</td>`)
			} 
			else if (i%2 != 0) {
				document.write(`<td width = "${ancho}" bgcolor="white">&nbsp;</td>`)
			} 
		}
	}
	else if (e%2 != 0) {
		for (var i = 0; i < 9; i++) {
			if (i%2 == 0) {
				document.write(`<td width = "${ancho}" bgcolor="white">&nbsp;</td>`)
			} 
			else if (i%2 != 0) {
				document.write(`<td width = "${ancho}" bgcolor="black">&nbsp;</td>`)
			} 
		} 
	}	
	document.write('</tr>')
}
document.write('</table>')