let prato = null;
let bebida = null;
let sobremesa = null;

/*INÍCIO PRATO PRINCIPAL*/
function prato1(){
    document.getElementById("prato1").style.borderColor = "green";
    document.getElementById("prato2").style.borderColor = "#FFFFFF";
    document.getElementById("prato3").style.borderColor = "#FFFFFF";
    prato = "Frango Yin Yang Normal";

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
    prato = "Frango Yin Yang Especial";

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
    prato = "Frango Yin Yang Gourmet";

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
    bebida = "coca gelada";

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
    bebida = "coca quente";

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
    bebida = "coca vencida";

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
    sobremesa = "pudim normal";

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
    sobremesa = "pudim com cabelo";

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
    sobremesa = "pudim estragado";

    if(prato !== null && bebida !== null && sobremesa !== null){
        document.getElementById("bt").style.backgroundColor = "green";
        const elemento = document.querySelector('.frase');
        elemento.innerHTML = 'Fechar Pedido';
    }
}
/*FIM SOBREMESA*/

/*INÍCIO BOTÃO*/
function finalizarPedido(){
    let mensagem;
    mensagem =
        "Olá, gostaria de fazer o pedido: \n" +
        "\n" + "-Prato: " + prato + "\n" +
        "\n" + "-Bebida: " + bebida +  "\n" +
        "-Sobremesa: " + sobremesa;

    window.open("https://wa.me/+5521999999999?text=" + mensagem);
}
/*FIM BOTÃO*/