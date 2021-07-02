import React, {useState} from 'react'
import styled from 'styled-components'

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'



const Container = styled.div`
margin: 30px 200px 0 200px;
padding: 20px;


`

const Line = styled.hr`
width: 700px;
margin-top: 10px;


`
const StyledInput = styled.input`
width:700px;
height: 30px;
margin-top: 10px;
border: 1px solid #A0A0A0;
padding: 3px;
&:focus{
    outline: none;
}
`
const CheckBox = styled(StyledInput)`
width:20px;
height:20px;

`

const Label = styled.label`
margin: 0 0 0 11px;
vertical-align: super;
`
const PasswordIndication = styled.div`
margin-top: 10px;
background-color:#A0A0A0;
width:700px;
`
const WarningMessage = styled.div`
color:red;
width:200px;

`



export const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


   
    return (
        <Container>
            <form>
                <h2>Personal Information</h2>
                <Line/>
                <StyledInput value={firstName}
                    placeholder='First Name *'
                onChange={(e)=> setFirstName(e.target.value)}
                />
                <StyledInput value={lastName}
                    placeholder='Last Name *'
                onChange={(e)=> setLastName(e.target.value)}
                />
                <div>
                    <CheckBox type='checkbox' id='newsletter' name='subscription' />
                    <Label htmlFor='newsletter'>Sign up for Newsletter</Label>
                </div>

                <StyledInput placeholder='Email *'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                  />

                  <StyledInput type='password' placeholder='Password *'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <PasswordIndication>Password strenght: {password ? 'You have a password' : 'No'}</PasswordIndication>
                
                <StyledInput type='password' placeholder='Confirm Password *'
                    value={confirmPassword}
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                />
                {password === confirmPassword ? '' : <WarningMessage>Passwords doesn't march </WarningMessage> }


            </form>
        </Container>
    )
}