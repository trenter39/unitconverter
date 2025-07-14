const categorySelect = document.getElementById("categorySelect");
const forms = document.querySelectorAll(".form-section");
const titleText = document.getElementById("titleText");
const resultForm = document.getElementById("resultForm");
const resultText = document.getElementById("resultText");

const lengthValue = document.getElementById("lengthValue");
const lengthFrom = document.getElementById("lengthFrom");
const lengthTo = document.getElementById("lengthTo");

const massValue = document.getElementById("massValue");
const massFrom = document.getElementById("massFrom");
const massTo = document.getElementById("massTo");

const temperatureValue = document.getElementById("tempValue");
const tempFrom = document.getElementById("tempFrom");
const tempTo = document.getElementById("tempTo");

const resetButton = document.getElementById("resetButton");

titleText.addEventListener('click', () => {
    location.reload();
});

resetButton.addEventListener('click', showSelectedForm);
categorySelect.addEventListener("change", showSelectedForm);

function showSelectedForm() {
    const selectedID = categorySelect.value;
    resultForm.style.display = "none";
    forms.forEach(form => {
        form.style.display = form.id === selectedID ? "flex" : "none";
    });
}

const conversionRates = {
    kilometer: {
        meter: val => val * 1000,
        centimeter: val => val * 100000,
        millimeter: val => val * 1e+6,
        mile: val => val / 1.609,
        yard: val => val * 1094,
        foot: val => val * 3281,
        inch: val => val * 39370,
    },
    meter: {
        kilometer: val => val / 1000,
        centimeter: val => val * 100,
        millimeter: val => val * 1000,
        mile: val => val / 1609,
        yard: val => val * 1.094,
        foot: val => val * 3.281,
        inch: val => val * 39.37,
    },
    centimeter: {
        kilometer: val => val / 100000,
        meter: val => val / 100,
        millimeter: val => val * 10,
        mile: val => val / 160900,
        yard: val => val / 91.44,
        foot: val => val / 30.48,
        inch: val => val / 2.54,
    },
    millimeter: {
        kilometer: val => val / 1e+6,
        meter: val => val / 1000,
        centimeter: val => val / 10,
        mile: val => val / 1.609e+6,
        yard: val => val / 914.4,
        foot: val => val / 304.8,
        inch: val => val / 25.4,
    },
    mile: {
        kilometer: val => val * 1.609,
        meter: val => val * 1609,
        centimeter: val => val * 160900,
        millimeter: val => val * 1.609e+6,
        yard: val => val * 1760,
        foot: val => val * 5280,
        inch: val => val * 63360,
    },
    yard: {
        kilometer: val => val / 1094,
        meter: val => val / 1.094,
        centimeter: val => val * 91.44,
        millimeter: val => val * 914.4,
        mile: val => val / 1760,
        foot: val => val * 3,
        inch: val => val * 36,
    },
    foot: {
        kilometer: val => val / 3281,
        meter: val => val / 3.281,
        centimeter: val => val * 30.48,
        millimeter: val => val * 304.8,
        mile: val => val / 5280,
        yard: val => val / 3,
        inch: val => val * 12,
    },
    inch: {
        kilometer: val => val / 39370,
        meter: val => val / 39.37,
        centimeter: val => val * 2.54,
        millimeter: val => val * 25.4,
        mile: val => val / 63360,
        yard: val => val / 36,
        foot: val => val / 12,
    },
    tonne: {
        kilogram: val => val * 1000,
        gram: val => val * 1e+6,
        milligram: val => val * 1e+9,
        pound: val => val * 2205,
        ounce: val => val * 35270,
    },
    kilogram: {
        tonne: val => val / 1000,
        gram: val => val * 1000,
        milligram: val => val * 1e+6,
        pound: val => val * 2.205,
        ounce: val => val * 35.274,
    },
    gram: {
        tonne: val => val / 1e+6,
        kilogram: val => val / 1000,
        milligram: val => val * 1000,
        pound: val => val / 453.6,
        ounce: val => val / 28.35,
    },
    milligram: {
        tonne: val => val / 1e+9,
        kilogram: val => val / 1e+6,
        gram: val => val / 1000,
        pound: val => val / 453600,
        ounce: val => val / 28350,
    },
    pound: {
        tonne: val => val / 2205,
        kilogram: val => val / 2.205,
        gram: val => val * 453.6,
        milligram: val => val * 453600,
        ounce: val => val * 16,
    },
    ounce: {
        tonne: val => val / 35270,
        kilogram: val => val / 35.274,
        gram: val => val * 28.35,
        milligram: val => val * 28350,
        pound: val => val / 16,
    },
    celsius: {
        fahrenheit: val => (val * 9 / 5) + 32,
        kelvin: val => val + 273.15,
    },
    fahrenheit: {
        celsius: val => (val - 32) * 5 / 9,
        kelvin: val => (val - 32) * 5 / 9 + 273.15,
    },
    kelvin: {
        celsius: val => val - 273.15,
        fahrenheit: val => (val - 273.15) * 9 / 5 + 32,
    }
}

document.querySelectorAll(".convertButton").forEach(button => {
    button.addEventListener('click', () => {
        const form = button.closest(".form-section");
        if (!form || form.style.display === "none") return;
        if (form.id === "lengthForm") {
            const value = lengthValue.value;
            const fromUnit = lengthFrom.value;
            const shortUnitFrom = lengthFrom
                .options[lengthFrom.selectedIndex]
                .dataset.short;
            const toUnit = lengthTo.value;
            const shortUnitTo = lengthTo
                .options[lengthTo.selectedIndex]
                .dataset.short;
            converter(value, fromUnit, toUnit,
                shortUnitFrom, shortUnitTo, "lengthForm");
        } else if (form.id === "massForm") {
            const value = massValue.value;
            const fromUnit = massFrom.value;
            const shortUnitFrom = massFrom
                .options[massFrom.selectedIndex]
                .dataset.short;
            const toUnit = massTo.value;
            const shortUnitTo = massTo
                .options[massTo.selectedIndex]
                .dataset.short;
            converter(value, fromUnit, toUnit, shortUnitFrom, shortUnitTo, "massForm");
        } else if (form.id === "temperatureForm") {
            const value = temperatureValue.value;
            const fromUnit = tempFrom.value;
            const shortUnitFrom = tempFrom
                .options[tempFrom.selectedIndex]
                .dataset.short;
            const toUnit = tempTo.value;
            const shortUnitTo = tempTo
                .options[tempTo.selectedIndex]
                .dataset.short;
            converter(value, fromUnit, toUnit, shortUnitFrom, shortUnitTo, "temperatureForm");
        }
    });
});

function converter(value, from, to, sF, sT, currForm) {
    if (from === to) return value;
    let convertedValue = conversionRates[from]?.[to]?.(Number(value)) ?? NaN;
    if (!Number.isInteger(convertedValue)) convertedValue = convertedValue.toFixed(2);
    resultText.innerHTML = `${value} ${sF} = ${convertedValue} ${sT}`;
    resultForm.style.display = "flex";
    document.getElementById(currForm).style.display = "none";
}