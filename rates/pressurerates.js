export const pressureRates = {
    bar: {
        pascal: val => val * 100000,
        psi: val => val * 14.504,
        atmosphere: val => val / 1.013,
        torr: val => val * 750.1
    },
    pascal: {
        bar: val => val / 100000,
        psi: val => val / 6895,
        atmosphere: val => val / 101300,
        torr: val => val / 133.3
    },
    psi: {
        bar: val => val / 14.504,
        pascal: val => val * 6895,
        atmosphere: val => val / 14.696,
        torr: val => val * 51.175
    },
    atmosphere: {
        bar: val => val * 1.013,
        pascal: val => val * 101300,
        psi: val => val * 14.696,
        torr: val => val * 760
    },
    torr: {
        bar: val => val / 750.1,
        pascal: val => val * 133.3,
        psi: val => val / 51.715,
        atmosphere: val => val / 760,
    }
};