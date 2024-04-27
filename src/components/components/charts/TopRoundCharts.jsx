import React, { useState } from "react";
import "./MainChart.scss";
import RoundedPieChart from "./components/TinyPieChart";

export default function TopRoundCharts() {
  return (
    <div>
      <div>
        <RoundedPieChart />
      </div>
    </div>
  );
}
