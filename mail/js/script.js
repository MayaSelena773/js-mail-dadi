
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

//Lista delle email con accesso consentito
const mailIncluded = ['maya.selena@gmail.com','matthew.bellamy@gmail.com','chester.bennington@gmail.com','jared.leto@gmail.com','amy.winehouse@gmail.com','alicia.keys@gmail.com']
console.log(mailIncluded)

//button per accedere
const logInButton = document.getElementById('log-in');
logInButton.addEventListener('click',
function() {

 const userMail = document.getElementById ('user-mail').value;
 
 //scorri la lista delle email
 for(let i = 0; i < mailIncluded.length; i++){

    //Se la mail è nella lista si apre un alert: accesso consentito
    if (userMail === mailIncluded[i]) {
        
        alert("Ciao! accesso consentito!");
     }
    }
}
)