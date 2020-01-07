// Exercicios compilados em uma unica tela.
/*

// exercicio pegadinha inicio
function fazPegadinha() {
    alert("Olá");
    alert("amiga!");
    alert("Tá");
    alert("bastante");
    alert("entediada?");
    alert("Em ficar");
    alert("Clicando em");
    alert("Ok");
    alert("né?");
}
//fazPegadinha();esta como comentario para evitar execução.

// fim pegadinha

// exercicio idade inicio
var minhaIdade = 20;
let ano = 2016;
let  n = 3;

function pulaLinha(){
    document.write("<br>");
}
//(frase) é o parametro passado para a função, e imprime o que é passado para função mostra.
// função para redução do codigo,
function mostra(frase){
   document.write (frase);
   pulaLinha();

}
//document.write("Flávio nasceu em  " + (ano - 1977)+ " anos");
mostra("Flávio nasceu em  " + (ano - 1977)+ " anos");

//document.write("Joaquim nasceu em " + (ano - 1996)+" anos");
mostra("Joaquim nasceu em " + (ano - 1996)+" anos");

//document.write("Barney nasceu em " + (ano - 1976)+" anos ");
mostra("Barney nasceu em " + (ano - 1976)+" anos ");

//document.write(" O resultado da fórmula é : " + n * (10 / 20) +" anos " );
mostra(" O resultado da fórmula é : " + n * (10 / 20) +" anos " );


//document.write("Eu nasci em " + (2016 - minhaIdade)+" anos " );
mostra("Eu nasci em " + (2016 - minhaIdade)+" anos ");
// fim mostra idade

// exercicio  mês prova inicio
var mes = 6;
document.write("Realizei a prova no mês " + mes + ".");
mes = 7;
document.write("Não, desculpe, realizei a prova no mês " + mes + ".");
pulaLinha();
// fim mês prova

// codigo tabuada  inicio
//variaveis da tabuada.
let n1 = 7
document.write("ensira o valor de N1 <br>");
document.write(n1+" vezes 1 é " + n1 * 1+ "<br>");
document.write(n1+" vezes 2 é " + n1 * 2+ "<br>");
document.write(n1+" vezes 3 é " + n1 * 3+ "<br>");
document.write(n1+" vezes 4 é " + n1 * 4+ "<br>");
document.write(n1+" vezes 5 é " + n1 * 5+ "<br>");
document.write(n1+" vezes 6 é " + n1 * 6+ "<br>");
document.write(n1+" vezes 7 é " + n1 * 7+ "<br>");
document.write(n1+" vezes 8 é " + n1 * 8+ "<br>");
document.write(n1+" vezes 9 é " + n1 * 9+ "<br>");
document.write(n1+" vezes 10 é " + n1 * 10+ "<br>");
// fim tabuada


// media das idades
// metodo Math = metodo matematico, e round é para aredondar.

let idadeFlavio=39;
let idadeJoaquim=20;
let idadeBarney=41;
let media = (idadeFlavio+idadeJoaquim+idadeBarney)/3;
document.write("a media das idades é "+ Math.round(media));
// var nome
pulaLinha();
let nome = "flavio";
document.write(" a idade de "+nome+ " é "+ idadeFlavio);
pulaLinha();
// fim media idade

// detetive roy ex: inicio
let linda = 12;
let guaraciara = 15;
let perola = 13;
let media2 = (linda+guaraciara+perola)/3;
let nome1 = "perola";
let totalIdade = (linda+guaraciara+perola)
document.write(" a media de indade entre minhas filhas é " +Math.round(media2));
pulaLinha();
document.write(" a idade da minha filha "+ nome1 + " é "+Math.round(media2));
pulaLinha();
document.write(" o total da idade delas é "+totalIdade);
// fim exercicio roy

// ex simone inicio
var IDADE1 = 10;
var IDADE2 = "20";
var IDADE3 = 12;

document.write("A média das idades é ");
pulaLinha();
document.write( (IDADE1 + IDADE2 + IDADE3) / 3);
pulaLinha();
// fim simone


// gilberto inicio
// neste exercicio eu criei uma função para cada item
function pulaLinha1() {
    document.write("<br><br>");
}
function titulo(){
    document.write("<h1>"+tito+"</h1>")
    pulaLinha1();
}
function paraGrafo(p){
    document.write(p);
    pulaLinha1();
}
let tito= "Bem bindo ao meu programa!";
titulo();
//var titulo = "Bem-vindo ao meu programa!";
paraGrafo("Vocês não sabem o que tive que aprender para fazer isso!");
paraGrafo("Contudo, assistindo os vídeos e estudando ...");
paraGrafo("Eu vou mais longe!");
// fim gilberto

// tuane inicio
function exibeAlerta(mensagem) {
    alert("***" + mensagem + "***");
}

var idade1 = 10;
var idade2 = 20;
var idade3 = 30;
var totalIdades = idade1 + idade2 + idade3;
var mediaIdades = totalIdades/3;

exibeAlerta("Total de idades é " + totalIdades);
exibeAlerta("A média das idades é " +  mediaIdades);
//fim tuane

//inicio ricardo

function pulaLinha2() {

    document.write("<br>");
}

function mostra1(frase1) {

    document.write("**************************************************");
    pulaLinha2();
    document.write(frase1);
    pulaLinha2();
}

mostra1("BEM-VINDO AO MEU PROGRAMA");
mostra1("ELE REALMENTE FUNCIONA");
mostra1("EU USEI FUNÇÃO PARA FAZER ISSO");

// diferença de idade entre irmaos
function pulaLinha3() {
    document.write("<br>");
}

function mostra3(frase2) {
    document.write(frase2);
}

var minhaIdade = 18;
var idadeIrmao = 15;

mostra3("Nossa diferença de idade é " + (minhaIdade - idadeIrmao));
pulaLinha3();

//fim

// inicio geração
// variaveis do processo
let anoIcial = 1500;
let anoAtual = 2019;
let anos = 28;
let media4= ((anoAtual-anoIcial)/anos);

function pulaLinha4() {
    document.write("<br>");
}
function mostra4(frase4) {
    document.write(frase4);
}
mostra4("Até o momento se passaram " + Math.round(media4)+ "gerações.");
pulaLinha4();

// fim
*/
