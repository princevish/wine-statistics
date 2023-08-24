import React, { FC } from "react";
import {
  calculateClasswiseStats,
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../utils";
import { IWineData } from "../App";

interface StatisticsTableProps {
  wineData: IWineData[];
  typeStatics: string;
}

/**
 * The `StatisticsTable` component renders a table displaying statistics for different classes of wine
 * data.
 * @param  - - `wineData`: An array of objects representing wine data.
 * @returns The code is returning a table component with the following structure:
 */
const StatisticsTable: FC<StatisticsTableProps> = ({
  wineData,
  typeStatics,
}) => {
  const classwiseStats = calculateClasswiseStats(wineData, typeStatics);

  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(classwiseStats).map((className) => (
            <th key={className}>Alcohol {className}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{typeStatics} Mean</td>
          {Object.values(classwiseStats).map((classData) => (
            <td key={classData.class}>
              {calculateMean(classData[typeStatics])}
            </td>
          ))}
        </tr>
        <tr>
          <td>{typeStatics} Median</td>
          {Object.values(classwiseStats).map((classData) => (
            <td key={classData.class}>
              {calculateMedian(classData[typeStatics])}
            </td>
          ))}
        </tr>
        <tr>
          <td>{typeStatics} Mode</td>
          {Object.values(classwiseStats).map((classData) => (
            <td key={classData.class}>
              {calculateMode(classData[typeStatics])}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default StatisticsTable;
