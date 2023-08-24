import { IWineData } from "./App";

export const calculateMean = (data: number[]) => {
  const sum = data.reduce((acc, value) => acc + value, 0);
  return (sum / data.length)?.toFixed(3);
}

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

export const calculateGamma = (wine: IWineData) => {
  return (Number(wine["Ash"]) * Number(wine["Hue"])) / Number(wine["Magnesium"]);
}

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
