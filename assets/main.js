var annoCorrente2Cifre = new Date().getFullYear().toString().slice(-2);

var nomeUtente = prompt("Qual é il tuo nome?");

var cognomeUtente = prompt("Qual é il tuo cognome?");

var colorePreferitoUtente = prompt("Qual é il tuo colore preferito?");

document.getElementById('password').innerHTML =  nomeUtente + cognomeUtente + colorePreferitoUtente + annoCorrente2Cifre;
