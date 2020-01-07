//exercicio mida tamanho da bola
//usar o SHIFT para aumentar a bola.
/*
//exercicio pronto base.

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
    console.log(x + ',' + y);

}

tela.onclick = desenhaCirculo;

//1º criar um alerta par quando o shift por clicado.
/*implementar o alerta dentro da funcao desenhacirculo
if (evento.shiftKey) {

           alert('Você clicou pressionando SHIFT!');
        }
    
        2º criar a variavel raio.
        depois atribuir a variavel raio a if
        depois atribuir a variavel raio a pincel.arc
        


//novo teste.
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'gray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    var raio = 10;

    console.log(x + ',' + y);

    if (evento.shiftKey) {
        while(raio < 100){
          
        }
       //raio = raio +10; // raio agora passa a valer 30!
    }

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

tela.onclick = desenhaCirculo;
*/
/*
//aumenta e diminue bolinha
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    console.log(x + ',' + y);

    if (evento.shiftKey && evento.altKey) {

        alert('Só aperte uma tecla por vez, por favor!');

    } else if(evento.shiftKey && raio + 10 <= 40) {
        raio = raio + 10;

    } else if(evento.altKey && raio - 5 >= 10) {
        raio = raio - 5;

    }

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

tela.onclick = desenhaCirculo;

*/