export const speedRates = {
    mile_per_hour: {
        foot_per_second: val => val * 1.467,
        meter_per_second: val => val / 2.237,
        kilometer_per_hour: val => val * 1.609,
        knot: val => val / 1.151
    },
    foot_per_second: {
        mile_per_hour: val => val / 1.467,
        meter_per_second: val => val / 3.281,
        kilometer_per_hour: val => val * 1.097,
        knot: val => val / 1.688
    },
    meter_per_second: {
        mile_per_hour: val => val * 2.237,
        foot_per_second: val => val * 3.281,
        kilometer_per_hour: val => val * 3.6,
        knot: val => val * 1.944
    },
    kilometer_per_hour: {
        mile_per_hour: val => val / 1.609,
        foot_per_second: val => val / 1.097,
        meter_per_second: val => val / 3.6,
        knot: val => val / 1.852
    },
    knot: {
        mile_per_hour: val => val * 1.151,
        foot_per_second: val => val * 1.688,
        meter_per_second: val => val / 1.944,
        kilometer_per_hour: val => val * 1.852
    }
}