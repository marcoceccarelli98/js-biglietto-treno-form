'use strict';

// INPUTS
// - Const definition euro/kilometers (0.21 € al km) //priceKm
const priceKm = 0.21;
// - Const definition minor discount (20%) //saleMinor 
const saleMinor = 20;
// - Const definition Over 65 discount (20%) //saleOver65 
const saleOver65 = 40;

let userAge = 0;
let kmToTravel = 0;
let userName = '';
let totalPrice = 0;

const elementNameInput = document.getElementById('name-input');
const elementAge = document.getElementById('age');
const elementKm = document.getElementById('km');
const buttonGenerate = document.getElementById('generate');
const buttonAbort = document.getElementById('abort');

// RESET BORDER FUNCTION
function resetBorder() {
    elementNameInput.classList.remove('border-danger');
    elementKm.classList.remove('border-danger');
    elementAge.classList.remove('border-danger');
}

console.log(parseInt(elementKm.value));

// ----------------
// BUTTON GENERATE
// ----------------
buttonGenerate.addEventListener('click', function () {

    // if(isNaN(parseInt(elementKm.value)) || parseInt(elementKm.value) !== 0 ){
    // let kmInputOk = true; 
    // }

    const intKm = parseInt(elementKm.value);
    const intAge = parseInt(elementAge.value);


    let nameInputOk = (elementNameInput.value !== "");
    let kmInputOk = (!isNaN(intKm) && intKm !== 0);
    let ageInputOk = (!isNaN(intAge) && intAge !== 0);

    if (nameInputOk && kmInputOk && ageInputOk) {

        // RESET RED BORDER
        resetBorder();
        // elementNameInput.classList.remove('border-danger');
        // elementKm.classList.remove('border-danger');
        // elementAge.classList.remove('border-danger');

        let ticketType = 'Biglietto Standard';
        const cpCode = Math.floor(Math.random() * 99999);

        // - Get value from name input //kmToTravel
        userName = elementNameInput.value;

        // - Get value from age input //userAge
        userAge = Number(elementAge.value);

        // - Get value from km input  //kmToTravel
        kmToTravel = Number(elementKm.value);

        // - Calculate total price (km * priceKm) //totalPrice 
        totalPrice = kmToTravel * priceKm;

        // - Calculate Discounts
        //     - 20% for minor
        //     - 40% for over 65
        if (userAge < 18) {
            totalPrice = totalPrice - (totalPrice * (saleMinor / 100));
            ticketType = 'Sconto Minori';
        }
        else if (userAge > 65) {
            totalPrice = (totalPrice / 100) * (100 - saleOver65);
            ticketType = 'Sconto Over 65';
        }

        // TICKET VISUALIZATION
        const ticketTitle = document.getElementById('ticket-title');
        const ticket = document.getElementById('ticket');

        ticketTitle.classList.remove('d-none');
        ticket.classList.remove('d-none');

        document.getElementById('name').innerHTML = userName;
        document.getElementById('offer').innerHTML = ticketType;
        document.getElementById('cp').innerHTML = cpCode;
        document.getElementById('totalprice').innerHTML = (Math.round(totalPrice * 100) / 100 + ' €');


    } else { // ERROR MESSAGE

        // RESET RED BORDER
        resetBorder();

        if (!nameInputOk) {
            elementNameInput.classList.add('border-danger');
        }
        if (!kmInputOk) {
            elementKm.classList.add('border-danger');
        }
        if (!ageInputOk) {
            elementAge.classList.add('border-danger');
        }
        console.log(parseInt(elementKm.value));
    }

});

// ----------------
// BUTTON ABORT
// ----------------
buttonAbort.addEventListener('click', function () {
    elementNameInput.value = '';
    elementKm.value = '';
    elementAge.value = '';
});

// OUTPUT
document.getElementById('pricekm').innerHTML = priceKm;
document.getElementById('minorsale').innerHTML = saleMinor;
document.getElementById('over65sale').innerHTML = saleOver65;
