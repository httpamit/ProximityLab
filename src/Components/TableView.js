import React from "react";
import { Table } from "react-bootstrap";

export default function TableView({ data, checkAirQuality }) {
  return (
    <div className="table-container">
      <Table size="sm">
        <thead>
          <tr>
            <th width="33%">City</th>
            <th width="33%">Current AQI</th>
            <th width="33%">Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              className={`animate__animated animate__slideInUp ${checkAirQuality(
                Math.round(item.aqi)
              )}`}
              key={index}
            >
              <td>{item.city}</td>
              <td>{Number(item.aqi).toFixed(2)}</td>
              <td className="capitalize">
                {checkAirQuality(Math.round(item.aqi))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
