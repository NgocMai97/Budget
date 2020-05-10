import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

import Top from './components/Top';
import Bottom from './components/Bottom';
import List from "./mock/state";
function App() {
  let [list, setList] = useState(List);
  return (
    <Container>
      <Top list={list} />
      <Bottom />
    </Container>
  );
}

export default App;
