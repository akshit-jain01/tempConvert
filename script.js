const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempTypefrom = document.querySelector("#temp-type-from");
const tempTypeto = document.querySelector("#temp-type-to");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertTemp();
});

function convertTemp() {

    let inputValue = parseFloat(degree.value);
    if (tempTypefrom.value === "celsius" && tempTypeto.value === "kelvin") {
        const CelsiusToKelvin = inputValue + 273.15;
        celsiusElem.innerHTML = `${CelsiusToKelvin} K`;
    } else if (tempTypefrom.value === "fahrenheit" && tempTypeto.value === "celsius") {
        const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
        celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (tempTypefrom.value === "kelvin" && tempTypeto.value === "celsius") {
        const KelvinToCelsius = inputValue - 273.15;
        celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    } else if (tempTypefrom.value === "celsius" && tempTypeto.value === "fahrenheit") {
        const CelsiusToFahrenheit = inputValue * (9 / 5) + 32;
        celsiusElem.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;F`;
    } else if (tempTypefrom.value === "kelvin" && tempTypeto.value === "fahrenheit") {
        const KelvinToFahrenheit = (inputValue - 273.15) * (9 / 5) + 32
        celsiusElem.innerHTML = `${KelvinToFahrenheit.toFixed(3)} &deg;F`;
    } else if (tempTypefrom.value === "fahrenheit" && tempTypeto.value === "kelvin") {
        const FahrenheitToKelvin = (inputValue - 32) * (5 / 9) + 273.15;
        celsiusElem.innerHTML = `${FahrenheitToKelvin.toFixed(3)} K`;
    } else if (tempTypefrom.value === "fahrenheit" && tempTypeto.value === "fahrenheit") {
        const FahrenheitToFahrenheit = inputValue;
        celsiusElem.innerHTML = `${FahrenheitToFahrenheit} &deg;F`;
    } else if (tempTypefrom.value === "kelvin" && tempTypeto.value === "kelvin") {
        const KelvinToKelvin = inputValue;
        celsiusElem.innerHTML = `${KelvinToKelvin} K`;
    } else if (tempTypefrom.value === "celsius" && tempTypeto.value === "celsius") {
        CelsiusToCelsius = inputValue;
        celsiusElem.innerHTML = `${CelsiusToCelsius} &deg;c`;
    }

}