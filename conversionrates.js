import { areaRates } from "./rates/arearates.js";
import { dataStorageRates } from "./rates/datastoragerates.js";
import { energyRates } from "./rates/energyrates.js";
import { frequencyRates } from "./rates/frequencyrates.js";
import { lengthRates } from "./rates/lengthrates.js";
import { massRates } from "./rates/massrates.js";
import { powerRates } from "./rates/powerrates.js";
import { pressureRates } from "./rates/pressurerates.js";
import { speedRates } from "./rates/speedrates.js";
import { temperatureRates } from "./rates/temperaturerates.js";
import { timeRates } from "./rates/timerates.js";
import { volumeRates } from "./rates/volumerates.js";

export const conversionRates = {
    area: areaRates,
    dataStorage: dataStorageRates,
    energy: energyRates,
    frequency: frequencyRates,
    length: lengthRates,
    mass: massRates,
    power: powerRates,
    pressure: pressureRates,
    speed: speedRates,
    temperature: temperatureRates,
    time: timeRates,
    volume: volumeRates
};