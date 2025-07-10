const calcolaBiglietto = (anni, chilometri) => {
  prezzo = chilometri * 0.21;
  if (anni === 'Ho meno di 18 anni') {
    sconto = prezzo * 20 / 100;
    prezzoTotale = prezzo - sconto;
  }
  else if (anni === 'Ho 65 o più anni') {
    sconto = prezzo * 40 / 100;
    prezzoTotale = prezzo - sconto;
  }
}

const name = document.getElementById('name').value;
const km = document.getElementById('km').value;
const eta = document.getElementById('eta').value;
const dateIn = document.getElementById('dateIn').value;
const timeIn = document.getElementById('timeIn').value;
const dateOut = document.getElementById('dateOut').value;
const timeOut = document.getElementById('timeOut').value;
const create = document.getElementById('create').value;
const restart = document.getElementById('restart').value;
const resultForm = document.getElementById('resultForm').value;

