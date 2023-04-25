function enviar(){
    let nomeAluno = document.getElementById('nome').value;
    let primeiraNota = parseFloat(document.getElementById('nota1').value)
    let segundaNota = parseFloat(document.getElementById('nota2').value)
    let terceiraNota= parseFloat (document.getElementById('nota3').value)
    let quartaNota = parseFloat (document.getElementById('nota4').value)
    let notaTotal = (primeiraNota + segundaNota + terceiraNota + quartaNota) /4
   
    if(notaTotal >= 6){
        document.getElementById('resultado').style.backgroundColor ="green"
        document.getElementById('resultado').innerHTML = "Aluno: " + nomeAluno + " Aprovado com nota: " + notaTotal
    }else if(notaTotal >= 2.1 && notaTotal <=5.9){
        document.getElementById('resultado').style.backgroundColor ="blue"
        document.getElementById('resultado').innerHTML = "Aluno: " + nomeAluno + " Recuperação com nota : " + notaTotal
    }else{
        document.getElementById('resultado').style.backgroundColor ="red"
        document.getElementById('resultado').innerHTML = "Aluno: " + nomeAluno + " Reprovado com nota : " + notaTotal
    }
}