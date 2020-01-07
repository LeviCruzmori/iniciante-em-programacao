
// projeto bandeira do brasil.

let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

//retangulo principal fundo canvas
pincel.fillStyle = 'darkgreen';
pincel.fillRect(0,0,600,400);

//triangulo inferior
pincel.fillStyle ='yellow'; //triangulo
pincel.beginPath();
pincel.moveTo(50,200);
pincel.lineTo(300,350);// centralização eixo y elinha de altura Y 
pincel.lineTo(550,200); //linha de comprimento x canto a canto
pincel.fill();

// triangulo superior
pincel.fillStyle ='yellow'; //triangulo
pincel.beginPath();
pincel.moveTo(50,200);
pincel.lineTo(300,50);// centralização eixo y elinha de altura Y 
pincel.lineTo(550,200); //linha de comprimento x canto a canto
pincel.fill();


//circulo
pincel.fillStyle="darkblue";
pincel.beginPath();
pincel.arc(300,200,100,0,2*3.14);
pincel.fill();

