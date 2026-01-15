const baseRates = {
    EUR: { EUR: 1.00, GBP: 0.86, USD: 1.09, CHF: 1.06, SEK: 11.45 },
    GBP: { EUR: 1.16, GBP: 1.00, USD: 1.27, CHF: 1.23, SEK: 13.30 },
    USD: { EUR: 0.92, GBP: 0.79, USD: 1.00, CHF: 0.97, SEK: 10.48 },
    CHF: { EUR: 0.94, GBP: 0.81, USD: 1.03, CHF: 1.00, SEK: 10.80 },
    SEK: { EUR: 0.087, GBP: 0.075, USD: 0.095, CHF: 0.093, SEK: 1.00 }
};

const currencySellSelector = document.getElementById("currency-sell-select")
const currencyBuySelector = document.getElementById("currency-buy-select")
const sellInput = document.getElementById("sell")
const convertButton = document.querySelector("button")
const resultText = document.querySelector("h2")

convertButton.addEventListener("click", convert)

sellInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        convert();
    }
});

function convert() {
    if (sellInput.value === ""){
        alert("Invalid input")
        return;
    }
    else {
        let sellValue = parseFloat(sellInput.value)

        resultText.innerHTML = `${sellValue} ${currencySellSelector.value} = ${baseRates[currencySellSelector.value][currencyBuySelector.value] * sellValue} ${currencyBuySelector.value} `
        sellInput.value = ""
        sellInput.focus()
    }
}