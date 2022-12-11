/*Ejercicios de práctica de Javascript
Ejercicio #2
María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema: Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.

Ejercicio #3
*/
//LOS COMENTARIOS SON PARA QUE NO SE ME OLVIDE LO QUE HICE XDXDXD 
let lista = document.getElementById("lista"); //obtengo el id de la lista del index.html con getelementbyid y el id es "lista"  para imprimir los resultado allì
let botonMenor = document.getElementById("botonMenor");//obtengo el id del boton donde muestra el numero menor del index.hmtl id "botonMenor"
let numeros = [-1, 3, 4, 2, 6]; // declaro la variable global con "let", le doy el nombre "numeros" y le asigno un valor = una lista con numeros.

function numeroMenor(numeros) { //defino la funcion, le doy el nombre de "numeroMenor" y le añado con los parentesis la variable "numeros" y abro un bloque con {}
    let menor = 0; //declaro una variable local dentro de la funcion le doy el nombre de menor y le asigo un valor de 0 "let menor = 0", darle un valor 0 permite que posterior mente ese cero se cambie por otros valores diferentes.
    for (let index = 0; index < numeros.length; index++) { // defino el ciclo "for ()", le agrego una variable y la llamo index y le agrego un valor de 0 y cierro con ; "let index = 0;"   despues si index(con un valor de 0) es menor(<) a la longitud(contenido) de la varibale "numeros" (index < numeros.length;) el index va a devolver el valor de su operando antes de agregar uno de esta forma sabra cual es el numero menor con el operador sufijo ++ (index++)osea va a ir contando desde el valor inicial que le dimos en 0 y va a contar y comparar con la lista de la variable numeros y va a ir comparando los valores que encuentre . ++ se usa de 3 formas distintas para que te pongas chido e investiges 
        if (numeros[index] <= menor) { //agrego una condicional "if" y abro parentesis despues agrego la variable "numeros" y agrego el parametro index osea el indice, si index es menor o igual a la variable "menor" osea a 0 (numeros[index] < menor)  
            menor = numeros[index];//"menor" va a ser igual al index de "numeros" en este caso el numero menor que se conto con "++"  
        } // se cierra el bloque de if con }
    }//se cierra el bloque de for }
    return menor; // y te regresa el valor de "menor" que va a ser "-1" (return menor;)
}

for (let index = 0; index < numeros.length; index++) { //aqui vuelvo a definir el ciclo for que usamos anteriormente para vincularlo con los id de los elementos que trajimos del html
    lista.innerHTML+= `<li class="list-group-item" >${index+1}.- ${numeros[index]}</li>`;//agrego la variable "lista" de la cual invocamos el id de la lista de bootstrap en donde vamos a imprimir los valores en forma de lista obviamenta, agrego enseguida .innerHTML la propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento, al establecerse se reemplaza la sintaxis HTML del elemento por la nueva. agrega el + que significa que voy a sumar el class de donde voy a poner la informacion en este caso <li class="list-group-item" > despues usamos ${} para  anidar una plantilla, es la forma más fácil, e incluso más legible, de tener cadenas configurables. Dentro de una plantilla con tildes invertidas``, es sencillo permitir tildes invertidas interiores simplemente usándolas dentro de un marcador de posición ${ } dentro de la plantilla. despues agrego la variable index que tiene valor de 0 y se le agrega +1 esto quiere decir que me va a enumerar la lista va a tomar el valor de 0 y le va a ir sumando +1 osea, 1.- 2.- 3.- 4.- etc, ${index+1} .- al final se le agrega el .- que es un string para que quede el 1.- completo despues volvevos a agregar con ${} que remplaza tantos parentesis y agregamos la variable "numeros" que son los que vamos a enumerar -1, 3, 4, 2, 6 despues espeficico que solo me ponga el primer numero por linea con [index] para que no me vaya a poner todos los numeros de la lista en una misma fila ejemplo
    //1.- -1, 3, 4, 2, 6  |  1.- 1  
    //2.- -1, 3, 4, 2, 6  |  2.- 3
}

botonMenor.innerHTML+= numeroMenor(numeros);// aqui ponemos el id del html que es el boton le agregamos toda la funcion "numeroMenor" y le decimos que nos va aponer la funcion en el hmtl y le agregamos la variable "numeros" osea nos va a imprimir el resultado de toda la funcion en el boton.
