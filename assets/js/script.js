const calcolaBiglietto = (anni, chilometri) => {
  prezzoTotale = chilometri * 0.21;
  if (anni === 'Ho meno di 18 anni') {
    sconto = prezzoTotale * 20 / 100;
    prezzoTotale = prezzoTotale - sconto;
  }
  else if (anni === 'Ho 65 o più anni') {
    sconto = prezzoTotale * 40 / 100;
    prezzoTotale = prezzoTotale - sconto;
  }
  return prezzoTotale;
}

const create = document.getElementById('create');

create.addEventListener("click", function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const km = document.getElementById('km').value;
  const eta = document.getElementById('eta').value;
  const dateIn = document.getElementById('dateIn').value;
  const timeIn = document.getElementById('timeIn').value;
  const dateOut = document.getElementById('dateOut').value;
  const timeOut = document.getElementById('timeOut').value;
  console.log(name);
  console.log(km);
  console.log(eta);
  console.log(dateIn);
  console.log(timeIn);
  console.log(dateOut);
  console.log(timeOut);
})

const resultForm = document.getElementById('resultForm').value;

