


function calcular (){
    let a = parseInt(document.getElementById('numero-a').value);
    let b = parseInt(document.getElementById('numero-b').value);
    let total = a + b;
    let resultado = document.getElementById('resultado').innerHTML = "resultado é: " + total;
    event.preventDefault();
};