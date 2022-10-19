let nome = prompt('Scrivi il tuo nome!');
let cognome = prompt('Scrivi il tuo cognome!');
let colore = prompt('Scrivi il tuo colore preferito!');

let nickname= nome + cognome + colore + '22'
document.getElementById('nickname').innerHTML = nickname;