


function calcular (){
    let a = parseInt(document.getElementById('idade').value);
    let d = new Date();
    let total = d.getFullYear() - a;
    if (total >= 18){
        let resultado = document.getElementById('resultado').innerHTML = "você possui : " + parseInt(total) + " anos e é maior de idade";
    } else {
        let resultado = document.getElementById('resultado').innerHTML = "você possui : " + parseInt(total) + " anos e é menor de idade";
    }

    event.preventDefault
};