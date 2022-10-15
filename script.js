let prato = null;
let bebida = null;
let sobremesa = null;

/*INÍCIO PRATO PRINCIPAL*/
function prato1(){
    document.getElementById("prato1").style.borderColor = "green";
    document.getElementById("prato2").style.borderColor = "#FFFFFF";
    document.getElementById("prato3").style.borderColor = "#FFFFFF";
    prato = "prato1";

    if(prato !== null && bebida !== null && sobremesa !== null){
        document.getElementById("bt").style.backgroundColor = "green";
        const elemento = document.querySelector('.frase');
        elemento.innerHTML = 'Fechar Pedido';
    }
}

function prato2(){
    document.getElementById("prato2").style.borderColor = "green";
    document.getElementById("prato1").style.borderColor = "#FFFFFF";
    document.getElementById("prato3").style.borderColor = "#FFFFFF";
    prato = "prato2";

    if(prato !== null && bebida !== null && sobremesa !== null){
        document.getElementById("bt").style.backgroundColor = "green";
        const elemento = document.querySelector('.frase');
        elemento.innerHTML = 'Fechar Pedido';
    }
}

function prato3(){
    document.getElementById("prato3").style.borderColor = "green";
    document.getElementById("prato1").style.borderColor = "#FFFFFF";
    document.getElementById("prato2").style.borderColor = "#FFFFFF";
    prato = "prato3";

    if(prato !== null && bebida !== null && sobremesa !== null){
        document.getElementById("bt").style.backgroundColor = "green";
        const elemento = document.querySelector('.frase');
        elemento.innerHTML = 'Fechar Pedido';
    }
}
/*FIM PRATO PRINCIPAL*/

/*INÍCIO BEBIDAS*/
function bebida1(){
    document.getElementById("bebida1").style.borderColor = "green";
    document.getElementById("bebida2").style.borderColor = "#FFFFFF";
    document.getElementById("bebida3").style.borderColor = "#FFFFFF";
    bebida = "bebida1";

    if(prato !== null && bebida !== null && sobremesa !== null){
        document.getElementById("bt").style.backgroundColor = "green";
        const elemento = document.querySelector('.frase');
        elemento.innerHTML = 'Fechar Pedido';
    }
}

function bebida2(){
    document.getElementById("bebida2").style.borderColor = "green";
    document.getElementById("bebida1").style.borderColor = "#FFFFFF";
    document.getElementById("bebida3").style.borderColor = "#FFFFFF";
    bebida = "bebida2";

    if(prato !== null && bebida !== null && sobremesa !== null){
        document.getElementById("bt").style.backgroundColor = "green";
        const elemento = document.querySelector('.frase');
        elemento.innerHTML = 'Fechar Pedido';
    }
}

function bebida3(){
    document.getElementById("bebida3").style.borderColor = "green";
    document.getElementById("bebida1").style.borderColor = "#FFFFFF";
    document.getElementById("bebida2").style.borderColor = "#FFFFFF";
    bebida = "bebida3";

    if(prato !== null && bebida !== null && sobremesa !== null){
        document.getElementById("bt").style.backgroundColor = "green";
        const elemento = document.querySelector('.frase');
        elemento.innerHTML = 'Fechar Pedido';
    }
}
/*FIM BEBIDAS*/

/*INÍCIO SOBREMESA*/
function sobremesa1(){
    document.getElementById("sobremesa1").style.borderColor = "green";
    document.getElementById("sobremesa2").style.borderColor = "#FFFFFF";
    document.getElementById("sobremesa3").style.borderColor = "#FFFFFF";
    sobremesa = "sobremesa1";

    if(prato !== null && bebida !== null && sobremesa !== null){
        document.getElementById("bt").style.backgroundColor = "green";
        const elemento = document.querySelector('.frase');
        elemento.innerHTML = 'Fechar Pedido';
    }
}

function sobremesa2(){
    document.getElementById("sobremesa2").style.borderColor = "green";
    document.getElementById("sobremesa1").style.borderColor = "#FFFFFF";
    document.getElementById("sobremesa3").style.borderColor = "#FFFFFF";
    sobremesa = "sobremesa2";

    if(prato !== null && bebida !== null && sobremesa !== null){
        document.getElementById("bt").style.backgroundColor = "green";
        const elemento = document.querySelector('.frase');
        elemento.innerHTML = 'Fechar Pedido';
    }
}

function sobremesa3(){
    document.getElementById("sobremesa3").style.borderColor = "green";
    document.getElementById("sobremesa1").style.borderColor = "#FFFFFF";
    document.getElementById("sobremesa2").style.borderColor = "#FFFFFF";
    sobremesa = "sobremesa3";

    if(prato !== null && bebida !== null && sobremesa !== null){
        document.getElementById("bt").style.backgroundColor = "green";
        const elemento = document.querySelector('.frase');
        elemento.innerHTML = 'Fechar Pedido';
    }
}
/*FIM SOBREMESA*/

/*INÍCIO BOTÃO*/

/*FIM BOTÃO*/