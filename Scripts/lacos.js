// atividade 1
let preço = 220;
let diaPromocao = true;
let cartaoFidel = true;

let percentualDesconto = 0;
if (preço > 200) percentualDesconto += 10;
console.log("desconto de 10%");
console.log(`${percentualDesconto}`);

if (diaPromocao) percentualDesconto += 15;
console.log("desconto de 15%");
console.log(`${percentualDesconto}`);

if (cartaoFidel) percentualDesconto += 5;
console.log("desconto de 5%");
console.log(`${percentualDesconto}`);

let valorDesconto = preço * (percentualDesconto / 100);
let valorFinal = preço - valorDesconto;
console.log(`valor original é R$${preço.toFixed(2)}`);
console.log(
  `total de desconto é ${percentualDesconto}% (R$${valorDesconto.toFixed(2)}`
);
console.log(`valor final é de R$${valorFinal.toFixed(2)}`);

console.log("---------------------------------------");

//atividade 02 ----------------------------------------------------------------------

let idade = 15;
let teoria = false;
let pratico = true;

if (idade >= 18) console.log(`você é elegivel`);
else console.log(" voce não tem idade moleque");

if (teoria) console.log(`voce passou no exame teorico`);
else console.log(" voce reprovou no exame teorico");

if (pratico)
  console.log(
    "voce passou no exame prátco, pode pegar sua carteira de motorista"
  );
else console.log("voce reprovou");

console.log("--------------------------------------");

//atividade 03

let anos = 77
let ehferiado = true;
let temcartao = true;

let precoingresso;

if (anos <= 10) {
  precoingresso = 20;
  console.log("CRIANÇA - preço base: R$25");

} else if (anos >60) {
  precoingresso = 25;
  console.log("IDOSO - preço base: R$25");

} else {

    precoingresso = 40;
    console.log("ADULTO - preço base: R$40");
}
if (ehferiado) {
  let acrescimo = precoingresso * 0.2;
  precoingresso += acrescimo;
  console.log(`acrescimo de 20% por feriado: +R$${acrescimo.toFixed(2)}`);
}

if (temcartao) {
  let desconto = precoingresso * 0.15;
  precoingresso -= desconto;
  console.log(`desconto de 15% por ter cartão : -R$${desconto.toFixed(2)}`);
}

console.log(`Preço final do Ingresso é :R$${precoingresso.toFixed(2)}`);

console.log("-----------------------------------------")

//atividade 04

let year = 17
let classificacao 
let responsavel = false
let ingresso = true

if(year <=12) {
    classificacao = " livre "
    console.log(`voce pode ver filmes da classificação${classificacao}`)

}else if(year < 16){
    classificacao = " maior de 12 anos"
    console.log(`você pode ver filmes até a classificação${classificacao}`)
} else if(year <18){
    classificacao = " maior de 16 "
    console.log(`voce pode ver filmes até a classificação${classificacao}`)
}else {
    classificacao = " maior de 18 "
    console.log(`voce pode ver filmes de todas as classificações até ${classificacao}`)
}


if (responsavel) {
    console.log(" voce pode entrar com seu papai e mamae")

}else if( year > 15) {
    console.log("ja é grandinho ja")

}else{
    console.log("cade seu pai e sua mãe?")
}

if (ingresso) {
    console.log("pagou pode entrar")
}else {
    console.log("cade o ingresso véi?")
}
console.log("-----------------------------------------")

//atividade 05

let ponto = 100
let dificul = 1
let recorde = true
let allitem = true
let alld
let alli
let allr
let all 

if (dificul ){
  alld =  ponto * dificul
console.log(alld)
}
if(recorde){
    allr = alld * 2
    console.log(allr)
}
if (allitem){
   alli = allr + 150
console.log(alli)
}

console.log(`seus pontos foram ${alli} pontos`)
console.log("----------------------------------------")

//atividade 6

let temperatura = 20
let ocasiaoc
let ocasiaof
let ocasiaos
let colorido = true
let estampa = true
let orçamento 

if (temperatura > 25){
    console.log("voce irá gostar de uma roupa mais leve")
}
else{
 console.log("voce pode gostar de uma roupa mais pesada e quente")
}

if (ocasiaos){
    console.log("para eventos formais, recomendamos uma roupa social")
}
else console.log(" ")