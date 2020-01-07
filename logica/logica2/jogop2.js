/*Você deve mostrar a bandeira do Brasil por 3 segundos 
e depois da Alemanha, sempre intercalando! Para tal, tente 
escrever uma função trocaBandeira e use a função setInterval 
para chamá-la a cada 3 segundos.
*/
/*
//parte 2 do jogo
//trocando bamdeira
function desenhaBandeiraBrasil() {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle="green";
    pincel.fillRect(0, 0, 600, 400);

    pincel.fillStyle="yellow";
    pincel.beginPath();
    pincel.moveTo(300, 50);
    pincel.lineTo(50, 200);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.beginPath();
    pincel.moveTo(50, 200);
    pincel.lineTo(300, 350);
    pincel.lineTo(550, 200);
    pincel.fill();

    pincel.fillStyle="darkblue";
    pincel.beginPath();

    pincel.arc(300, 200, 100, 0, 2* 3.14);
    pincel.fill();
}


function desenhaBandeiraAlemanha() {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'black';
    pincel.fillRect(0, 0, 600, 133);

    pincel.fillStyle = 'red';
    pincel.fillRect(0, 133, 600, 133);

    pincel.fillStyle = 'yellow';
    pincel.fillRect(0, 266, 600, 133);
}
/*
let mostraBrasil=true; // motra a bandeira e verdadeiro

if(mostraBrasil == true) {
    if(mostraBrasil) {
    
        function trocaBandeira() {
    
        if(mostraBrasil) {
            desenhaBandeiraBrasil();
        } else {
            desenhaBandeiraAlemanha();
        }
        mostraBrasil = !mostraBrasil// aqui inverte o valor
    
    

setInterval(trocaBandeira,3000)
*/
//resolução professor
/*
function trocaBandeira() {
    // aqui devemos chamar desenhaBandeiraAlemanha() ou desenhaBandeiraBrasil()
}

function trocaBandeira() {
    //aqui devemos chamar desenhaBandeiraAlemanha() ou desenhaBandeiraBrasil()
}

setInterval(trocaBandeira, 3000); // a cada 3 segundos, chama trocaBandeira 
*/
var mostraBrasil = true; // a ideia é começar com a bandeira do Brasil

function trocaBandeira() {
    // aqui vem mais
}

var mostraBrasil = true;

function trocaBandeira() {

    if(mostraBrasil == true) {
        desenhaBandeiraBrasil();
    } else {
        desenhaBandeiraAlemanha();
    }
}

var mostraBrasil = true;

function trocaBandeira() {

    if(mostraBrasil == true) {
        desenhaBandeiraBrasil();
        mostraBrasil = false;
    } else {
        desenhaBandeiraAlemanha();
        mostraBrasil = true;
    }
}

setInterval(trocaBandeira, 3000); // a cada 3 segundos, chama trocaBandeira 

if(mostraBrasil == true) {
if(mostraBrasil) {

    function trocaBandeira() {

    if(mostraBrasil) {
        desenhaBandeiraBrasil();
    } else {
        desenhaBandeiraAlemanha();
    }
    mostraBrasil = // aqui inverte o valor


function trocaBandeira() {

    if(mostraBrasil) {
        desenhaBandeiraBrasil();
    } else {
        desenhaBandeiraAlemanha();
    }
    mostraBrasil = !mostraBrasil;
}


        }
    
}
}
