import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar fixed="top" bg="dark">
        <Container>
          <a className="logo" href="javascript:;">
            Real time
          </a>
        </Container>
      </Navbar>
    </div>
  );
}
