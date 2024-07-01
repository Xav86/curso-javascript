const myArrayObj = [
    {
      nome: "Dener",
      sobreNome: "Troquatte",
    },
    {
      nome: "Nay",
      sobreNome: "Troquatte",
    },
    {
      nome: "José",
      sobreNome: "Troquatte",
    },
];

myArrayObj.forEach((item, index) => {
    if (item.nome === 'Nay') {
        return console.log("Bom dia")
    }
    console.log(index, item);
});