import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Graph from "./Components/Graph";
import TableView from "./Components/TableView";

const ShowAQI = () => {
  const [data, setData] = useState([]);
  const [isTableView, setTableView] = useState(true);
  useEffect(() => {
    const ws = new WebSocket("ws://city-ws.herokuapp.com/‌");

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      setData(response);
      console.log(response);
    };
    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, []);

  const checkAirQuality = (value) => {
    return value <= 50
      ? "good"
      : value >= 50 && value <= 100
      ? "satisfactory"
      : value >= 100 && value <= 200
      ? "moderate"
      : value >= 200 && value <= 300
      ? "poor"
      : value >= 300 && value <= 400
      ? "very-poor"
      : value >= 400 && value <= 500
      ? "severe"
      : "";
  };

  return (
    <Container>
      <Row>
        <Button
          className="toggle-btn"
          onClick={() => setTableView(!isTableView)}
          variant="outline-success"
          size="sm"
        >
          Toggle Table View
        </Button>
        <Graph data={data} />
        {isTableView && (
          <TableView data={data} checkAirQuality={checkAirQuality} />
        )}
      </Row>
    </Container>
  );
};

export default ShowAQI;
