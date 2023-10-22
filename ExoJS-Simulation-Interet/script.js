//deposit = Number(document.getElementById('deposit_input).value);


function CalculProfit (deposit, rate, threshold) {

deposit = Number(document.querySelector('#deposit_input').value); // je recupère, et je stocke dans deposit l'iD de l'INPUT.
rate = Number(document.querySelector('#rate_input').value);
threshold = Number(document.querySelector('#threshold_input').value);
    
    let nbAnnee = 0;                                  // J'initialise mon nb d'année à 0.
    let solde = deposit;                    // Au départ, le solde est = au 1er DEPOT. <=========== IMPORTANT !

    do {                                   // Je commence à agir...
        nbAnnee++;                         // Je fais mes ITERATIONS d'ANNEES. NB d'ANNEE plsu elle meme.
        solde += (solde * rate) / 100;     // SOLDE = SOLDE * RATE, SOLDE S1 = SOLDE S2* RATE,...
    } while (solde < threshold);           // TANT QUE MON SOLDE S + S1*rate, ... < THRESHOLD.

   return document.getElementById('resultat_ouput').innerHTML = `ninaininainainainaianinininnain  ${nbAnnee}`;

    // return nbAnnee;                        // Je retourne le nombre d'année: LE RETURN STOPPE LA FONCTION !.
    };
console.log(CalculProfit());


 //console.log(resultatOuput.innerHTML = `Vous en avez pour toutes ces années avant de gagner qq copecs ${nbAnnee}`); 
