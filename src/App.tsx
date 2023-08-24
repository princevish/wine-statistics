import React, { FC } from "react";
import "./App.css";
import StatisticsTable from "./components.js/StatisticsTable";
import wineData from "./data/wineData.json";

export interface IWineData {
  [key: string]: number | string;
}

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
