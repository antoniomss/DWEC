/*
4) Haciendo uso de dos variables, opera ambas y muestra por pantalla el valor de ambas
(“El valor de la primera variable es ...”), y el resultado de las principales operaciones
matemáticas (“La suma es: …. “).
*/

let var1 = 3;
let var2 = 5;
suma = var1 + var2

document.write("El valor de la primera variable es: "+ var1 + "<br>");
document.write("El valor de la segunda variable es: "+ var2 + "<br>");
document.write("La suma es: "+ suma + "<br>");


/*
3. The Geometrizer
Calculate properties of a circle, searching the internet for definitions if not remember.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

var radio = 5;
pi = 3.14
circumference = 2 * pi * radio
area = pi * radio**2

document.write("El radio es: "+ radio + "<br>");
document.write("La circunferencia es es: "+ circumference + "<br>");
document.write("El area es: "+ area + "<br>");

/*
4. The Temperature Converter
It's hot out! Let's make a converter, and again you'll have to search the internet how to do it.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

let temperatura_celsius = 25;

document.write(temperatura_celsius + "°C is " + (temperatura_celsius * 1.8 + 32) + "°F <br>") ; 


let temperatura_fahrenheit = 105;

document.write(temperatura_fahrenheit + "°F is " + ((temperatura_fahrenheit - 32) * (5/9) ) + "°C") ;
