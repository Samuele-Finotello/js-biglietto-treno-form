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

const assegnaPosto = (chilometri) => {
  min = 0;
  max = 0;
  if (chilometri < 20) {
    seat = Math.floor(Math.random() * 100) + 1;
  }
  else if (chilometri < 40) {
    min = 100;
    max = 200;
    seat = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else if (chilometri < 60) {
    min = 200;
    max = 300;
    seat = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else if (chilometri < 80) {
    min = 300;
    max = 400;
    seat = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    min = 400;
    max = 500;
    seat = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(seat)
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
  assegnaPosto(km);

  const showName = document.getElementById('show-name');
  const showSeat = document.getElementById('show-seat');
  const showDateIn = document.getElementById('show-dateIn');
  const showTimeIn = document.getElementById('show-timeIn');
  const showDateOut = document.getElementById('show-dateOut');
  const showTimeOut = document.getElementById('show-timeOut');
  const showKm = document.getElementById('show-km');
  const showSconto = document.getElementById('show-sconto');
  const showPrice = document.getElementById('show-price');
  const showTotalPrice = document.getElementById('show-totalPrice');

})


