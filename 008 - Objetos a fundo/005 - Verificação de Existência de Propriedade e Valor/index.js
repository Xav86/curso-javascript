const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "nike"}, {nome: "adidas"}],
    secret: 123456,
    n: 55,
    link: { a: "a é igual á a", b: {c: "C é igual á C"}}
};

// hasOwnProperty | propertyName in Tenis
// Tenis.hasOwnProperty("tamanho")

// if(Tenis.hasOwnProperty("tamanho")){
//     console.log("Existe tamanho");
// } else {
//     console.log("Não existe tamanho");
// }

console.log(Tenis.hasOwnProperty("tamanho"))
console.log("tamanho" in Tenis)