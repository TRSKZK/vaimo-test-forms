

import React, { useState}from 'react'
import styled from 'styled-components'
import { Form } from './Form';





// const RegionStyled = styled(RegionDropdown)`
// width: 150px;
// border: 2px solid black;
// height:50px;

// `

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

// const [country, setCounty] = useState(``)
//   const [region, setRegion] = useState(``)

{/* <CountryDropdown value={country} onChange={(val)=> setCounty(val)} />
      <RegionStyled  country={country} value={ region}/> */}

export default App;
