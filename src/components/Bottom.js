import React from "react";

import Container from "react-bootstrap/Container";

import BottomIncome from "./BottomIncome";
import BottomExpenses from "./BottomExpenses";
import BottomAdd from "./BottomAdd";
export default function Bottom({list,formatPrice,addNewList}) {
    let listInc = list.filter(o=>o.type==='income');
    let listExp = list.filter(o=>o.type==='expenses');
    
  return (
    <div className="bottom">
      <BottomAdd list={list} addNewList={addNewList}/>
      <Container>
        <BottomIncome listInc={listInc} formatPrice={formatPrice}/>
        <BottomExpenses listExp={listExp} formatPrice={formatPrice}/>
      </Container>
    </div>
  );
}
