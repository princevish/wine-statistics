import React, { FC } from "react";
import "./App.css";
import StatisticsTable from "./components.js/StatisticsTable";
import wineData from "./data/wineData.json";

export interface IWineData {
  [key: string]: number | string;
}

/**
 * The App component renders a container div with a heading and two instances of the StatisticsTable
 * component, passing different props to each.
 * @returns The App component is returning a JSX element. The JSX element is a div with a className of
 * "container" and contains a h1 element with the text "Wine Statistics". It also includes two
 * instances of the StatisticsTable component, each with different props: wineData and typeStatics.
 */
const App:FC = () => {
  return (
    <div className="container">
      <h1>Wine Statistics</h1>
      <StatisticsTable wineData={wineData} typeStatics={"Flavanoids"} />
      <StatisticsTable wineData={wineData} typeStatics={"Gamma"} />
    </div>
  );
};

export default App;
