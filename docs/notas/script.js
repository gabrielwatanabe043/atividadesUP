function enviar(){
    let nome = document.getElementById('nome').value
    let primeiraNota = parseInt (document.getElementById('nota1').value)
    let segundaNota = parseInt (document.getElementById('nota2').value)
    let terceiraNota= parseInt (document.getElementById('nota3').value)
    let quartaNota = parseInt (document.getElementById('nota4').value)
    let notaTotal = (primeiraNota + segundaNota + terceiraNota + quartaNota) /4
    
    if(notaTotal >= 6){
        document.getElementById('resultado').style.backgroundColor ="green"
        document.getElementById('resultado').innerHTML = "Aprovado com nota: " + notaTotal
    }else if(notaTotal >= 2.1 && notaTotal <=5.9){
        document.getElementById('resultado').style.backgroundColor ="blue"
        document.getElementById('resultado').innerHTML = "Recuperação com nota : " + notaTotal
    }else{
        document.getElementById('resultado').style.backgroundColor ="red"
        document.getElementById('resultado').innerHTML = "Reprovado com nota : " + notaTotal
    }
}