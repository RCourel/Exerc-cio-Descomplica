// Definição de Valores
let Bebida = "Bebida a Ser Selecionada (Escrita Nesta String)"
let valor;

// Escolha da bebida usando Switch
switch (Bebida) {
    case "Café":
        valor = 10.50;
        break
    case "Leite":
        valor = 7.50;
        break
    case "Chá":
        valor = 5.00;
        break
    default:

//Resposta caso não estiver dentro das opções.
 console.log("Estamos sem, " + Bebida + " no momento, por favor escolha entre Café, Leite ou Chá.");
    return;

}

//Resposta Prevista
console.log(`Você escolheu ${Bebida}. O valor a ser pago é R$${valor.toFixed(2)}.`);


