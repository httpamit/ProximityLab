import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar fixed="top" bg="dark">
        <Container>
          <a className="logo" href="#">
            Proximity Lab
          </a>
        </Container>
      </Navbar>
    </div>
  );
}
