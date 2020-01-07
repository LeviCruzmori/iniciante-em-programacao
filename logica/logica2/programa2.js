/*
function desenhaquadrado(x,y,cor){

    let tela = document.querySelector('canvas');// referência da tela do canvas
    let pincel =tela.getContext('2d')// tipo do pincel.

    pincel.fillStyle = cor;
    pincel.fillRect(x,y,50,50);
    pincel.strokeStyle = 'red';// strokeStyle define a cor a ser usada.
    //pincel.fillStroke ;// define uma borda preta 
    pincel.strokeRect(x,y,50,50)//desenha aborda no retangulo


}
//repetiçã da funçã com while.

let x = 0;
while(x<600){
    desenhaquadrado(x,0,'green');
    x=x+50;
}
fim laço while

// repetição da função com for.

for(let x=0; x<600; x=x+50){
    desenhaquadrado(x,0,'green');
}
//fim laço for

//exercicio desenhaflor

let tela = document.querySelector('canvas');// referência da tela do canvas
let pincel =tela.getContext('2d')// tipo do pincel.
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2*Math.PI);
   // pincel.strokeStyle= 'blue';
    pincel.fill();
}
function desenhaflor(x,y){
    desenhaCirculo(x,y+20,10,'blue');
    desenhaCirculo(x,y,10,'red');
    desenhaCirculo(x,y-20,10,'yellow');
    desenhaCirculo(x-20,y,10,'orange');
    desenhaCirculo(x+20,y,10,'black');
}
desenhaflor(300,200);
//fim desenha flor
*/

//inicio desenha quadrado
/*

function desenhaquadrado(x,y,tamanho,cor){
    let tela = document.querySelector('canvas');// referência da tela do canvas
    let pincel =tela.getContext('2d')// tipo do pincel.

    
    pincel.fillStyle = cor;
    pincel.fillRect(x,y,tamanho,tamanho);
    pincel.strokeStyle = 'blak';
    pincel.strokeRect(x,y,tamanho,tamanho);
   
  
}

  //  for(let x=0; x<150; x=x+50){
    //    desenhaquadrado(x,50,50,50,'green');
    //}

    function desenhaTexto(texto, x , y) {
        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d');
    
        pincel.font='20px Georgia';
        pincel.fillStyle='black';
        pincel.fillText(texto, x, y);    
    }
    
    desenhaTexto("Qual é a fração?", 50, 30);
    let y = 50;

    desenhaquadrado(50,y,100,'green');
    desenhaquadrado(150,y,100,'green');
    desenhaquadrado(250,y,100,'green');
    desenhaquadrado(350,y,100,'green');

    //fim
    */