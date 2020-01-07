//incio das funçoes para imc
/*
function pulaLinha(){
    document.write("<br>");
    document.write("<br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}

function calcularImc(peso1,altura1,){
    let imc1= peso1 /(altura1*altura1);
// return peso = (altura*altura); Ésta é outra maneira de apresentar o resultado.
    return imc1;
  //  let imc2= peso2 /(altura2*altura2);
  //  let imcTotal = imc1 + imc2;
  //  mostra(" A soma dos imc's é " + imcTotal);
}
let imcfabio = calcularImc(73,1.71);
let imcamigo = calcularImc(68,1.72);

mostra(imcfabio);
mostra(imcamigo);

// fim da função operante

//let pesoflavio = 73
//let alturaflavio = 1.71;
//calcularimc(pesoflavio,alturaflavio);
//mostra("O imc do flavio é"+ imcflavio);

//let pesoamigo = 68;
//let alturaamigo = 1.72;
//calcularImc(pesoamigo,alturaamigo);

//mostra("o meso do meu amigo é "+imcamigo);

// função do questionario
function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(altura, peso) {
// faltava o comando return para ter o resultado
    var imc = peso / (altura * altura);
    return imc;
}

var imcCalculado = calculaImc(1.77, 75);
mostra("O meu IMC é : " + imcCalculado);
//fim função questionario


// calculo imc para interagir com o usuario
function pulaLinha(){
    document.write("<br>");
    document.write("<br>");
}
function mostra(frase){
    document.write(frase);
    pulaLinha();
}

function calcularImc(altura,peso){
    return peso /(altura*altura);
}
let nome = prompt(" informe seu nome: ");
let pesoinformado = prompt(nome+" informe seu peso: ");
let alturainformada = prompt(nome+" imforme sua altura: ");
    
let imc = calcularImc( alturainformada, pesoinformado);
document.write(nome+ " seu imc é "+ imc);
pulaLinha();
if(imc<18){
    mostra("vc esta abaixo do recomendado");
}
if(imc >=18 && imc<=35){
    mostra(" seu peso é ideal ")
}
// fim
*/