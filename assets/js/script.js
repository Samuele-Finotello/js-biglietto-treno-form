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
  return prezzoTotale.toFixed(2);
}

const assegnaPosto = (chilometri) => {
  min = 0;
  max = 0;
  if (chilometri === '') {
    seat = '/';
    return seat;
  }
  else if (chilometri < 20) {
    sedile = Math.floor(Math.random() * 100) + 1;
    if (sedile <= 50) {
      seat = `Carrozza: 1 Posto: ${sedile}`;
    }
    else {
      seat = `Carrozza: 2 Posto: ${sedile}`;
    }
  }
  else if (chilometri < 40) {
    min = 100;
    max = 200;
    sedile = Math.floor(Math.random() * (max - min + 1)) + min;
    if (sedile <= 150) {
      seat = `Carrozza: 3 Posto: ${sedile}`;
    }
    else {
      seat = `Carrozza: 4 Posto: ${sedile}`;
    }
  }
  else if (chilometri < 60) {
    min = 200;
    max = 300;
    sedile = Math.floor(Math.random() * (max - min + 1)) + min;
    if (sedile <= 250) {
      seat = `Carrozza: 5 Posto: ${sedile}`;
    }
    else {
      seat = `Carrozza: 6 Posto: ${sedile}`;
    }
  }
  else if (chilometri < 80) {
    min = 300;
    max = 400;
    sedile = Math.floor(Math.random() * (max - min + 1)) + min;
    if (sedile <= 350) {
      seat = `Carrozza: 7 Posto: ${sedile}`;
    }
    else {
      seat = `Carrozza: 8 Posto: ${sedile}`;
    }
  }
  else {
    min = 400;
    max = 500;
    sedile = Math.floor(Math.random() * (max - min + 1)) + min;
    if (sedile <= 450) {
      seat = `Carrozza: 9 Posto: ${sedile}`;
    }
    else {
      seat = `Carrozza: 10 Posto: ${sedile}`;
    }
  }
  lettera = Math.floor(Math.random() * 4) + 1;
  if (lettera === 1) {
    seat = `${seat} A`
  }
  else if (lettera === 2) {
    seat = `${seat} B`
  }
  else if (lettera === 3) {
    seat = `${seat} C`
  }
  else {
    seat = `${seat} D`
  }

  console.log(seat);
  return seat;
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
  const showTotalPrice = document.getElementById('show-totalPrice');

  if (name !== '') {
    showName.innerHTML = name;
  }
  else {
    showName.innerHTML = '/';
  }

  showSeat.innerHTML = seat;

  if (dateIn !== '') {
    showDateIn.innerHTML = dateIn;
    showTimeIn.innerHTML = timeIn;
  }
  else {
    showDateIn.innerHTML = '/';
    showTimeIn.innerHTML = '/';
  }

  if (dateOut !== '') {
    showDateOut.innerHTML = dateOut;
    showTimeOut.innerHTML = timeOut;
  }
  else {
    showDateOut.innerHTML = '/';
    showTimeOut.innerHTML = '/';
  }

  if (km !== '') {
    showKm.innerHTML = km;
  }
  else {
    showKm.innerHTML = '/';
  }

  if (eta === 'minor') {
    showSconto.innerHTML = '20%';
  }
  else if (eta === 'over') {
    showSconto.innerHTML = '40%';
  }
  else {
    showSconto.innerHTML = '/';
  }

  showTotalPrice.innerHTML = `€ ${prezzoTotale.toFixed(2)}`;
})


