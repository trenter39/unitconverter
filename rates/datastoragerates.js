export const dataStorageRates = {
    bit: {
        byte: val => val / 8,
        kilobyte: val => val / 8000,
        megabyte: val => val / 8e+6,
        gigabyte: val => val / 8e+9,
        terabyte: val => val / 8e+12
    },
    byte: {
        bit: val => val * 8,
        kilobyte: val => val / 1000,
        megabyte: val => val / 1e+6,
        gigabyte: val => val / 1e+9,
        terabyte: val => val / 1e+12
    },
    kilobyte: {
        bit: val => val * 8000,
        byte: val => val * 1000,
        megabyte: val => val / 1000,
        gigabyte: val => val / 1e+6,
        terabyte: val => val / 1e+9
    },
    megabyte: {
        bit: val => val * 8e+6,
        byte: val => val * 1e+6,
        kilobyte: val => val * 1000,
        gigabyte: val => val / 1000,
        terabyte: val => val / 1e+6
    },
    gigabyte: {
        bit: val => val * 8e+9,
        byte: val => val * 1e+9,
        kilobyte: val => val * 1e+6,
        megabyte: val => val * 1000,
        terabyte: val => val / 1000
    },
    terabyte: {
        bit: val => val * 8e+12,
        byte: val => val * 1e+12,
        kilobyte: val => val * 1e+9,
        megabyte: val => val * 1e+6,
        gigabyte: val => val * 1000,
    }
};