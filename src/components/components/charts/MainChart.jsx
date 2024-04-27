import React, { useState } from "react";
import { Tabs } from "antd";
import FirstChart from "./FirstChart";
import "./MainChart.scss";
import { useDispatch, useSelector } from "react-redux";
import TopRoundCharts from "./TopRoundCharts";
import { changeDashboardTab } from "../../../redux/generalSlice";
import TinyCharts from "./components/TinyCharts";

const MainChart = () => {
  const dispatch = useDispatch();

  const tabData = [
    { id: 1, name: "Неделья" },
    { id: 2, name: "Месяц" },
    { id: 3, name: "Год" },
  ];
  const handleTabChange = (activeKey) => {
    dispatch(changeDashboardTab(activeKey));
  };

  const [tabPosition, setTabPosition] = useState("bottom");

  return (
    <div className="charts__main-box">
      <div>
        <TinyCharts />
      </div>
      <div className="progress__line-charts">
        <div>
          <TopRoundCharts />
        </div>
        <div className="main__tab-change">
          <Tabs
            tabPosition={tabPosition}
            items={tabData.map((item) => {
              const { id, name } = item;
              return {
                label: name,
                key: id,
                children: <FirstChart />,
              };
            })}
            onChange={handleTabChange}
          />
        </div>
      </div>
    </div>
  );
};
export default MainChart;
