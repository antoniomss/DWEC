
/*
1. Define una función máximo que dados 4 valores devuelva el máximo de ellos.
Llámala con un ejemplo pidiendo los 4 valores al usuario.
*/

// function maximo(num1,num2,num3,num4){
//     return Math.max(num1,num2,num3,num4);
// }
// var num1 = parseInt(prompt("Pon un numero"));
// var num2 = parseInt(prompt("Pon otro numero"));
// var num3 = parseInt(prompt("Pon otro numero"));
// var num4 = parseInt(prompt("Pon otro numero"));

// document.write (maximo(num1,num2,num3,num4));

/*
2. Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6.
*/

// function lanzamiento() {
// 	return Math.floor(Math.random()*(7-1))+1
// };

// document.write(`<h1>${lanzamiento()}</h1>`)

/*
3. Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores.
*/

// function lanzamiento() {
// 	return Math.floor(Math.random()*(7-1))+1
// };

// function simulacion() {
// 	uno = 0
// 	dos = 0
// 	tres = 0
// 	cuatro = 0
// 	cinco = 0
// 	seis = 0
// 	for (var i = 0; i < 6001; i++) {
// 		let numeroAleatorio = lanzamiento()
// 		if (numeroAleatorio==1) {
// 			uno++
// 		}else if (numeroAleatorio==2) {
// 			dos++
// 		}else if (numeroAleatorio==3) {
// 			tres++
// 		}else if (numeroAleatorio==4) {
// 			cuatro++
// 		}else if (numeroAleatorio==5) {
// 			cinco++
// 		}else if (numeroAleatorio==6) {
// 			seis++
// 		};
// 	};
// 	return (`1: ${uno}<br>2: ${dos}<br>3: ${tres}<br>4: ${cuatro}<br>5: ${cinco}<br>6: ${seis}`)
// };

// document.write(simulacion())

/*
4. Crea una web para calcular el volumen de una esfera. Para ello diseña una función
que dado el radio de ésta devuelva el volumen.
*/

/*
5. Mejora el ejercicio anterior permitiendo calcular también el área de un circulo.
*/

/*
6. Crea una función para calcular potencias de un modo recursivo.
*/

// function potencia(base, exponente) {
// 	if (exponente==0) {
// 		return 1;
// 	}else if (exponente>0) {
// 		return base * potencia(base,exponente - 1);
// 	} else if (exponente<0) {
// 		return 1.0 / base *potencia(base,exponente + 1);
// 	}
// };

// document.write(potencia(2,-2))

/*
7. Crea una función que calcule el factorial de un número dado. Para comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.
*/

// function factorial(num) {
// 	if (num==0) {
// 		return 1
// 	} else{
// 		return num*factorial(num-1)
// 	};
// };
// document.write('<h1>FACTORIALES DE 1 A 10</h1><table bgcolor="black">')
// for (var i = 1; i < 11; i++) {
// 	document.write(`<tr bgcolor="white"><td>${i}</td><td>${factorial(i)}</td></tr>`)
// }

// document.write('</table>')
