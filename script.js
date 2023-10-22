//deposit = Number(document.getElementById('deposit_input).value);


function CalculProfit(event) {
    event.preventDefault()    //permet de prévenir les actions par défaut du FORM, en l'occurence.
    const deposit = Number(document.querySelector('#deposit_input').value); // je recupère, et je stocke dans deposit l'iD de l'INPUT.
    const rate = Number(document.querySelector('#rate_input').value);
    const threshold = Number(document.querySelector('#threshold_input').value);
    
    let nbAnnee = 0;                                  // J'initialise mon nb d'année à 0.
    let solde = deposit;                    // Au départ, le solde est = au 1er DEPOT. <=========== IMPORTANT !

    do {                                   // Je commence à agir...
        nbAnnee++;                         // Je fais mes ITERATIONS d'ANNEES. NB d'ANNEE plsu elle meme.
        solde += (solde * rate) / 100;     // SOLDE = SOLDE * RATE, SOLDE S1 = SOLDE S2* RATE,...
    } while (solde < threshold);           // TANT QUE MON SOLDE S + S1*rate, ... < THRESHOLD.

   return document.getElementById('resultat_ouput').innerHTML = `${nbAnnee}`;

    // return nbAnnee;                        // Je retourne le nombre d'année: LE RETURN STOPPE LA FONCTION !.
};







 //console.log(resultatOuput.innerHTML = `Vous en avez pour toutes ces années avant de gagner qq copecs ${nbAnnee}`); 


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