
/*
5. Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array
*/

function lanzamiento (){return Math.floor(Math.random() * (1001 - 1) + 1);}

numeros = []

function paresImpares() {
    while (numeros.length < 100){
        numeros.push(lanzamiento())
    } 
}

paresImpares()
console.log(numeros)

ordenado = []

for(elemento of numeros){
    if (elemento % 2 == 0){
        ordenado.unshift(elemento)
    } else{
        ordenado.push(elemento)
    }
}

console.log(ordenado)


/*
7. Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.
*/

let array = [3, 7, 8, 6, 4, 2, 1, 5, 9, 10];

// a)

let array_cero = array.map(numero => numero= 0);

// b) 

let array_sumado = array.map(numero => numero + 1);

// c)

let array_separado = array.join(' ');


/*
8. Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.
*/

function lanzamiento (){return Math.floor(Math.random() * (7 - 1) + 1);}

suma_tiradas = []

while(suma_tiradas.length < 36000){
    suma_tiradas.push(lanzamiento() + lanzamiento())
}

/*
9. Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays
bidimensionales).
*/

function dados(){
    resul = Array(
        Array(0,0,0,0,0,0),
        Array(0,0,0,0,0,0),
        Array(0,0,0,0,0,0),
        Array(0,0,0,0,0,0),
        Array(0,0,0,0,0,0),
        Array(0,0,0,0,0,0)
    )
    for (let i = 0;i<3600;i++){
        let tir1 = (Math.floor(Math.random() * 6 + 1))
        let tir2 = (Math.floor(Math.random() * 6 + 1))
        resul[tir1 - 1][tir2 - 1] += 1
    }
    return resul
}
prob = dados()
document.write('<table><tr><td>Tiradas</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>')
for (let i = 0;i < prob.length; i++){
    document.write(`<tr><td>${i + 1}</td>`)
    for (val of prob[i]){
        document.write(`<td>${val}</td>`)
    }
    document.write("</tr>")
}
document.write("</table>")
