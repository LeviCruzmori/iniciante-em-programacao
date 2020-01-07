// fazer a bolinha pulsar
/*

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio,cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

//desenhaCirculo(20, 20, raio);

//animando a bolinha
/*
// esta função nao dara certo pois não é
//possivel colocar tempo de exibição.
for(x=20; x<600; x++){
   limpatela();
    desenhaCirculo(x,20,10);
}
*//*
// limpa tela
function limpatela(){
   //parametro que apaga a bolinha.
   pincel.clearRect(0,0,600,400);
}


// funcao que exibe mensagem no console.log
/*
function exibemsg(){
   console.log('chamei função');
}
*//*
//let x = 20
let raio = 19;
let pulso =0//varivel para comparar posição de retorno
//funcao que atualiza a tela redesenhando a bolinha
function atualiaztela(){
   limpatela();
   // a função abaixo verifica a posição de x em positivo 
   // e qundo atinge seu valor maximo retona a bolinha em 
   //negativo e a outra faz a função inverso.
  // a variavel sentido subistitui o X++
   if(raio >30){
       puslo=-1
   }else if(raio<20){
       puslo=1
   }
   raio = raio + pulso;
   desenhaCirculo(300,200,raio,'blue');
   
  
}


// chama a função por um tempo determinado.
setInterval(atualiaztela,20);

*/
