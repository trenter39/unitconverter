export const temperatureRates = {
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