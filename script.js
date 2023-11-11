/*Chiediamo all'utente i km che vuole percorrere e l'età*/
const kmPercorsi = parseFloat (prompt("Inserisci qui i KM previsti da percorrere"));
const etaUtente = parseInt (prompt("Inserisci l'età del viaggiatore"));

/*Prezzo biglietto intero*/
 const prezzoBiglietto = kmPercorsi * 0.21;
 console.log (prezzoBiglietto);

 let sconto;

 /*Calcolo dello sconto*/
 if (etaUtente < 18) {
    sconto = prezzoBiglietto * 20 / 100;
    prezzoBiglietto -= sconto;
} 
else if (etaUtente > 65) {
    sconto = prezzoBiglietto * 40 / 100;
    prezzoBiglietto -= sconto;
}

console.log (prezzoBiglietto);

prezzoBiglietto.toFixed(2);

/*Stampa il prezzo finale in pagina*/
document.getElementById("output").innerHTML = "Il prezzo del biglietto è " + prezzoBiglietto + "€";