/*
Exercise 1. Write a function that can take in any number of arguments, and returns the sum of all of the arguments.
*/

var valores = [2,5,6,8,11]
var suma = 0

function sumarTodo(valores){
for(let i=0; i < valores.length; i++){
    suma += valores[i]
        }
        return suma
    }

document.write(sumarTodo(valores))

/*
Exercise 2. Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), 
and returns the sum of only the numbers.
*/
// addOnlyNums(1, 'cat', 3, 4); //8

var suma = 0
var argumento = [2, 5, 7, 'pepe', 5, 'antonio']
function addOnlyNums(...argumento){
    for(let i=0; i < argumento.length; i++){
        if(typeof argumento == 'number'){
            suma += argumento[i]
        }
        return suma
    }
    
}

document.write(addOnlyNums(argumento))

/*
Exercise 3. Write a function called countTheArgs that can take any number of arguments, 
and returns the number of arguments that are passed in.
*/
countTheArgs('cat', 'dog'); //2
countTheArgs('cat', 'dog', 'frog', 'bear'); //4



/*
Exercise 5
*/

// Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

sumEveryOther(5, 6, 3, 4, 1); //9
sumEveryOther(10, 2, 11); //21

var valores = [2,5,6,8,11]
var suma = 0

function sumEveryOther(valores){
for(let i=0; i < valores.length; i+=2){
    suma += valores[i]
        }
        return suma
    }

document.write(sumEveryOther(valores))
