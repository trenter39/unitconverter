export const volumeRates = {
    liter: {
        millimeter: val => val * 1000,
        cubic_meter: val => val / 1000,
        gallon: val => val / 3.785,
        pint: val => val * 2.113,
        cup: val => val * 4.227,
        cubic_inch: val => val * 61.024
    },
    milliliter: {
        liter: val => val / 1000,
        cubic_meter: val => val / 1e+6,
        gallon: val => val / 3785,
        pint: val => val / 473,
        cup: val => val / 237,
        cubic_inch: val => val / 16.387
    },
    cubic_meter: {
        liter: val => val * 1000,
        milliliter: val => val * 1e+6,
        gallon: val => val * 264.172,
        pint: val => val * 2113.38,
        cup: val => val * 4226.75,
        cubic_inch: val => val * 61023.7
    },
    gallon: {
        liter: val => val * 3.785,
        milliliter: val => val * 3785,
        cubic_meter: val => val / 264.172,
        pint: val => val * 8,
        cup: val => val * 16,
        cubic_inch: val => val * 231
    },
    pint: {
        liter: val => val / 2.113,
        milliliter: val => val * 473.176,
        cubic_meter: val => val / 2113,
        gallon: val => val / 8,
        cup: val => val * 2,
        cubic_inch: val => val * 28.875
    },
    cup: {
        liter: val => val / 4.227,
        milliliter: val => val * 237,
        cubic_meter: val => val / 4227,
        gallon: val => val / 16,
        pint: val => val / 2,
        cubic_inch: val => val * 14.646
    },
    cubic_inch: {
        liter: val => val / 61.024,
        milliliter: val => val * 16.387,
        cubic_meter: val => val / 61024,
        gallon: val => val / 231,
        pint: val => val / 28.875,
        cup: val => val / 14.646
    }
}