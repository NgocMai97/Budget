import React from "react";

import Container from "react-bootstrap/Container";

import BottomIncome from "./BottomIncome";
import BottomExpenses from "./BottomExpenses";
import BottomAdd from "./BottomAdd";
export default function Bottom() {
  return (
    <div className="bottom">
      <BottomAdd />
      <Container>
        <BottomIncome />
        <BottomExpenses />
      </Container>
    </div>
  );
}
