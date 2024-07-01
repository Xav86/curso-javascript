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
    {
        nome: "José 1",
        sobreNome: "Troquatte",
    },
    {
        nome: "José 2",
        sobreNome: "Troquatte",
    },
    {
        nome: "José 3",
        sobreNome: "Troquatte",
    },
];

for (let item of myArrayObj) {
    if (item.nome === "Dener") {
        console.log("Bom dia");
        continue
    }

    if (item.nome === "José 1") {
        console.log("Nome encontrado")
        break;
    }

    console.log(item);
}