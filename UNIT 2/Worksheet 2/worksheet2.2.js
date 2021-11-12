/*
1. Crea una pagina en la que se muestre:
• Un numero aleatorio entre 0 y 1.
• Igual pero entre 100 y 200.
• Pide dos valores al usuario y genera un n aleatorio entre esos dos nº
valores.
*/

// //Un número aleatorio entre cero y uno

// document.write(Math.random() + `<br>`);


// //Un número aleatorio entre 100 y 200

// numero_aleatorio = Math.random() * (100) + 100
// document.write(Math.floor(numero_aleatorio) + `<br>`) ;

// //Un número aleatorio entre dos valores introducidos por el usuario

// min = parseInt(prompt(`Introduce un valor minimo`));
// max = parseInt(prompt(`Introduce un valor maximo`));

// segundo_numero = Math.random() * (max - min) + min

// document.write(Math.floor(segundo_numero));


// /*
// 2. En un nueva p gina web, pide al usuario un ngulo y calcula su seno, á á
// coseno y tangente.
// */


// angulo = parseFloat(prompt(`Introduce un ángulo`));
// radianes = angulo * Math.PI / 180;

// document.write(Math.sin(radianes) + '<br>');
// document.write(Math.cos(radianes) + '<br>');
// document.write(Math.tan(radianes));

// /*
// 3. Crea una web que e calcula la hipotenusa de un triangulo rectangulo
// (pidiendo al usuario el tama o de los dos catetos).
// */


// cateto_a = parseFloat(prompt(`Introduce la longitud del primer cateto (en cm)`));
// cateto_b = parseFloat(prompt(`Introduce la longitud del segundo cateto (en cm)`));

// document.write('La hipotenusa mide ' + Math.sqrt((cateto_a ** 2) + (cateto_b ** 2)) + ' cm');

// /*
// 4. Mejora el ejercicio anterior para que contin e realizando el mismo c lculo ú á
// hasta que el usuario decida que no quiere continuar.
// */

// cateto_a = prompt(`Introduce la longitud del primer cateto (en cm)`);


// while (cateto_a !== 'parar') {
//     a = parseFloat(cateto_a)
//     cateto_b = parseFloat(prompt(`Introduce la longitud del segundo cateto (en cm)`));
//     document.write('La hipotenusa mide ' + Math.sqrt((a ** 2) + (cateto_b ** 2)) + ' cm <br>');
//     cateto_a = prompt(`Introduce la longitud del primer cateto (en cm). Si no quieres continuar escribe 'parar'. `);
// }


// /*
// 5. Crea una web para resolver ecuaciones de segundo grado. Deber pedir por á
// tanto los coeficientes y mostrar las soluciones posibles.
// */

// a = parseFloat(prompt(`Introduce la a`));
// b = parseFloat(prompt(`Introduce la b`));
// c = parseFloat(prompt(`Introduce la a`));


// discriminante = ((b ** 2) - (4 * a * c));
// x1 = (-b + Math.sqrt(discriminante) / (2 * a));
// x2 = (-b - Math.sqrt(discriminante) / (2 * a));
// document.write(`Las soluciones de la ecuación son las siguientes: ${x1} y ${x2}`)

// /*
// 6. Crea una web que calcule potencias.*/

// coeficiente = parseFloat(prompt(`Introduce el coeficiente`));
// exponente = parseFloat(prompt(`Introduce el exponente`));

// potencia = coeficiente ** exponente
// document.write(`${coeficiente} elevado a ${exponente} es ${potencia}`)

// /*
// 7. Crea una web que genere una tabla con dos columnas. En la primera un
// n mero ascendente y en la otra el valor de su seno. ú
// */


// angulo = parseFloat(prompt(`Introduce un ángulo`));
// radianes = angulo * Math.PI / 180;
// seno = Math.sin(radianes);

// document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
// document.write(`<tr bgcolor = "white" height = "50"> `);
// document.write(`<td width = "50"> &nbsp ${angulo} &nbsp; </td>`);
// document.write(`<td width = "50"> &nbsp ${seno} &nbsp; </td>`);
// document.write(`</tr>`);
// document.write(`</table>`);

// /*
// 8. Crea una web en la que cada vez que se accede se muestre una imagen
// (de modo aleatorio) de entre 3 posibles.*/

// numero_aleatorio = Math.floor(Math.random() * (3) + 1);

// document.write(`<img src ="${numero_aleatorio}.jpg">`)
