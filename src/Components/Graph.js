import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

export default function Graph({ data }) {

  // Fill bar color
  const barColor = (value) => {
    return value <= 50
      ? "#55A84E"
      : value >= 50 && value <= 100
      ? "#A3C853"
      : value >= 100 && value <= 200
      ? "#FFF832"
      : value >= 200 && value <= 300
      ? "#F29C32"
      : value >= 300 && value <= 400
      ? "#E93F33"
      : value >= 400 && value <= 500
      ? "#AF2D24"
      : "";
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{ background: barColor(Math.round(payload[0].value)) }}
        >
          <p className="label">{`${label} : ${Math.round(
            payload[0].value
          )}`}</p>
          <p className="desc">
            {Math.round(payload[0].value) <= 50
              ? "Air quality is good"
              : Math.round(payload[0].value) >= 50 &&
                Math.round(payload[0].value) <= 100
              ? "Air quality is satisfactory"
              : Math.round(payload[0].value) >= 100 &&
                Math.round(payload[0].value) <= 200
              ? "Air quality is moderate"
              : Math.round(payload[0].value) >= 200 &&
                Math.round(payload[0].value) <= 300
              ? "Air quality is poor"
              : Math.round(payload[0].value) >= 300 &&
                Math.round(payload[0].value) <= 400
              ? "Air quality is very poor"
              : Math.round(payload[0].value) >= 400 &&
                Math.round(payload[0].value) <= 500
              ? "Air quality is very severe"
              : ""}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="bar-wrapper" style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart width={500} height={400} data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="city" scale="band" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="aqi" barSize={15}>
            {data.map((item, index) => (
              <Cell key={index} fill={barColor(Math.round(item.aqi))} />
            ))}
          </Bar>
          <Line type="monotone" dataKey="aqi" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
