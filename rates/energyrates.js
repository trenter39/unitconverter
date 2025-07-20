export const energyRates = {
    joule: {
        kilojoule: val => val / 1000,
        gram_calorie: val => val / 4.184,
        kilocalorie: val => val / 4184,
        watt_hour: val => val / 3600,
        kilowatt_hour: val => val / 3.6e+6,
        electronvolt: val => val * 6.242e+18,
        foot_pound: val => val / 1.356
    },
    kilojoule: {
        joule: val => val * 1000,
        gram_calorie: val => val * 239,
        kilocalorie: val => val / 4.184,
        watt_hour: val => val / 3.6,
        kilowatt_hour: val => val / 3600,
        electronvolt: val => val * 6.242e+21,
        foot_pound: val => val * 737.6
    },
    gram_calorie: {
        joule: val => val * 4.184,
        kilojoule: val => val / 239,
        kilocalorie: val => val / 1000,
        watt_hour: val => val / 860.4,
        kilowatt_hour: val => val / 860400,
        electronvolt: val => val * 2.611e+19,
        foot_pound: val => val * 3.086
    },
    kilocalorie: {
        joule: val => val * 4184,
        kilojoule: val => val * 4.184,
        gram_calorie: val => val * 1000,
        watt_hour: val => val * 1.162,
        kilowatt_hour: val => val / 860.4,
        electronvolt: val => val * 2.611e+22,
        foot_pound: val => val * 3086
    },
    watt_hour: {
        joule: val => val * 3600,
        kilojoule: val => val * 3.6,
        gram_calorie: val => val * 860.4,
        kilocalorie: val => val / 1.162,
        kilowatt_hour: val => val / 1000,
        electronvolt: val => val * 2.247e+22,
        foot_pound: val => val * 2655
    },
    kilowatt_hour: {
        joule: val => val * 3e+6,
        kilojoule: val => val * 3600,
        gram_calorie: val => val * 860400,
        kilocalorie: val => val * 860.4,
        watt_hour: val => val * 1000,
        electronvolt: val => val * 2.247e+25,
        foot_pound: val => val * 2.655e+6
    },
    electronvolt: {
        joule: val => val / 6.242e+18,
        kilojoule: val => val / 6.242e+21,
        gram_calorie: val => val / 2.611e+19,
        kilocalorie: val => val / 2.611e+22,
        watt_hour: val => val / 2.247e+22,
        kilowatt_hour: val => val / 2.247e+25,
        foot_pound: val => val / 8.462e+18
    },
    foot_pound: {
        joule: val => val * 1.356,
        kilojoule: val => val / 737.6,
        gram_calorie: val => val / 3.086,
        kilocalorie: val => val / 3086,
        watt_hour: val => val / 2655,
        kilowatt_hour: val => val / 2.655e+6,
        electronvolt: val => val * 8.462e+18,
    },
}