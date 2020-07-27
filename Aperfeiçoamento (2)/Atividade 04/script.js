function calcular(){
    let a = parseInt(document.getElementById('nota-1').value)
    let b = parseInt(document.getElementById('nota-2').value)
    let c = parseInt(document.getElementById('nota-3').value)
    let d = parseInt(document.getElementById('nota-4').value)
    let total = (a+b+c+d)/4
    let resultado = document.getElementById('resultado').innerHTML = "sua média é: " + total;
    event.preventDefault
}