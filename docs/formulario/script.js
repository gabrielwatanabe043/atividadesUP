function fazerpedido(){
    let nome = document.getElementById('nome').value
    let elemento = document.getElementsByName('carne');
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let op, op2 = "",op3;
    for(i = 0; i < elemento.length; i++){
        if(elemento[i].checked)
        op = elemento[i].value
    }

    for(i = 0; i < checkBoxes.length; i++){
        op2 = `${op2}, ${checkBoxes[i].value}`
    }
    selectElement = document.querySelector('#select1')
    op3 = selectElement.value
    document.getElementById('resultado').innerHTML = "Cliente: " + nome + " " + op + "G de Hamburger \n" + "Molhos: " + op2 + " " + op3;
    
}