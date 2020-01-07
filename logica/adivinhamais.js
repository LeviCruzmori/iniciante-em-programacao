/*
//let segredo = Math.round(Math.random()*10);
let segredo = [5,7,10,2];// lista é arry
let input = document.querySelector("input");
input.focus();//posiciona o cursor para deigitar 

function verifica(){
    let achou = false;

    for(let posicao=0;posicao < segredo.length; posicao++){
       if(input.value==segredo[posicao]){
    alert("vc acertou!");
    achou = true;
        break;
}//else{
   // alert("vc errou!");
//}
    
}   
if(achou == false){
    alert("vc errou!"); 
}
    
    input.value=""; //limpa a caixa do input
    input.focus();//posiciona o cursor para deigitar novamente
    }
   
///asociar função verifica com o button do html
let button = document.querySelector("button");
button.onclick =  verifica;//tem conjugar  função sem as parenteses no button para funcionar.
*/

/*

//verificar o erro não esta chamando a função verifica.
// segunda maneira de fazer


function sorteia(){
    return Math.round(Math.random()*10);
}

function sorteianumeros(quantidade){
    let segredo = [];
    let numero = 1;

    while(numero<=quantidade){
        let numeroaleatorio = sorteia();
        let achou = false;

        if (numeroaleatorio!== 0){

            for(let posicao=0;posicao < segredo.length; posicao++){

            if(segredo[posicao]== numeroaleatorio){
             achou = true;
             break;
        }
    }
         if (achou == false){
           segredo.push(numeroaleatorio); 
             numero++;
        }
                
    }
  
}
return segredo
}
  let segredo = sorteianumeros(6);
  console.log(segredo);

  let input = document.querySelector("input");
input.focus();//posiciona o cursor para deigitar 

function verifica(){
    let achou = false;

    for(let posicao=0;posicao < segredo.length; posicao++){

       if(input.value==segredo[posicao]){

    alert("vc acertou!");
    achou = true;
        break;
}//else{
   // alert("vc errou!");
//}
    
}   
if(achou == false){
    alert("vc errou!"); 
}
    
    input.value=""; //limpa a caixa do input
    input.focus();//posiciona o cursor para deigitar novamente
    }
 
///asociar função verifica com o button do html
let button = document.querySelector("button");
button.onclick =  verifica;//tem conjugar  função sem as parenteses no button para funcionar.
/*

// resoluçao do professor para comparar
/*

//function sorteia(){
  //  return Math.round(Math.random()*10);
}

 function sorteiaNumeros(quantidade) {

  //   var segredos = [];

   //  var numero = 1;

     while(numero <= quantidade) {

        //   var numeroAleatorio = sorteia();
         //  var achou = false;

          if (numeroAleatorio !== 0) {
                  for(var posicao = 0; posicao < segredos.length; posicao++) {

                       if(segredos[posicao] == numeroAleatorio){
                   //          achou = true;
                     ///        break;
                        }

                  }

                  if (achou == false) {
                  //      segredos.push(numeroAleatorio);
                  //      numero++;
                  }
           }

     }

     return segredos;

 }

 var segredos = sorteiaNumeros(3);

 console.log(segredos);

 var input = document.querySelector("input");
 input.focus();

 function verifica() {

    var achou = false;

    for(var posicao = 0; posicao < segredos.length; posicao++) {

           if(input.value == segredos[posicao]) {

                  alert("Você ACERTOU!");
                  achou = true;
                  break;
           } 
    }

    if(achou == false) {

           alert("Você ERROU!");
    }

    input.value = "";
    input.focus();

 }

 var button = document.querySelector("button");

 button.onclick = verifica;
*/

 // resolver o erro de item repetidos na lista
 var ingredientes = [];

 var quantidade = parseInt(prompt("Quantos ingredientes você vai adicionar?"));

 var contador = 1;

 while( contador <= quantidade) {

     var ingrediente = prompt("Informe o ingrediente " + contador);
     let existe = false;
     for( let posicao = 0; posicao<ingrediente.length; posicao++ ){


     for( var posicao = 0; posicao < ingredientes.length; posicao++) {

        if( ingredientes[posicao] == ingrediente) {

            existe = true;
            break;
        }
    }
}

    if(existe==false){

     ingredientes.push(ingrediente);

     contador++;
    }

 }

 console.log(ingredientes);

 /// resolução do instrutor
/*
 var ingredientes = [];

 var quantidade = parseInt(prompt("Quantos ingredientes você vai adicionar?"));

 var contador = 1;

 while( contador <= quantidade) {

     var ingrediente = prompt("Informe o ingrediente " + contador);

     var existe = false;

     for( var posicao = 0; posicao < ingredientes.length; posicao++) {

         if( ingredientes[posicao] == ingrediente) {

             existe = true;
             break;
         }
     }

     if( existe == false) {

         ingredientes.push(ingrediente);
         contador++;
     }
 }

 console.log(ingredientes);
 //

 */
