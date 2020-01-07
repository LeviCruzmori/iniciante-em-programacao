//inicio adivinha
/*
function pulaLinha(){
    document.write("<br>");
    document.write("<br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}
function sorteia(n){
    numero=Math.round(Math.random()*n);
    return numero;
}

let numeroPensado = sorteia(10)

// outomatizando chance de acerto com numeros de tentaivas para acertar
let tentativa = 1;
while(tentativa <=3){
    let chute = parseInt(prompt("digite seu chute "));
    //condições
    if(chute ==numeroPensado){
        mostra("vc acertou o numero que pensei"+numeroPensado);
        break
    }else {//if(chute > numeroPensado){
        mostra("vc errou, o numero. ");
    }//else if(chute < numeroPensado){
    // mostra("vc errou o numero que pensei é "+numeroPensado)    
    //}
tentativa++
}

    mostra("fim")

//fim
/*


// inicio posso dirigir

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));
var temCarteira = prompt("Tem carteira? Responda S ou N");

if(idade>=18 && temCarteira=="s"){
    mostra("autorizado")
}else{
    mostra("nao podes")
}

// fim 
*/