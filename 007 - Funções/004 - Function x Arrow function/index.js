/*
  1 - Nome de função
  2 - Retorno
  3 - Não tem Hoisting
  4 - Arguments
*/

function nomeFunc(){
  return "Oi";
}

console.log(nomeFunc());

const nomeFuncArrow = () => {
  return "Olá";
}

console.log(nomeFuncArrow());

const nomeFuncArrowReturn = () => "Tudo bem com você?";


console.log(nomeFuncArrowReturn());

const nomeFuncArrowHoisting = () => {
  return "tudo e com você?";
}

console.log(nomeFuncArrowHoisting());

// não funciona com os arguments
// const nomeFuncArrowArguments = () => {
//   return arguments;
// }

// console.log(nomeFuncArrowArguments());

function nomeFuncArguments() {
  return arguments;
}

console.log(nomeFuncArguments("Sim, estou bem também! obrigado por perguntar"));

const nomeFuncArrowParams = param => param; // só invoca 1 argumento

console.log(nomeFuncArrowParams("Oh, pois nada, você também é uma pessoa muito gentil"));

/* 
  5 - Não pode ser invocada com New
*/
function novaFunc() {
  return 123;
}

// new novaFunc();

// const novaFuncArrow = () => {
//   return console.log(123);
// }

// new novaFuncArrow();

class newFuncArrow {

  constructor(nome) {
    this.nome = nome
  }
}

const newClass = new newFuncArrow("obrigado pelo elogio, então o que deveriamos fazer? alguma sujestão?");
console.log(newClass.nome);

/* 
  6 - Contexto
  Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico.
  
  Isso significa que arrow functions herdam o contexto local de onde foi declarado, 
  enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado 
  no momento da chamada 

  Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente 
  como o contexto global, que no caso dos navegadores é window
*/

const lanches = {

  cardapio: [
    {nome: "x-salada", preco: "R$ 25"},
    {nome: "x-baicon", preco: "R$ 30"}
  ],

  meuPedidoFunc: function(select) {
    return console.log(this.cardapio[select]);
  },

  meuPedidoFuncTimeOut: function() {
    setTimeout(function() {
      console.log(this.cardapio);
      console.log(this);
    }.bind(this), 1000);
  },

  meuPedidoArrowFunc: (select) => {
    this.cardapio = [
      {nome: "x-salada", preco: "R$ 25"},
      {nome: "x-baicon", preco: "R$ 30"}
    ]
    return console.log(this.cardapio[select]);
  },

};

lanches.meuPedidoFunc(0);
lanches.meuPedidoArrowFunc(1);
lanches.meuPedidoFuncTimeOut(1);

/*
  7 - Constructor
  Arrow functions não podem ser constructors, então não é possível usar o operador 
  new com a mesma.
*/

class newArrow {

  constructor(nome) {
    this.nome = nome
  }
}

const newClass2 = new newArrow("não");
console.log(newClass2.nome);