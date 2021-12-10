/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    console.log(message);
}
checkAge();

/*
 * 1- Funzione che stampa in console un messaggio diverso in base al valore dell'età (myAge)
 * 2- No
 * 3- Il valore di message viene modificato quindi è una variabile (let), non una costante
 * non ha senso controllare il valore di una costante con l'if poichè 32 sarà sempre >18, myAge potrebbe essere una variabile passata come parametro della funzione        
*/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

/*
 * 1- Funzione che dato un array stampa in console la sua lunghezza
 * 2- Sì, era sbagliata la sintassi di length
 * 3- No
*/

// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/**
 * 1- Funzione che chiede all'utente un numero, aggiunge 12 al numero e stampa somma in console
 * 2- No
 * 3- Senza parseInt dal prompt ottengo una stringa che quindi nella somma del passaggio successivo si concatena a 12
*/


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/**
 * 1- Funzione che dato un array di mail chiede la mail all'utente, se è contenuta nell'array stampa in console un messaggio altrimenti ne stampa un altro
 * 2- No
 * 3- Sì, grantAccess dovrebbe essere una variabile booleana ma i valori vengono assegnati come stringhe
*/


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = 'true';  
        }
            
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();

/**
 * 1- fa la stessa cosa della funzione precedente ma controlla ogni mail ciclando l'array e le confronta solo se quella inserita ha più di 5 caratteri
 * 2- Sì, mancava la chiusura di una graffa
 * 3- No, in questo caso alla variabile grantAccess viene prima assegnato false, poi nell'if le viene assegnato come valore una stringa ma nel controllo dell'if successivo viene controllato che sia diversa da zero quindi funziona perchè se è false allora è uguale a zero, se è una stringa è diversa da zero
*/





























