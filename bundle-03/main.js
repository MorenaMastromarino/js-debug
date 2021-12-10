/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) => auto.type.toLowerCase() === 'benzina');

const dieselCars = cars.filter( (auto) => {
    return auto.type.toLowerCase() === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type.toLowerCase() !== 'benzina' && auto.type.toLowerCase() !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);


/*
    1- Dato un array di oggetti, si creano tre diversi array che contengono solo alcuni degli oggetti dell'array iniziale in base a uno dei loro parametri (type)

    2- Mancava una , dopo uno degli oggetti dell'array cars
        quando crea array gasolineCars la freccia dell'arrow function era scritta al contrario
        nell'arrow function con le graffe (per dieselCars) ci vuole sempre il return

    3- Poichè il type negli array a volte è scritto con l'iniziale maiuscola, usiamo toLowerCase prima di confrontarlo
        per l'array otherCars il type deve essere contemporaneamente diverso da entrambi quindi ci vuole && e non ||

*/