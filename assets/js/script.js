const calcolaBiglietto = (anni, chilometri) => {
  prezzoTotale = chilometri * 0.21;
  if (anni === 'minor') {
    sconto = prezzoTotale * 20 / 100;
    prezzoTotale = prezzoTotale - sconto;
  }
  else if (anni === 'over') {
    sconto = prezzoTotale * 40 / 100;
    prezzoTotale = prezzoTotale - sconto;
  }
  console.log(prezzoTotale.toFixed(2));
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
  if (dateOut !== '') {
    console.log(dateOut);
    console.log(timeOut);
  }
  calcolaBiglietto(eta, km);
})


