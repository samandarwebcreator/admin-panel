import React from "react";
import MainChart from "../components/charts/MainChart";
import "./Dashboard.scss";
import StatisticsDashboard from "../components/statistics/StatisticsDashboard";
import DashboardTable from "../components/dashboard-table/DashboardTable";

export default function Dashboard() {
  return (
    <div className="dashboard__main-box">
      <StatisticsDashboard />
      <div>
        <MainChart />
      </div>

      <DashboardTable />
    </div>
  );
}
