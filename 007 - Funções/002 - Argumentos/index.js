/*
function soma(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    
    return "Dados enviados inválidos!";

}

console.log(Number((soma(soma(23,654.56), soma(31.67,456.2)).toFixed(2))));
*/

// function subtracao() {
//     return arguments;
// }

const subtracao = (num1 = NaN, num2 = NaN) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 - num2;
    }
}

console.log(subtracao(1, 2));