import { conversionRates } from "./conversionrates.js";

const categorySelect = document.getElementById("categorySelect");
const forms = document.querySelectorAll(".form-section");
const titleText = document.getElementById("titleText");
const resultForm = document.getElementById("resultForm");
const resultText = document.getElementById("resultText");
const resetButton = document.getElementById("resetButton");

const formsList = [
    "area", "dataStorage", "energy", "frequency",
    "length", "mass", "power", "pressure",
    "speed", "temperature", "time", "volume"
];

const formElements = {};

formsList.forEach(name => {
    formElements[name] = {
        value: document.getElementById(`${name}Value`),
        from: document.getElementById(`${name}From`),
        to: document.getElementById(`${name}To`),
    }
});

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

document.querySelectorAll(".convertButton").forEach(button => {
    button.addEventListener('click', () => {
        const form = button.closest(".form-section");
        if (!form || form.style.display === "none") return;
        const category = form.id.replace("Form", "");
        const formConfig = formElements[category];
        if (!formConfig) return;
        const value = formConfig.value.value;
        const fromUnit = formConfig.from.value;
        const shortUnitFrom = formConfig.from.options[formConfig.from.selectedIndex].dataset.short;
        const toUnit = formConfig.to.value;
        const shortUnitTo = formConfig.to.options[formConfig.to.selectedIndex].dataset.short;
        converter(value, fromUnit, toUnit, shortUnitFrom, shortUnitTo, category);
    });
});

function converter(value, from, to, sF, sT, category) {
    if (from === to) return value;
    let convertedValue = conversionRates[category][from]?.[to]?.(Number(value)) ?? NaN;
    if (String(convertedValue).length > 20) convertedValue = Number(convertedValue).toExponential();
    resultText.innerHTML = `${value} ${sF} = ${convertedValue} ${sT}`;
    resultForm.style.display = "flex";
    let currForm = category + "Form";
    document.getElementById(currForm).style.display = "none";
}