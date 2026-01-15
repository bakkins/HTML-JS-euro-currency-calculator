const baseRates = {
    EUR: { EUR: 1.00, GBP: 0.86, USD: 1.09, CHF: 1.06, SEK: 11.45 },
    GBP: { EUR: 1.16, GBP: 1.00, USD: 1.27, CHF: 1.23, SEK: 13.30 },
    USD: { EUR: 0.92, GBP: 0.79, USD: 1.00, CHF: 0.97, SEK: 10.48 },
    CHF: { EUR: 0.94, GBP: 0.81, USD: 1.03, CHF: 1.00, SEK: 10.80 },
    SEK: { EUR: 0.087, GBP: 0.075, USD: 0.095, CHF: 0.093, SEK: 1.00 }
};

const currencySelector = document.getElementById("currency-select")
const eurInput = document.getElementById("eur")
const convertButton = document.querySelector("button")
const resultText = document.querySelector("h2")

convertButton.addEventListener("click", convert)

function convert() {
    let eurValue = parseFloat(eurInput.value)
    resultText.innerHTML = `${eurValue} EUR = ${baseRates.EUR[currencySelector.value] * eurValue} `
    eurInput.value = ""
    eurInput.focus
}