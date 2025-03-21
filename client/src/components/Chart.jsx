import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function CustomerGrowthChart() {
  const data = [
    { year: "2020", Clients: 1000 },
    { year: "2021", Clients: 1500 },
    { year: "2022", Clients: 2500 },
    { year: "2023", Clients: 4000 },
    { year: "2024", Clients: 6000 },
    { year: "2025", Clients: 8000 },
  ];

  return (
    <div className="w-full h-72 sm:h-96 md:h-80 lg:h-96 xl:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" stroke="#dcdcdc" />
          <XAxis
            dataKey="year"
            stroke="#555"
            tick={{ fontSize: 12, fontFamily: "Arial, sans-serif" }}
            axisLine={{ stroke: "#555" }}
          />
          <YAxis
            stroke="#555"
            tick={{ fontSize: 12, fontFamily: "Arial, sans-serif" }}
            axisLine={{ stroke: "#555" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderColor: "#ddd",
              fontSize: "12px",
              fontFamily: "Arial, sans-serif",
            }}
            labelStyle={{
              fontWeight: "bold",
              color: "#555",
            }}
          />
          <Legend
            wrapperStyle={{
              fontSize: "12px",
              fontFamily: "Arial, sans-serif",
              color: "#555",
            }}
          />
          <Line
            type="monotone"
            dataKey="Clients"
            stroke="#2c3e50"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
