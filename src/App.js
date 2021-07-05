

import React, { useState}from 'react'
import styled from 'styled-components'
import { Form } from './Form';







const Header = styled.h1`
text-align:center;
`

function App() {
  return (
    <div>
      <Header>Create New Customer Account</Header>
      <Form/>
    </div>
  );
}



export default App;
