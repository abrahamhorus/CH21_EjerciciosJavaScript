/*Ejercicios de práctica de Javascript
Ejercicio #1
Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
Ejemplo del arreglo : [3, 5, 7, 1, 6]
*/
//LOS COMENTARIOS SON PARA QUE NO SE ME OLVIDE LO QUE HICE XDXDXD 
let lista = document.getElementById("lista"); //obtengo el id de la lista del index.html con getelementbyid y el id es "lista"  para imprimir los resultado allì
let botonMayor = document.getElementById("botonMayor");//obtengo el id del boton/anuncio donde muestra el numero mayor del index.hmtl id "botonMayor"
let numeros = [20, 50, 700, 1, 8]; // declaro la variable global con "let", le doy el nombre "numeros" y le asigno un valor = una lista con numeros.

function numeroMayor(numeros) { //defino la funcion, le doy el nombre de "numeroMayor" y le añado con los parentesis la variable "numeros" y abro un bloque con {}
    let mayor = 0; //declaro una variable local dentro de la funcion le doy el nombre de mayor y le asigo un valor de 0 "let mayor = 0", darle un valor 0 permite que posterior mente ese cero se cambie por otros valores diferentes.
    for (let index = 0; index < numeros.length; index++) { // defino el ciclo "for ()", le agrego una variable y la llamo index y le agrego un valor de 0 y cierro con ; "let index = 0;"   despues si index(con un valor de 0) es menor(<) a la longitud(contenido) de la varibale "numeros" (index < numeros.length;) el index va a devolver el valor de su operando antes de agregar uno de esta forma sabra cual es el numero mayor con el operador sufijo ++ (index++)osea va a ir contando desde el valor inicial que le dimos en 0 y va a contar y comparar con la lista de la variable numeros y va a ir cambiando el valor por el numero mayor que encuentre remplazara el 0 por 700. ++ se usa de 3 formas distintas para que te pongas chido e investiges 
        if (numeros[index] > mayor) { //agrego una condicional "if" y abro parentesis despues agrego la variable "numeros" y agrego el parametro index osea el indice, si index es mayor a la variable "mayor" osea a 0 (numeros[index] > mayor)  
            mayor = numeros[index];//"mayor" va a ser igual al index de "numeros" en este caso el numero mayor que se conto con "++"  
        } // se cierra el bloque de if con }
    }//se cierra el bloque de for }
    return mayor; // y te regresa el valor de "mayor" que va a ser "700" (return mayor;)
}

for (let index = 0; index < numeros.length; index++) { //aqui vuelvo a definir el ciclo for que usamos anteriormente para vincularlo con los id de los elementos que trajimos del html
    lista.innerHTML+= `<li class="list-group-item" >${index+1}.- ${numeros[index]}</li>`;//agrego la variable "lista" de la cual invocamos el id de la lista de bootstrap en donde vamos a imprimir los valores en forma de lista obviamenta, agrego enseguida .innerHTML la propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento, al establecerse se reemplaza la sintaxis HTML del elemento por la nueva. agrega el + que significa que voy a sumar el class de donde voy a poner la informacion en este caso <li class="list-group-item" > despues usamos ${} para  anidar una plantilla, es la forma más fácil, e incluso más legible, de tener cadenas configurables. Dentro de una plantilla con tildes invertidas``, es sencillo permitir tildes invertidas interiores simplemente usándolas dentro de un marcador de posición ${ } dentro de la plantilla. despues agrego la variable index que tiene valor de 0 y se le agrega +1 esto quiere decir que me va a enumerar la lista va a tomar el valor de 0 y le va a ir sumando +1 osea, 1.- 2.- 3.- 4.- etc, ${index+1} .- al final se le agrega el .- que es un string para que quede el 1.- completo despues volvevos a agregar con ${} que remplaza tantos parentesis y agregamos la variable "numeros" que son los que vamos a enumerar 20, 50, 700, 1, 8 despues espeficico que solo me ponga el primer numero por linea con [index] para que no me vaya a poner todos los numeros de la lista en una misma fila ejemplo
    //1.- 20, 50, 700, 1, 8  |  1.- 20  
    //2.- 20, 50, 700, 1, 8  |  2.- 50
}

botonMayor.innerHTML+= numeroMayor(numeros);// aqui ponemos el id del html que es el boton le agregamos toda la funcion "numeroMayor" y le decimos que nos va aponer la funcion en el hmtl y le agregamos la variable "numero" osea nos va a imprimir el resultado de toda la funcion en el boton.
