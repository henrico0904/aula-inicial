let salario;
let saldo
let aluguel;
let energia;
let supermercado;
let lazer;
let totalDespesas;

salario = 5000;
aluguel = 1200;
energia = 200;
supermecado = 1500;

totalDespesas = aluguel + energia + supermercado;

saldo = salario - totalDespesas;
if (saldo > 0) 
    console.log(`você pode curtir a noitada com ${saldo} reais`)
else
console.log("você não pode sair, vai dormir que você ganha mais")


