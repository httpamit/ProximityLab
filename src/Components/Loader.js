import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <div>
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
