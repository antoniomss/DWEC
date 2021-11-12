// /*
// 1.- crea	un	script	que	pregunte	tu	nombre,	apellidos	y	tu	edad	y	los	muestre	en	la	página	web	en	
// párrafos	distintos.
// */

// nombre = prompt("Dime tu nombre: ")
// apellidos = prompt("Dime tu apellidos: ")
// edad = prompt("Dime tu edad: ") + " años" 

// document.write(nombre + "<p>" + apellidos + "<p>" + edad)


// /*
// 3.- crea	un	script	que	muestre	en	una	ventana	emergente	“hola”	y	tu	nombre	(pidiéndolo	
// anteriormente)	utilizando	concatenación	de	cadenas.
// Se	concadena	cadenas	utilizando	el	símbolo	“+”.
// */

// window.alert("Hola " + nombre)

// /*
// 4.- crea	un	script	que	pida	al	usuario	su	edad,	nombre,	apellidos	y	ciclo	que	estudia,	y	muestre	esa	
// información	en	pantalla	en	una	ventana	emergente.
// */

// ciclo = prompt("Que ciclo estas estudiando: ")
// window.alert(nombre + " " + apellidos + " "  + edad + " " + ciclo)


// Condicionales	o	IF

/*
1.- crea	un	script	que	determine	si	un	número	introducido	por	el	usuario	es	par.
*/

// numero = prompt("Escribe un numero")

// if (numero % 2 == 0) {
// document.write("El número " + numero + " es un número par")
// } else{
//     document.write("El número " + numero + " es un número impar")
// }


/*
2.- crea	un	script	que	reciba	la	edad	de	un	usuario	y	determine	si	es	mayor	de	edad.
*/

// edad = prompt("Escribe tu edad: ")

// if (edad < 18) {
//     document.write("El usuario es menor de edad")
// } else{
//     document.write("El usuario es mayor de edad")
// }

/*
3.- crea	un	script	que	reciba	la	edad	de	un	usuario,	y	su	localidad	de	nacimiento	y	muestre	en	pantalla	
“Enhorabuena”	a	los	usuarios	de	más	de	25	años	de	Madrid.
*/

// localidad = prompt("Introduce tu localidad de nacimiento: ")

// if (localidad == "Madrid" || localidad == "MADRID" || localidad == "madrid" && edad >= 25) {
//     document.write("Enhorabuena")
// } 

/*
4.- crea	un	script	que	pida	un	número	al	usuario,	y	si	ese	número	es	superior	a	100	le	aplique	un	
descuento	del	15%,	mostrando	el	nuevo	número	en	pantalla.
*/

// numero = prompt("Introduce un numero ")

// if (numero > 100){
//     descuento = numero - (numero * 0.15)
//     document.write(descuento)
// }

/*
5.- crea	un	script	que	pregunte	al	usuario	por	su	nombre,	y	conteste	“Bienvenido”	o	“Bienvenida”	según	
si	el	nombre	introducido	es	de	hombre	o	de	mujer	(nota:	realízalo	sólo	para	los	nombres:	Pablo,	Ana,	
Eduardo	y	Clara).
*/

// nombre = prompt("¿Como te llamas? ")

// if (nombre == "Pablo" || nombre == "Eduardo"){
//     document.write("Bienvenido " + nombre)
// } else if (nombre == "Ana" || nombre == "Clara"){
//     document.write("Bienvenida " + nombre)
// }

/*
6.- crea	un	script	que	pida	a	un	usuario	dónde	vive;	si	vive	en	Madrid	y	tiene	entre	18	y	30 años,	
el	script	debe	mostrar	en	pantalla	que	el	usuario	puede	acceder	al	carnet	de	empresarios	emprendedores.
*/

// var localidad = prompt('Introduce en qué localidad vives');
// var edad = prompt('Introduce tu edad');


// if ((edad >= 18 && edad <= 30) && (localidad == "Madrid" || localidad == "MADRID"|| localidad == "madrid")) {
//     document.write(`Puedes acceder al carnet de empresarios emprendedores`)
// } else {
//     document.write(`No puedes acceder al carnet de empresarios emprendedores`)
// }

// o	IF	/	ELSE

/*
1.- crea	un	script	que	pida	al	usuario	su	nombre	y	apellidos.	Si	el	nombre	es	“Ricardo”,	debe	mostrar	en	
pantalla	los	apellidos;	si	el	nombre	no	es	“Ricardo”,	debe	escribir	en	el	documento	HTML	los	apellidos.
*/

// var nombre = prompt("Introduce tu nombre: ")
// var apellidos = prompt("Introduce tus apellidos: ")

// if (nombre == "Ricardo"){
//     window.alert(apellidos)
// } else {
//     document.write(apellidos)
// }

/*
2.- crea	un	script	que	reciba	la	edad	de	un	usuario	y	determine	si	puede	jubilarse	o	no	(la	jubilación	se	
alcanza	con	67 años).
*/

// var edad = prompt("Introduce tu edad: ")

// if (edad >= 67) {
//     document.write("Usted puede jubilarse")
// } else {
//     document.write("Usted no puede jubilarse")
// }

