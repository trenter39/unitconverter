export const massRates = {
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
    }
};