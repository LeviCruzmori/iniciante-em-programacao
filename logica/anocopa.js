/*
// inicio anocopa 

// funções
function pulaLinha(){
    document.write("<br>");
    document.write("<br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}
let anoCopa = 1930;
let limite = parseInt(prompt("Entre com a data limite"));
// funçao while = repita.
while(anoCopa<=limite){
    
    mostra("teve copa em "+ anoCopa);
    anoCopa = anoCopa+4;
}
mostra("fim")
//fim


  // mostra números pares de 1 há 100.
  //inicio

function pulaLinha(){
    document.write("<br>");
    document.write("<br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}
let par = 0;

      while( par <= 100 ) {

          mostra("par"+par);
         
          par = par + 2; // incrementa de 2 em 2.
      }
       mostra("fim");
//fim

//numeros aleatorios
function pulaLinha(){
    document.write("<br>");
    document.write("<br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}
let n = 30;

      while( n <= 40 ) {
          if(n ==33 ){
      n = n +1
   }
   if(n ==37 ){
    n = n +1
 }
    mostra("par"+n);
    n = n + 1; // incrementa de 1 em 1.
}
mostra("fim");
//fim

// imprima em ordem decrecente

function pulaLinha(){
    document.write("<br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}
let n = 20;

      while( n >=0 ) {
       
   mostra(n);
    n = n - 1; // incrementa de 1 em 1.
 }
    

mostra("fim");
//fim

//francisco inicio realizar correção
function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var anoCopa = 1930;
var limite = parseInt(prompt("Qual é o ano limite?"));

while(anoCopa <= limite) {

    mostra(" tem copa!" + anoCopa);
   anoCopa = anoCopa + 4; // correção realizada
}
//anoCopa = anoCopa + 4;//erro encontrado.
mostra("Ufa! Esses foram os anos de copa até " + limite);
//fim


// tentaivas de login
//resolução professor
var loginCadastrado = "alura";
var senhaCadastrada = "alura321";

var maximoTentativas = 3;
var tentativaAtual = 1;

while(tentativaAtual <= maximoTentativas) {

    var loginInformado = prompt("Informe seu login");
    var senhaInformada = prompt("Informe sua senha");

    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

        alert("Bem-vindo ao sistema, " + loginInformado);

        tentativaAtual = maximoTentativas; // acertou, então faço o gasto de todas as tentativas para sair do loop. Lá embaixo vai incrementar + 1! 

    } else {

        if (tentativaAtual == 3) {
            alert("Número permitido de tentativas ultrapassado!");
        } else {
            alert("Login inválido. Tente novamente");
        }
    }

   // vai para a próxima tentativa
    tentativaAtual = tentativaAtual +1  
}
*/