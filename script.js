const currencyOne = document.querySelector("#currency-one");
const inputOne = document.querySelector("#input-one");
const currencyTwo = document.querySelector("#currency-two");
const inputTwo = document.querySelector("#input-two");

const rate = document.querySelector("#rate");
const swap = document.querySelector("#swap");

function calculate() {
    const one =  currencyOne.value;
    const two = currencyTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then( res => res.json())
    .then( data => {
        //console.log(data);
        const price = data.rates[two];
        rate.innerHTML = `1 ${one} = ${price} ${two}`;
        inputTwo.value = (inputOne.value * price).toFixed(3)
    })
}

calculate();

//Event listeners 
currencyOne.addEventListener("change",calculate);
inputOne.addEventListener("input",calculate);
currencyTwo.addEventListener("change",calculate);
inputTwo.addEventListener("input",calculate);

swap.addEventListener('click', () => {
    const isSwap = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = isSwap;
    calculate();
});

