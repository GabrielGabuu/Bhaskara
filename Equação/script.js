"use strict";

let button = document.getElementById('calcular');
let button_limpar = document.getElementById('limpar');

button.addEventListener('click',calcular);
button.addEventListener('click',limpar);

function calcular(e) {
   e.preventDefault(); 
   let num1 = parseFloat(document.getElementById('num1').value);
   let num2 = parseFloat(document.getElementById('num2').value);
   let num3 = parseFloat(document.getElementById('num3').value);
   let delta = Math.pow(num2,2) - 4*num1*num3;
   alert(`O Delta é: ${delta}`);
   
   if (delta > 0) {
       let raiz1 = ((-num2 + Math.sqrt(delta))/(2*num1));
       let raiz2 = ((-num2 - Math.sqrt(delta))/(2*num1));
       document.getElementById("resultado").innerHTML = "Raiz 1 = " + raiz1 + "Raiz 2 = " + raiz2;
   } else if (delta === 0) {
    let raizUnica = ((-num2 + Math.sqrt(delta))/(2*num1));
    document.getElementById("resultado").innerHTML = "Raiz única = " + raizUnica;
   } else if (delta < 0) {
     document.getElementById("resultado").innerHTML = "Delta < 0, não existem raizes no conjunto dos números reais.";
   }
   
}

function limpar(e) {
    document.getElementById('num1').value = ' ';
    document.getElementById('num2').value = ' ';
    document.getElementById('num3').value = ' ';
    document.getElementById('resultado').innerHTML = null;
}
