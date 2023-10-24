//deposit = Number(document.getElementById('deposit_input).value);
// LE PARAMETRE EVENT surveilles les EVENEMENTS et le ONSUBMIT dans le HtML en est UN. IL Y EST AUSSI ENTRE ()

function CalculProfit(event) { // CE PARAMETRE dans le fonction : les autres sont donnés par l'input, et leur assigne cette valeur avec QUERYSELECTOR.
    event.preventDefault()    //permet de prévenir les actions par défaut du FORM, en l'occurence : recharger sans cesse les pages et appeler des URL.

    const deposit = Number(document.querySelector('#deposit_input').value); // je recupère, et je stocke dans "deposit" la VALEUR de l'iD de l'INPUT.
    const rate = Number(document.querySelector('#rate_input').value);       // idem pour les suivants.
    const threshold = Number(document.querySelector('#threshold_input').value);
    
    let nbAnnee = 0;                                  // J'initialise mon nb d'année à 0.
    let solde = deposit;                    // Au départ, le solde est = au 1er DEPOT. <=========== IMPORTANT !

    do {                                   // Je commence à agir...
        nbAnnee++;                         // Je fais mes ITERATIONS d'ANNEES. NB d'ANNEE plsu elle meme.
        solde += (solde * rate) / 100;     // SOLDE = SOLDE * RATE, SOLDE S1 = SOLDE S2* RATE,...
    } while (solde < threshold);           // TANT QUE MON SOLDE S + S1*rate, ... < THRESHOLD.

   return document.getElementById('resultat_ouput').innerHTML = `${nbAnnee} ANS`;

// Je retourne NBANNEE : LE RETURN STOPPE LA FONCTION !
// donc je vais chercher l'endroit du html ou je dois l'afficher, je le prend et je lui met avec INNERHTML le valeur de la var NBANNEE
};






/*
 const calculProfit = (event) => {
    event.preventDefault()
  
    const deposit = Number(document.querySelector('#deposit_input').value)
    const rate = Number(document.querySelector('#rate_input').value)
    const threshold = Number(document.querySelector('#threshold_input').value)
  
    let nbAnnee = 0
    let solde = deposit
  
    while (solde < threshold) {
      nbAnnee++
      solde += (solde * rate) / 100
    }
  
    document.getElementById('resultat_ouput').innerHTML = `${nbAnnee}`
}
*/