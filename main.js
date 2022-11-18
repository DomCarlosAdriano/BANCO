
let money = document.querySelector('#money')
let valor = 0
let totalCash = document.querySelector('#cash')
let estrato = document.querySelector('#estrato')

let data = new Date()
let dia =String(data.getDate()).padStart(2, '0')
let mes =String(data.getMonth() + 1).padStart(2, '0')
let ano =String(data.getFullYear())
let hora = String(data.getHours())
let min = String(data.getMinutes())

let horaAtual = `${hora}:${min}`
let dataAtual = `${dia}/${mes}/${ano}`

function handleSubmit(event){

  event.preventDefault();

}



function depositar(){

 let deposito = parseFloat(money.value)
 valor = parseFloat(valor)

if( money.value == ''){
  deposito = Number(0)
  alert(`SEU VALOR DEPOSITADO É DE R$ 0,00 
  ENTÃO NENHUMA AUTERAÇÃO FOI FEITA NO SEU SALDO ATUAL `)
}

if(money.value <= -1){
  deposito = Number(0)
alert('NÃO ACEITAMOS NUMERO NEGATIVOS, SÓ ACEITAMOS NUMEROS INTEIROS')
}

 valor +=  + deposito 
 totalCash.innerHTML = `<h1  class="dinheiro"  > R$ ${valor} </h1>`

 money.value = '';

 let notaD = `${dataAtual} as ${horaAtual}  foi depositado o valor de R$ ${deposito}`

 let notaFiscal = document.createElement("p");
 let conteudoNota = document.createTextNode(notaD)
 notaFiscal.appendChild(conteudoNota)
 estrato.insertBefore(notaFiscal, estrato.children[0]);




}

function retirar(){

  let deposito = parseFloat(money.value)
  valor = parseFloat(valor)

  if( money.value == ''){
    deposito = Number(0)
    alert(`SEU VALOR SACADO FOI DE R$ 0,00 
    ENTÃO NENHUMA AUTERAÇÃO FOI FEITA NO SEU SALDO ATUAL `)
  }

  if(money.value <= -1){
    deposito = Number(0)
  alert('NÃO ACEITAMOS NUMERO NEGATIVOS, SÓ ACEITAMOS NUMEROS INTEIROS')
  }

  valor +=  - deposito 
  totalCash.innerHTML = `<h1  class="dinheiro" > R$ ${valor} </h1>`

  money.value = '';

  let notaS = `${dataAtual} as ${horaAtual}  foi sacado o valor de R$ ${deposito}`

  let notaFiscal = document.createElement("p");
  let conteudoNota = document.createTextNode(notaS)
  notaFiscal.appendChild(conteudoNota)
  estrato.insertBefore(notaFiscal, estrato.children[0]);
 
}

