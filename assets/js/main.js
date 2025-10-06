

// inserisco dati 

const younger_age = 18
console.log(younger_age);

const over_age = 65
console.log(over_age);




// finestra per inserire età

const age = Number(prompt('inserire età'))
console.log(age);


// finestra per inserire km

const km = Number(prompt('inserisci chilometri da percorrere'))
console.log(km);

// calcolo prezzo intero del biglietto senza sconto
let ticket_cost = 0.21 * km
console.log(ticket_cost);

//  decidere se applicare lo sconto e a quali condizioni

if (age < younger_age) {
    // sconto d'applicare agli under 18
    ticket_cost = ticket_cost - ticket_cost * 20 / 100
    
} else if (age > over_age) {
    // sconto d'applicare agli over 65
    ticket_cost = ticket_cost - ticket_cost * 40 / 100 
} 
console.log(ticket_cost);

// aggiunta parte per mettere due cifre decimali
let prezzoFormattato = ticket_cost.toFixed(2);
console.log(prezzoFormattato);





