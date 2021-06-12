import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar fixed="top" bg="dark">
        <Container>
          <a className="logo" href="https://www.proximitylab.com/">
            Proximity Lab
          </a>
        </Container>
      </Navbar>
    </div>
  );
}
