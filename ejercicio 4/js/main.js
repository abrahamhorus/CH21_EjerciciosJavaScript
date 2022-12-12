/*Ejercicios de práctica de Javascript
Ejercicio #4
Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]
*/

 let ulArreglo = document.getElementById("ulArreglo");
let divCase = document.getElementById("divCase");
let arregloOrdenado = [1, 2, 5, 14, 24, 31, 50, 105];

divCase.innerHTML = `Arreglo ordenado [${arregloOrdenado}]`;


function desordenar(arregloOrdenado) {
    let t = arregloOrdenado.sort(function() {return (Math.random()-0.7)});
  return t;
}

ulArreglo.innerHTML = `Arreglo desordenado [${desordenar(arregloOrdenado)}]`;
