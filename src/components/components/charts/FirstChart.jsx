import { Select } from "antd/es";
import React from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { data, data2, data3 } from "../../../utils/data";

export default function FirstChart() {
  const changedTab = useSelector((state) => state.general.changedTab);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="chart__header">
        <h1 className="main__title">Ежемесячная статистика</h1>
        <Select
          defaultValue="July"
          style={{
            width: 120,
            color: "#1AC19D",
          }}
          options={[
            {
              value: "July",
              label: "July",
            },
            {
              value: "January",
              label: "January",
            },
            {
              value: "March",
              label: "March",
            },
          ]}
        />
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={200}
          data={changedTab == "1" ? data : changedTab == "2" ? data2 : data3}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="linear-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(14, 115, 246, 0.5)" />
              <stop offset="100%" stopColor="rgba(14, 115, 246, 0.1)" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            strokeWidth={2}
            stroke="#0E73F6"
            fill="url(#linear-gradient)"
            animationDuration={3000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
