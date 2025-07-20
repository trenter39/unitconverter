export const powerRates = {
    watt: {
        kilowatt: val => val / 1000,
        megawatt: val => val / 1e+6,
        horsepower: val => val / 745.7,
    },
    kilowatt: {
        watt: val => val * 1000,
        megawatt: val => val / 1000,
        horsepower: val => val * 1.341,
    },
    megawatt: {
        watt: val => val * 1e6,
        kilowatt: val => val * 1000,
        horsepower: val => val * 1341,
    },
    horsepower: {
        watt: val => val * 745.7,
        kilowatt: val => val / 1.341,
        megawatt: val => val / 1341,
    }
};