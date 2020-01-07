
/*
 let tela = document.querySelector('canvas');
 let pincel = tela.getContext('2d');

 pincel. fillStyle = 'grey';
 pincel.fillRect(0,0,600,400);

 function exibealerta(evento){
    // alert('clique');// exibe alerta quando é clicado na tela do canvas.
    let x = evento.pageX-tela.offsetLeft;//apaga borda lateral
    let y = evento.pageY-tela.offsetTop;//apaga borda superior
    pincel.fillStyle = 'blue';//define cor da imagem desenhada
    pincel.beginPath();//parametro necessário para desenhar circulo e triangulo
    pincel.arc(x,y,10,0,2*Math.PI);//parametros do circulo.
    pincel.fill();
    //alert(x+','+y);//mostra a posição do ponteiro do mouse.
    // console.log(x+','+y)//mostra parametro da posição do mouse no console.




    }

 tela.onclick = exibealerta;

 */

 //codigo com função muda de cor.
//lista de cores [blue,red,green].
// botão DIREITO do mouse muda cor.
//botão ESQUERDO aparece a bolinha.
//(oncontextmenu) resposavel pela execução do botão DIREITO.
/*


 var tela = document.querySelector('canvas');
 var pincel = tela.getContext('2d');
 
 pincel.fillStyle = 'grey';//cor da tela de fundo canvas
 pincel.fillRect(0, 0, 600, 400);//tamanho do canvas

 let cores = ['blue','red','green']; // lista de cores
 let indicecoratual = 0; //ponto de partida da lista de cores.

 function desenhaCirculo(evento) {

     var x = evento.pageX - tela.offsetLeft;
     var y = evento.pageY - tela.offsetTop;
     pincel.fillStyle = cores[indicecoratual];
     pincel.beginPath();
     pincel.arc(x, y, 10, 0, 2 * 3.14);
     pincel.fill();
     console.log(x + ',' + y);
 }

 tela.onclick = desenhaCirculo;

 function mudaCor() {

    indicecoratual++;

    if(indicecoratual >= cores.length) {
        indicecoratual = 0; // volta para a primeira cor, azul
    }
     return false;
 }

 tela.oncontextmenu = mudaCor;

 */