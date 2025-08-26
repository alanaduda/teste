//DESAFIOS DO MÓDULO 2
//D1
diaDaSemana = prompt ('Qual dia da semana você está visitando este site?');
if (diaDaSemana == sábado) {
 alert ('Bom final de semana!! :)');
} else if (diaDaSemana == domingo) {
 alert ('Ótimo fim de semana!');
} else {
    alert('Boa semana!');
}

//D2
digiteNumero = prompt ('Digite um número.');
if (digiteNumero >=0) {
    alert ('Você escolheu um número positivo')
} else {
    alert ('Você escolheu um número negativo')
}

//D3
pontuaçaoJogo = 90
if (pontuaçaoJogo >= 100) {
    console.log('Parabéns! Você venceu o jogo.');
} else { 
    console.log('Ops! Não foi dessa vez, tente novamente!')
}

//D4
let saldoConta = 200 //pode ser qualquer exemplo
alert (`O saldo da sua conta é de ${saldoConta} reais.`)

//D5
let nome = prompt ('Digite seu nome aqui.');
alert(`Seja bem vindo ${nome}!!`);


//DESAFIOS DO MODULO 3:
//1
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

//2
let contador = 10;
while (contador >=0) {
    console.log(contador);
    contador--;
}

//3
let numero = prompt ('Escolha um número de 1 até 10');
while (numero >=0) {
    console.log(numero);
    numero--;
}

//4
let numeroMaximo = prompt ('Por favor, digite um número.');
let contador = 10;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}

//5
let valor1 = 10;
let valor2 = 15;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//6
let valor1 = 100;
let valor2 = 50;
let resultado = valor1 - valor2;

console.log(`A subtração dos valores ${valor1} e ${valor2} equivale a ${resultado}.`);

//7
let idade = prompt ('Digite a sua idade');

if (idade >= 18) {
    console.log('Você é maior de idade.'); 
} else {
    console.log('Você é menor de idade.'); 
}

//8
let numero = prompt ('Digite um número.');

if(numero <0) {
    alert ('O número que você escolheu é negativo');
} else {
    alert ('O número que você escolheu é positivo.');
}

//10
let nota = 1;

if(nota <= 7) {
    console.log('Você foi reprovado!'); 
} else {
    console.log('Parabéns! Você foi aprovado!');
}

//11







