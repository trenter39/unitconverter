export const frequencyRates = {
    hertz: {
        kilohertz: val => val / 1000,
        megahertz: val => val / 1e+6,
        gigahertz: val => val / 1e+9
    },
    kilohertz: {
        hertz: val => val * 1000,
        megahertz: val => val / 1000,
        gigahertz: val => val / 1e+6
    },
    megahertz: {
        hertz: val => val * 1e+6,
        kilohertz: val => val * 1000,
        gigahertz: val => val / 1000
    },
    gigahertz: {
        hertz: val => val * 1e+9,
        kilohertz: val => val * 1e+6,
        megahertz: val => val * 1000
    }
};