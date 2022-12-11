/*Ejercicios de práctica de Javascript
Ejercicio #3
Escribir una función que permita saber si un número se repite dentro de un arreglo.

Blockquote Casos de prueba:

Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]

Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]

Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]
*/
//LOS COMENTARIOS SON PARA QUE NO SE ME OLVIDE LO QUE HICE XDXDXD 
//caso 1

let lista = document.getElementById("lista"); //obtengo el id de la lista del index.html con getelementbyid y el id es "lista"  para imprimir los resultado allì
let boton = document.getElementById("boton");//obtengo el id del boton donde muestra el numero menor del index.hmtl id "botonMenor"

const numeros  = [1, 22, 5, 17, 10, 5, 40, 5]; 
let duplicados = [];
 
const tempArray = [...numeros].sort();
 
for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicados.push(tempArray[i]);
  }
lista.innerHTML+= `<li class="list-group-item" >${i+1}.- ${numeros[i]}</li>`;//agrego la variable "lista" y agrego el inner html
}
console.log(duplicados);//mando el resultado de duplicados a la consola
boton.innerHTML = (duplicados) //mando los resultados de duplicados al boton en el html
 //partimos del array numeros. Lo que hacemos es crear el array duplicados, vacío en un principio, que es en donde almacenaremos los elementos duplicados. Seguidamente, propagamos los elementos del array numeros mediante el operador spread de propagación en un nuevo array que ordenamos mediante el método sort para luego asignar el resultado al array tempArray, que usaremos temporalmente.

//Luego recorremos los elementos del array tempArray, comprobando si cada uno de ellos es igual al siguiente elemento del array. Si son iguales, significará que el elemento está duplicado, por lo que lo agregamos al array duplicados.




//caso 2
/*
let lista = document.getElementById("lista"); 
let boton = document.getElementById("boton");


const numeros  = [7, 41, 5, 7, 10, 13, 2];
let duplicados = [];
 
const tempArray = [...numeros].sort();
 
for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicados.push(tempArray[i]);
  }
lista.innerHTML+= `<li class="list-group-item" >${i+1}.- ${numeros[i]}</li>`;
}
console.log(duplicados);
boton.innerHTML = (duplicados) 
*/




//caso 3
/*
let lista = document.getElementById("lista"); 
let boton = document.getElementById("boton");


const numeros  = [1, 22, 5, 14, 24, 31, 27, 15, 105];
let duplicados = ["no hay numeros repetidos"];
 
const tempArray = [...numeros].sort();
 
for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicados.push(tempArray[i]);
  }
lista.innerHTML+= `<li class="list-group-item" >${i+1}.- ${numeros[i]}</li>`;
}
console.log(duplicados);
boton.innerHTML = (duplicados);
*/

