const currencyElement_one = document.getElementById("currency-one");
const currencyElement_two = document.getElementById("currency-two");
const amountElement_one = document.getElementById("amount-one");
const amountElement_two = document.getElementById("amount-two");

const rateElement = document.getElementById("rate");
const swapElement = document.getElementById("swap");

function calculate() {
  console.log("nigga");
  const currency_one = currencyElement_one.value;
  const currency_two = currencyElement_two.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/0641e732e31769a14c3824e2/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      const conversion_rates = data.conversion_rates[currency_two];

      rateElement.innerText = `1${currency_one} = ${conversion_rates} ${currency_two}`;

      amountElement_two.value = (
        amountElement_one.value * conversion_rates
      ).toFixed(2);
    });
}

currencyElement_one.addEventListener("change", calculate);
amountElement_one.addEventListener("input", calculate);
currencyElement_two.addEventListener("change", calculate);
amountElement_two.addEventListener("input", calculate);

swapElement.addEventListener("click", () => {
  const temp = currencyElement_one.value;
  currencyElement_one.value = currencyElement_two.value;
  currencyElement_two.value = temp;
  currencyElement_one.value,
    (currencyElement_two.value = currencyElement_two.value),
    currencyElement_one.value;
  calculate();
});

calculate();
