/*
    Objeto: Tenis (propriedade) "cadarço", "palmilha"
    Objeto: Celular (propriedade)
    Objeto Drone (propriedade)

    Propriedades / Atributos / Funcionalidades
*/

console.log(
    {
        // tenis: ["cardaço", "palmilha"]
        tenis: [
            {
                preco: 150,
                disponivel: true,
                estoque: 150,
                cardaco: {
                    cor: "azul",
                    tamanho: "G",
                },
                palmilha: {
                    tamanho: 40,
                    cor: "roxo",
                },
            },
            {
                preco: 50,
                disponivel: true,
                estoque: 5,
                cardaco: {
                    cor: "azul",
                    tamanho: "G",
                },
                palmilha: {
                    tamanho: 40,
                    cor: "roxo",
                },
            },
        ],
    }
);

console.log([
    {
        tenis: {
            preco: 150,
            disponivel: true,
            estoque: 150,
            cardaco: {
                cor: "azul",
                tamanho: "G",
            },
            palmilha: {
                tamanho: 40,
                cor: "roxo",
            },
        },
    },
    {
        celular: {
            marca: "Xiaomi", 
        }
    }
]);