//atividade 15
let number = 5
let divisao = number / 2

Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")

number = 13
divisao = number / 2
Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")

number= 18
divisao = number / 2
Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")

number= 35
divisao = number / 2
Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")

number =10
divisao = number / 2
Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")
 

number=1
divisao = number / 2
Number.isInteger (divisao)
if (Number.isInteger (divisao))
    console.log ("esse numero é par")
else console.log ("esse numero é impar")


//atividade 16
let produto1
let produto2

produto1 = 1000
produto2 = 980

if (produto1 < produto2)
    console.log(`O produto1 é o que tem melhor custo beneficio`)
else if (produto1 > produto2)
console.log (`O produto2 é o que tem melhor custo beneficio`)
else console.log (`Os dois produtos tem o mesmo custo beneficio`)

//atividade 17
let lado1
let lado2
let lado3
let soma

lado1 = 10
lado2 = 12
lado3 = 15

soma = lado1 + lado2 + lado3
console.log(`O perimetro desse triangulo é de: ${soma}cm`)

//atividade 18

let distancia
let velocidade
let tempo

distancia= 75
velocidade= 50
tempo = distancia / velocidade
console.log(`voce ira chegar neste local em ${tempo}h`)

//atividade 19

let numero = 20

console.log(`o numero sorteado foi ${numero}`)
//atividade 20

let nota1
let nota2
let nota3

nota = 10
nota2 = 7.5
nota3 = 2

if (nota <3)
    console.log ("sua nota é F")
else if (nota <5)
    console.log ("Sua nota é D")
else if (nota <7)
    console.log ("Sua nota é C")
else if (nota <8)
    console.log ("Sua nota é B")
else
console.log ("Sua nota é A")


if (nota2 <3)
    console.log ("sua nota é F")
else if (nota2 <5)
    console.log ("Sua nota é D")
else if (nota2 <7)
    console.log ("Sua nota é C")
else if (nota2 <8)
    console.log ("Sua nota é B")
else
console.log ("Sua nota é A")

if (nota3 <3)
    console.log ("sua nota é F")
else if (nota3 <5)
    console.log ("Sua nota é D")
else if (nota3 <7)
    console.log ("Sua nota é C")
else if (nota3 <8)
    console.log ("Sua nota é B")
else
console.log("sua nota é A")

//atividade 21
let num = 5
let fatorial = 1
fatorial *=num
fatorial *=num -1
fatorial *=num -2
fatorial *=num -3
fatorial *=num -4
console.log(`o fatorial de ${num} é ${fatorial}`)

//atividade 22 recebimento par e impar
 let numbParImpar = 11
 let verifica = numbParImpar % 2
 if(verifica % 2 == 0)
    console.log(`os número ${numbParImpar} é par`)
else console.log(`o numero ${numbParImpar} é impar`)

numbParImpar = 11
  verifica = numbParImpar % 2
 if(verifica % 2 == 0)
    console.log(`os número ${numbParImpar} é par`)
else console.log(`o numero ${numbParImpar} é impar`)

//atividade 23
let nuca
let tot
nuca = [2, 2, 0, 4]
total = 0
for (let i = 0; i < nuca.length; i++) {total += nuca[i];}
console.log(total)

//atividade 25
let valo1 = 10
let peso1 = 7
let valo2 = 20
let peso2 = 14
let multi = (valo1 * peso1)
let multi2 =(valo2 * peso2)
let adiçao = (multi + multi2)
let valoMais = (peso1 + peso2)
let mediaPond = (adiçao / valoMais)
console.log(`sua média ponderada é ${mediaPond}`);

//atividade 26
let entrada = 7
let saida = 16
let cargaHoraria =(saida - entrada)
console.log(`sua carga horária é de ${cargaHoraria} horas`)

//atividade 27
let conta = 450
let pessoas = 5
let diviz = (conta / pessoas)
console.log(`cada um terá que pagar ${diviz} reais`)

//atividade 28
let real
let dolar
real = 1000
dolar = (real / 5.77)
console.log(`${real} reais sao ${dolar} dolares`)

//atividade 29
let nu

nu = [10, 3, 12, 7, 8,]
nu.sort((a, b) => a - b)
console.log(nu)

//atividade 30
let text ="amo a emily"
console.log(text .toUpperCase())