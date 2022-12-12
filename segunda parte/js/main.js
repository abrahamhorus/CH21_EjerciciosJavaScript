//1
let btnNum1 = document.getElementById("btnNum1");
let mayor = 0;
function mayorDeTres(){
    //  let n1 = Math.ceil(Math.random() * 100);
    //  let n2 = Math.ceil(Math.random() * 100);
    //  let n3 = Math.ceil(Math.random() * 100);
        let n1 = document.getElementById("inputN1.1").value;
        let n2 = document.getElementById("inputN1.2").value;
        let n3 = document.getElementById("inputN1.3").value;
       
    if ( n1 > n2 && n1 > n3) {
        mayor = n1;
        // imprime numero uno mas grande
       }else if (n2 > n3){
        mayor = n2;
        // Imprime numero dos mas grande
       }else{
        mayor = n3;
        // imprime numero tres mas grande
       }
       return mayor;
}

btnNum1.addEventListener("click", function (event) {
    event.preventDefault();
    let resultado = document.getElementById("alertMayor");
    resultado.innerHTML = `El número mayor es: ${mayorDeTres(mayor)}`;
});
//2
let btnNum2 = document.getElementById("btnNum2");
let menor = 0;
function menorDeTres(){
    //  let n1 = Math.ceil(Math.random() * 100);
    //  let n2 = Math.ceil(Math.random() * 100);
    //  let n3 = Math.ceil(Math.random() * 100);
        let n1 = document.getElementById("inputN2.1").value;
        let n2 = document.getElementById("inputN2.2").value;
        let n3 = document.getElementById("inputN2.3").value;
       
    if ( n1 < n2 && n1 < n3) {
        menor = n1;
        // imprime numero uno mas pequeño
       }else if (n2 < n3){
        menor = n2;
        // Imprime numero dos mas pequeño
       }else{
        menor = n3;
        // imprime numero tres mas pequeño
       }
       return menor;
}

btnNum2.addEventListener("click", function (event) {
    event.preventDefault();
    let resultado = document.getElementById("alertMenor");
    resultado.innerHTML = `El número menor es: ${menorDeTres(menor)}`;
});

/*
LOS DEMAS NO SUPE HACERLOS :C 
ME VOY A PONER A ESTUDIAR MAS
*/
