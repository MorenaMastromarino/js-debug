/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {      
    console.log(i);
}

// 1- Ciclo for con la variabile i che parte da 0 e incrementa ogni volta di uno
// 2- No
// 3- Sì, partendo la variabile da 0, la condizione i > 5 non è soddisfatta quindi il ciclo non parte (sostituisco la condizione con < )



// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {  
        return num + 5;
    }
    return num;
}

// 1- Crea una funzione che ha un numero come parametro, restituisce lo stesso numero se questo è dispari, il numero + 5 se è pari
// 2- Sì, con un solo = si assegna un valore, per confrontarlo devo usare == o === (confronto anche il tipo)
// 3- No



// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}


// 1- Crea una funzione che stampa in console il valore di una variabile con un ciclo for da 0 a 4 che aumenta ogni volta di 1
// 2- Sì, nelle condizioni del ciclo for viene usata , al posto di ;
// 3- No


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1- Funzione che dato un array di numeri, aggiunge ad un altro array solo quelli pari
// 2- Sì, viene usato ; dopo l'ultima condizione nel ciclo for
//        c'è un solo = nell'if
//        c'è un ; dopo la condizione fra parentesi dell'if
// 3- Nelle condizioni del ciclo for essendoci sia < che -1 dopo numbers.length non cicla tutto l'array ma si ferma un numero prima;
//    nella condizione dell'if il confronto per vedere se il numero è pari viene fatto sull'array e non sui singoli numeri perchè manca l'indice;
//    nell'array dei numeri pari viene pushato l'indice e non il numero corrispondente a quell'indice;
//    il return dell'array va fatto alla fine, dopo il ciclo for altrimenti dopo aver ciclato il primo numero la funzione si interrompe