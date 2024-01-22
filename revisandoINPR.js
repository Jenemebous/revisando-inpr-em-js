
let prompt = require("prompt-sync")()
/*
let prompt1 = parseInt(prompt("Digite o número para soma: "));
let prompt2 = parseInt(prompt("Digite mais um número para soma: "));
let soma = (prompt1+prompt2);
console.log("A soma é: " + soma )
*/

/*
let prompt1 = parseFloat(prompt("Digite o número para subtração: "));
let prompt2 = parseFloat(prompt("Digite mais um número para subtração: "));
let subtracao = (prompt1-prompt2);
console.log("A subtração é: " + subtracao );
*/

/*
let prompt1 = parseFloat(prompt("Digite um número para multiplicar: "));
let prompt2 = parseFloat(prompt("Digite mais um número para multiplicar: "));
let multi = prompt1*prompt2;
console.log("A multiplicação é: " + multi);
*/

/*
let prompt1 = parseFloat(prompt("Digite um número para divisão: "));
let prompt2 = parseFloat(prompt("Digite mais um número para divisão: "));
let divisao = prompt1/prompt2;
console.log("A divisão é: " + divisao);
*/

/*
let prompt1 = parseFloat(prompt("Digite um número para média: "));
let prompt2 = parseFloat(prompt("Digite mais um número para média: "));
let media = (prompt1+prompt2)/2
console.log("A media é: " +media)
*/

/*
let prompt1 = parseFloat(prompt("Digite um número para média: "));
let prompt2 = parseFloat(prompt("Digite mais um número para média: "));
let media = (prompt1+prompt2)/2;
console.log(media > 5);
console.log("A media é: " +media)
*/

/*
let prompt1 = parseFloat(prompt("Digite um número para média: "));
let prompt2 = parseFloat(prompt("Digite mais um número para média: "));
let media = (prompt1+prompt2)/2;
if (media > 5){
    console.log("Parabéns, você está aprovado");
}
else{
    console.log("Sinto muito. Você está reprovado");
}
console.log("A media é: " +media);
*/

/*
let prompt1 = parseFloat(prompt("Digite um número para sorteio: "));
let prompt2 = parseFloat(prompt("Digite mais um número para sorteio: "));

if (prompt1 === prompt2) {
    console.log("Empate!");
} else {
    let nSorteado = Math.floor(Math.random() * 2);

    if (nSorteado === 0) {
        if (prompt1 < prompt2) {
            console.log("Jogador 1 ganhou! ");
        } else {
            console.log("Jogador 2 ganhou!");
        }
    } else { 
        if (prompt1 > prompt2) {
            console.log("Jogador 2 ganhou! ");
        } else {
            console.log("Jogador 1 ganhou!");
        }
    }
}
*/

/*
let nota1 = parseFloat(prompt("Digite a nota 1: "));
let nota2 = parseFloat(prompt("Digite a nota 2: "));
let media = (nota1+nota2)/2;
if(nota1>0 && nota2>0 && media > 5){
    console.log("Parabéns, você está aprovado");
}
else{
    console.log("Sinto muito. Você está reprovado");
}
console.log("Sua média foi: " + media);
*/

/*
let nota1 = parseFloat(prompt("Digite a nota 1: "));
let nota2 = parseFloat(prompt("Digite a nota 2: "));
let media = (nota1+nota2)/2;
if(nota1 === 0 || nota2 === 0 || media <= 5){
    console.log("Sinto muito. Você está reprovado");
}
else{
    console.log("Parabéns, você está aprovado");
console.log("Sua média foi: " + media);
}
*/

/*
let n = parseFloat(prompt("Digite um número: "));

switch(n){
    case 1:
        console.log("Boa escolha");
        break;
    case 2:
        console.log("Bom");
        break;
    case 3:
        console.log("Vish");
        break;
    default:
        console.log("Escolha de 1 a 3");
}
*/

let n = parseFloat(prompt("Digite um número: "));
