import { IWineData } from "./App";

/**
 * The `calculateMean` function calculates the mean (average) of an array of numbers and returns it
 * rounded to 3 decimal places.
 * @param {number[]} data - The `data` parameter is an array of numbers.
 * @returns The mean (average) of the given data, rounded to 3 decimal places.
 */
export const calculateMean = (data: number[]) => {
  const sum = data.reduce((acc, value) => acc + value, 0);
  return (sum / data.length)?.toFixed(3);
}

/**
 * The `calculateMedian` function takes an array of numbers, sorts it in ascending order, and returns
 * the median value.
 * @param {number[]} data - An array of numbers for which you want to calculate the median.
 * @returns The function `calculateMedian` returns the median value of the input data array.
 */
export const calculateMedian = (data: number[]) => {
  const sortedData = [...data].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedData.length / 2);

  if (sortedData.length % 2 === 0) {
    return (
      (sortedData[middleIndex - 1] + sortedData[middleIndex]) /
      2
    )?.toFixed(3);
  } else {
    return sortedData[middleIndex]?.toFixed(3);
  }
}


/**
 * The `calculateMode` function calculates the mode (most frequently occurring value) of an array of
 * numbers.
 * @param {number[]} data - An array of numbers for which we want to calculate the mode.
 * @returns The function `calculateMode` returns the mode of the given array of numbers. If there is a
 * mode, it returns the mode as a number with 3 decimal places using `Number.toFixed(3)`. If there is
 * no mode, it returns `null`.
 */
export const calculateMode = (data: number[]) => {
  const frequencyMap: { [key: string]: number } = {};
  data.forEach((value) => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
  });

  let mode = null;
  let maxFrequency = 0;
  for (const value in frequencyMap) {
    if (frequencyMap[value] > maxFrequency) {
      mode = value;
      maxFrequency = frequencyMap[value];
    }
  }

  if (mode) {
    return Number(mode).toFixed(3);
  }
  return mode;
}

/**
 * The function calculates the gamma value based on the given wine data.
 * @param {IWineData} wine - The parameter "wine" is of type IWineData, which represents a data object
 * for a wine.
 * @returns The result of the calculation, which is the product of the "Ash" value and the "Hue" value
 * divided by the "Magnesium" value.
 */
export const calculateGamma = (wine: IWineData) => {
  return (Number(wine["Ash"]) * Number(wine["Hue"])) / Number(wine["Magnesium"]);
}

/**
 * The function calculates class-wise statistics for a given type of wine data.
 * @param {IWineData[]} data - An array of objects representing wine data. Each object should have a
 * property called "Alcohol" which represents the class of the wine, and a property called "Flavanoids"
 * which represents the value of the Flavanoids attribute for that wine.
 * @param {string} typeStatics - The `typeStatics` parameter is a string that represents the type of
 * statistic to calculate for each class. It can be any valid property name of the `IWineData`
 * interface, such as "Flavanoids", "Proanthocyanins", "Color intensity", etc.
 * @returns an object called `classwiseStats` which contains class-wise statistics for the given data.
 */
export const calculateClasswiseStats = (data: IWineData[], typeStatics: string) => {
  const classwiseStats: { class?: string, [key: string]: any } = {};

  data.forEach((wine: IWineData) => {
    const className = wine["Alcohol"];
    if (!classwiseStats[className]) {
      classwiseStats[className] = {
        class: className,
        [typeStatics]: [],
      };
    }
    classwiseStats[className][typeStatics].push(
      typeStatics === "Flavanoids" ? wine[typeStatics] : calculateGamma(wine)
    );
  });

  return classwiseStats;
}
