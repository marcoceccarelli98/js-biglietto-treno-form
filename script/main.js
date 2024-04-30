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
let totalPrice = 0;

const elementAge = document.getElementById('age');
const elementKm = document.getElementById('km');
const buttonGenerate = document.getElementById('generate');

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

    let kmInputOk = (!isNaN(intKm) && intKm !== 0);
    let ageInputOk = (!isNaN(intAge) && intAge !== 0);

    if (kmInputOk && ageInputOk) {

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
        }
        else if (userAge > 65) {
            totalPrice = (totalPrice / 100) * (100 - saleOver65);
        }


        console.log(Math.round(totalPrice * 100) / 100 + ' €');


    }
});