/*
3.- Crea	un	script	que	pregunte	la	edad,	y	determine	si	debes	estar	en	el	jardín	de	infancia	(menores	de	
5	años),	en	primaria	(entre	6	y	11),	en	la	ESO	(entre	12	y	16),	en	Bachillerato	o	Ciclos	
(entre	17	y	21)	o	en	la	Universidad	(más	de	21).
*/

// var edad = prompt("Introduce tu edad: ")

// if (edad <= 5){
//     document.write("Estás en el jardin de infancia")
// } else if (edad >= 6 && edad <= 11){
//     document.write("Estás en primaria")
// } else if (edad >= 12 && edad <= 16){
//     document.write("Estás en la ESO")
// } else if (edad >= 17 && edad <= 21){
//     document.write("Estás en Bachillerato o ciclo")
// } else {
//     document.write("Estás en la universidad")
// }

/*
4.- Crea	un	script	que	pregunte	al	usuario	el	número	de	hermanos	que	tiene	y	una	cantidad.	En	el	caso	
de	que	el	usuario	tenga	más	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	15%	de	descuento.	Si	el	
usuario	tiene	menos	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	5%	de	descuento.	Si	no	tiene	
hermanos	se	mostrará	la	cantidad	sin	descuento.
*/

// var n_hermanos = prompt("Cuantos hermanos tienes: ")
// var cantidad = prompt("Escribe una cantidad: ")

// if (n_hermanos >= 3){
//     document.write(cantidad - (cantidad * 0.15))
// } else if (n_hermanos < 3 && n_hermanos > 0){
//     document.write(cantidad - (cantidad * 0.05))
// } else {
//     document.write(cantidad)
// }

/*
5.- Crea	un	script	que	recoja	la	nota	de	dos	exámenes	y	dos	trabajos	y	determine	si	la	media	es	superior	
a	5	para	aprobar	la	asignatura	(75%	exámenes	y	25%	trabajos)	y	4.5	en	todos	ellos.
*/

// var ex1 = parseInt(prompt('Introduce la nota del primer examen'));
// var ex2 = parseInt(prompt('Introduce la nota del segundo examen'));
// var tr1 = parseInt(prompt('Introduce la nota del primer trabajo'));
// var tr2 = parseInt(prompt('Introduce la nota del segundo trabajo'));

// var media = (((ex1 + ex2) / 2) * 0.75) + (((tr1 + tr2) / 2) * 0.25)


// document.write(media)

// if (ex1 >= 4.5 && ex2 >= 4.5 && tr1 >= 4.5 && tr2 >= 4.5 && media >= 5){
//     document.write(" Estas aprobado, enhorabuena!!")
// } else {
//     document.write(" Lo siento, has suspendido, has sacado en algun apartado menos de 4.5 o bien la media no es igual o superior a 5 suerte en la recuperación")
// }


// o	SWITCH

/*
1.- Crea	un	script	que	pregunte	al	usuario	por	el	nombre	de	un	mes,	y	muestre	el	número	de	días	que	
tiene	el	mes.
*/


// var mes = prompt('Introduce un mes');


// switch (true) {
//     case mes == `enero` || mes == `marzo` || mes == `mayo` || mes == `julio` || mes == `agosto` || mes == `octubre` || mes == `diciembre` :
//         document.write(`${mes} tiene 31 días.`);
//         break;
//     case mes == `abril` || mes == `junio` || mes == `septiembre` || mes == `noviembre` :
//         document.write(`${mes} tiene 30 días.`);
//         break;
//     case mes == `febrero` :
//         document.write(`${mes} tiene 28 días.`);
//         break;
// } ;

/*
2.- Crea	un	script	que	pregunte	al	usuario	por	un	número,	y	determine	si	es	par,	si	es	múltiplo	de	tres,	y	
si	es	múltiplo	de	5.
*/

// var num = parseInt(prompt('Introduce un número'));

// switch (true) {
//     case num % 2 == 0 :
//         document.write(`${num} es par <br>`);
//     case num % 3 == 0 :
//         document.write(`${num} es múltiplo de 3 <br>`);
//     case num % 5 == 0 :
//         document.write(`${num} es múltiplo de 5`);
//         break;
// } ;
    

/*
3.- Crea	un	script	que	pida	al	usuario	dos	números	y	una	operación	(que	puede	ser	el	carácter	+,	-,	*	o	/).	
El	script	debe	devolver	el	resultado	de	la	operación	seleccionada	por	el	usuario.
*/

// var num1 = parseInt(prompt('Introduce un número'));
// var num2 = parseInt(prompt('Introduce otro número'));
// var operador = prompt('Introduce la operación que quieres hacer');

// switch (operador) {
//     case `+` :
//         var resultado = num1 + num2
//         document.write(`${num1} ${operador} ${num2} = ${resultado}`);
//         break;
//     case `-` :
//         var resultado = num1 - num2
//         document.write(`${num1} ${operador} ${num2} = ${resultado}`);
//         break;
//     case `*` :
//         var resultado = num1 * num2
//         document.write(`${num1} ${operador} ${num2} = ${resultado}`);
//         break;
//     case `/` :
//         var resultado = num1 / num2
//         document.write(`${num1} ${operador} ${num2} = ${resultado}`);
//         break;
// } ;




