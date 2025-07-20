export const areaRates = {
    square_kilometer: {
        square_meter: val => val * 1e+6,
        square_mile: val => val / 2.59,
        square_yard: val => val * 1.196e+6,
        square_foot: val => val * 1.076e+7,
        square_inch: val => val * 1.55e+9,
        hectare: val => val * 100,
        acre: val => val * 247.1
    },
    square_meter: {
        square_kilometer: val => val / 1e+6,
        square_mile: val => val / 2.59e+6,
        square_yard: val => val * 1.196,
        square_foot: val => val * 10.764,
        square_inch: val => val * 1550,
        hectare: val => val / 10000,
        acre: val => val / 4047
    },
    square_mile: {
        square_kilometer: val => val * 2.59,
        square_meter: val => val * 2.59e+6,
        square_yard: val => val * 3.098e+6,
        square_foot: val => val * 2.788e+7,
        square_inch: val => val * 4.014e+9,
        hectare: val => val * 259,
        acre: val => val * 640
    },
    square_yard: {
        square_kilometer: val => val / 1.196e+6,
        square_meter: val => val / 1.196,
        square_mile: val => val / 3.098e+6,
        square_foot: val => val * 9,
        square_inch: val => val * 1296,
        hectare: val => val / 11960,
        acre: val => val / 4840
    },
    square_foot: {
        square_kilometer: val => val / 1.076e+7,
        square_meter: val => val / 10.764,
        square_mile: val => val / 2.788e+7,
        square_yard: val => val / 9,
        square_inch: val => val * 144,
        hectare: val => val / 107600,
        acre: val => val / 43560
    },
    square_inch: {
        square_kilometer: val => val / 1.55e+9,
        square_meter: val => val / 1550,
        square_mile: val => val / 4.014e+9,
        square_yard: val => val / 1296,
        square_foot: val => val / 144,
        hectare: val => val / 1.55e+7,
        acre: val => val / 6.273e+6
    },
    hectare: {
        square_kilometer: val => val / 100,
        square_meter: val => val * 10000,
        square_mile: val => val / 259,
        square_yard: val => val * 11960,
        square_foot: val => val * 107600,
        square_inch: val => val * 1.55e+7,
        acre: val => val * 2.471
    },
    acre: {
        square_kilometer: val => val / 247.1,
        square_meter: val => val * 4047,
        square_mile: val => val / 640,
        square_yard: val => val * 4840,
        square_foot: val => val * 43560,
        square_inch: val => val * 6.273e+6,
        hectare: val => val / 2.471
    },
};