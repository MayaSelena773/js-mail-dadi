
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.


//Creazione numeri random per utente e pc
const userNumber = Math.floor(Math.random() * 6) + 1;
const pcNumber = Math.floor(Math.random() * 6) + 1;
 
//Stampa in pagina
document.getElementById('user-number').innerHTML = userNumber;
document.getElementById('pc-number').innerHTML = pcNumber;

//Dichiarazione vincitore

if(userNumber > pcNumber) {

    alert('YOU WIN!');

}else if(userNumber < pcNumber) {

    alert('YOU LOST...');
}
    
