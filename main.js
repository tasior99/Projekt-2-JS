const url = "http://api.nbp.pl/api/exchangerates/tables/a/today/";
const inputNumber = document.getElementById("givenValue");
const currency = document.getElementById("currency");
const btn = document.querySelector("#calculate");
const calculatedCurrency = document.getElementById("calculatedCurrency");

const selectCurrency = () => {
  axios.get(url).then((data) => {
    currency.innerText = "";
    const currencyList = data.data[0].rates;
    currencyList.map((value, index) => {
      if (
        value.code === "USD" ||
        value.code === "EUR" ||
        value.code === "CHF"
      ) {
        console.log(value);
        const filteredCode = document.createElement("option");
        filteredCode.innerText = value.code;
        filteredCode.value = value.mid;
        currency.appendChild(filteredCode);
        console.log(filteredCode);
      }
    });
  });
};
selectCurrency();
btn.addEventListener("click", () => {
  const inputValue = Number(inputNumber.value);
  const currencyValue = currency.value;
  const polishCurrency = "PLN";
  const calculatedCurrencyValue = inputValue * currencyValue;
  calculatedCurrency.innerText = calculatedCurrencyValue + polishCurrency;
  console.log(calculatedCurrency);
});
