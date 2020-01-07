/*
function desenhaRetangulo(x, y, largura, altura, cor) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle=cor;
    pincel.fillRect(x,y, largura, altura);
    pincel.strokeStyle='black';
    pincel.strokeRect(x,y, largura, altura);
}

function desenhaTexto(x , y, texto) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.font='15px Georgia';
    pincel.fillStyle='black';
    pincel.fillText(texto, x, y);    
}

function desenhaBarra(x, y, serie, cores, texto) {

    desenhaTexto(x, y - 10, texto);

    var somaAltura = 0;
    for (var i = 0; i < serie.length; i++) {
        var altura = serie[i];
        desenhaRetangulo(x, y + somaAltura, 50, altura, cores[i]);
        somaAltura = somaAltura + altura;
    }
}

var cores = ['blue','green','yellow', 'red'];
var serie2015 = [50,25,20,5];
var serie2016 = [65,20,13,2];

desenhaBarra(50, 50, serie2015, cores, '2015');
desenhaBarra(150, 50, serie2016, cores, '2016');

///
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function desenhaEsquadro(xa, ya, xc, yc, cor) {
    pincel.fillStyle = cor
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xa, yc);
    pincel.lineTo(xc, yc);
    pincel.fill();

    pincel.fillStyle = 'white'
    pincel.beginPath();
    pincel.moveTo((6*xa + xc)/7, (9*ya + 5*yc)/14);
    pincel.lineTo((6*xa + xc)/7, (ya + 6*yc)/7);
    pincel.lineTo((5*xa + 9*xc)/14, (ya + 6*yc)/7);
    pincel.fill();

}

desenhaEsquadro(50, 50, 400, 400, 'black');

*/