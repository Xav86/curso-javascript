// function Name(name, sobrenome){
//     this.name = name;

//     this.sobreNome = () => {
//         const nomeCompleto = `${this.name} ${sobrenome}`;
//         return nomeCompleto;
//     }
// }

// const gustavo = new Name("Gustavo", " Gonçalves");
// const cabege = new Name("Calebe", " Arlan")

// console.log(gustavo.sobreNome());
// console.log(cabege.sobreNome());

// console.log(new Date());

// function Calculadora(num1, num2) {
//     this.soma = () => {
//         return `a soma é: ${num1 + num2}`;
//     }

//     this.subtracao = () => {
//         return `a subtração é: ${num1 - num2}`;
//     }
// }

function Calculadora() {
    this.soma = (num1, num2) => {
        return `a soma é: ${num1 + num2}`;
    }

    this.subtracao = (num1, num2) => {
        return `a subtração é: ${num1 - num2}`;
    }
}

// const calculadora = new Calculadora(1, 5);
const calculadora = new Calculadora();

console.log(calculadora.soma(2, 5));
console.log(calculadora.subtracao(1, 1));