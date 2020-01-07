//desenhando com o mouse na tela.
//implementando novas funções
/*
 var tela = document.querySelector('canvas');
 var pincel = tela.getContext('2d');
 let color = document.querySelector('input');// chama a variavel do html 

 pincel.fillStyle = 'grey';
 pincel.fillRect(0, 0, 600, 400);

 var desenha = false;

// atribuindo diretamente a função anônima
tela.onmousemove = function(evento) {

     if(desenha) {
         var x = evento.pageX - tela.offsetLeft;
         var y = evento.pageY - tela.offsetTop;
         pincel.fillStyle = color.value;//variavel puxada do html
         pincel.beginPath();
         pincel.arc(x, y, 10, 0, 2 * 3.14);
         pincel.fill();
     }
     console.log(x + ',' + y);
 }
//(onmousedown) evento que detecta se o botão esquerdo foi precionado.
// 
 tela.onmousedown = function() {

     desenha = true;
 }
// (onmouseseup) evento que detecta se o boato foio solto
  tela.onmouseup = function() {

     desenha = false;
 }

 */