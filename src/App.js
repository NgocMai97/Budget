import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

import Top from './components/Top';
import Bottom from './components/Bottom';
import List from "./mock/state";
function App() {
  let [list, setList] = useState(List);
  function addNewList(data){
    list.push(data);
    setList(
      [...list]
    )
    console.log(list);
  }
  function formatPrice(price){
    return(
      new Intl
      .NumberFormat('vi-VN', {style: 'currency', currency: 'VND', minimumFractionDigits: 3})
      .format(price)
    )
  }
  return (
    <Container>
      <Top list={list} formatPrice={formatPrice} />
      <Bottom list={list} formatPrice={formatPrice} addNewList={addNewList}/>
    </Container>
  );
}

export default App;
