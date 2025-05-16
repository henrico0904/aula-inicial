//atividade 01
let num1 = 10;
let num2 = 120;
let vezes = "*";
let mais = "+";
let menos = "-";
let divisao = "/";
let resultadox = num1 * num2;
let resultadomais = num1 + num2;
let resultadomenos = num1 - num2;
let resultadodivisa = num1 / num2;

switch (mais) {
  case `*`:
    console.log(`${num1} x ${num2}`);
    console.log(`resultado: ${resultadox}`);
    break;

  case `+`:
    console.log(`${num1} + ${num2}`);
    console.log(`resultado: ${resultadomais}`);
    break;

  case `-`:
    console.log(`${num1} - ${num2}`);
    console.log(`${resultadomenos}`);
    break;

  case `/`:
    console.log(`${num1} / ${num2}`);
    console.log(`${resultadodivisa}`);
    if (` / == 0`) console.log("Inexistente");

    break;

  default:
    console.log("operação inexistente");
}
console.log(`_______________________________________________________________`);

//atividade 02
let numero = 1;
if (numero < 0) {
  console.log(`o número ${numero} é negativo`);
} else if (numero == 0) {
  console.log(`o número ${numero} é igual a zero`);
} else console.log(`o numero ${numero} é positivo`);

console.log(`_______________________________________________________________`);

//atividade 03
let idade = 16;
if (idade >= 18) console.log("você pode votar");
else console.log("você não tem idade para votar");

console.log(`_______________________________________________________________`);

//atividade04
let a = 1;
let b = 4;

if (a > 10 && b > 10) {
  console.log(`os dois numeros ${a} e ${b} são maiores que 10`);
} else if (a < 5 || b < 5) {
  console.log("algum dos números é menor que 5");
} else {
  console.log("um é maior que 10 e o outro é menor que 5");
}

console.log(`____________________________________________________________`);

//atividade 05
for (let i = 1; i <= 10; i++) console.log(i);

console.log(`_______________________________________________________________`);

//atividade 06
let soma = 0;
let i;
for (i = 1; i <= 5; i++) {
  soma += i;
}
console.log(`Valor da soma total dos numeros de 1 a 5 é ${soma}`);

console.log(
  `___________________________________________________________________`
);

//atividade 07
for (i = 1; i <= 20; i++) {
  const element = [i];
  if (i % 2 === 0) console.log(`o número ${i} é par`);
}

console.log(
  `___________________________________________________________________`
);
//atividade 08
let resultado = 0;
let numero1 = 8;
for (let i = 1; i <= 10; i++) {
  const element = [i];
  resultado = numero1 * i;

  console.log(`${numero1} x ${i} = ${resultado}`);
}
console.log(
  `__________________________________________________________________`
);

//atividade 09

for (let i = 20; i >= 0; i--) {
  const element =[i];
  if(i % 2 ===0) console.log(`${i}`);
  
}
console.log( `__________________________________________________________________`)
