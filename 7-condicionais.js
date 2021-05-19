console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const estaAcompanhada = false;
const idadeComprador = 15;

if (idadeComprador >= 18) {
    console.log('Comprador maior de idade');
    console.log("Destinos possíveis:");
    //console.log(salvador, saoPaulo, rioDeJaneiro)
    console.log(listaDeDestinos);
} else {
    if (estaAcompanhada == true) {
        console.log('Comprador está acompanhado');
    } else {
        console.log('Não é maior de idade e não posso vender');
    }
}