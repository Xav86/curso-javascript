const Tenis = {
    tamanho: 45,
    estoque: true,
    // marcas: [
    //     {nome: "nike"}, {nome: "adidas"}
    // ]
    secret: 123456,
    // n: 55
    link: { a: "a é igual á a", b: {c: "C é igual á C"}}
};

// const {tamanho, estoque, marcas = "Não possui marca alguma!"} = Tenis;

// console.log(tamanho, estoque, marcas);

// const { secret: numero, n: avaliações = "nada"} = Tenis;

// console.log(secret);
// console.log(numero);
// console.log(avaliações);

const { 
    link: { a,
        b: { c } 
    }
} = Tenis;

console.log(a)