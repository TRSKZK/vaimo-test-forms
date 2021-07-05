import React, {useState} from 'react'
import styled from 'styled-components'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import { AccountInformation } from './AccountInformation'



const Container = styled.div`
margin: 30px 200px 0 200px;
padding: 20px;


`

export const Line = styled.hr`
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

const AdressInfo = styled.h2`
margin-top: 30px;

`

const RegionStyled = styled(RegionDropdown)`
width:700px;
height: 30px;
margin-top: 10px;
color:#A0A0A0;
border-color:#A0A0A0;
padding: 3px;
&:focus{
    outline: none;
}

`

const StyledPhoneInput = styled(PhoneInput)`
width:700px;
height: 30px;
margin-top: 10px;

padding: 3px;
&:focus{
    outline: none;
}

`

const StyledCountryDropDown = styled(CountryDropdown)`
width:700px;
height: 30px;
margin-top: 10px;
color: #A0A0A0;
padding: 3px;
border-color:#A0A0A0;
&:focus{
    outline: none;
}
`

const RequiredFields = styled.p`
color: red;
margin-top: 10px;

`

const CreateButton = styled.button`
margin-top: 15px;
width:200px;
height: 50px;
background-color: ${props => props.disabled ? '#A0A0A0' : 'black'};
cursor:pointer;
color:white;

`



export const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [country, setCounty] = useState(``)
    const [region, setRegion] = useState(``)
    const [zipCode, setZipCode] = useState('')
    const [checked, setChecked] = useState(false)
    const [visibility, setVisibility] = useState(false)
    let disabled;

    const info = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        phone: phone,
        street: street,
        country: country,
        region: region,
        zipCode: zipCode,
        checkbox: checked,
    }

    

    const fieldsCheck = () => {
        firstName && lastName && email && password && confirmPassword && phone && street
        && country && region && zipCode ? disabled = false : disabled = true
     }

     fieldsCheck()
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
                    <CheckBox onChange={()=> setChecked(!checked)} type='checkbox' id='newsletter' name='subscription' />
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
                {password === confirmPassword ? '' : <WarningMessage>Passwords doesn't march </WarningMessage>}
                
                <AdressInfo>Adress Information</AdressInfo>
                <Line/>

                <StyledPhoneInput className='phone-input' placeholder='Enter your phone number'
                    value={phone}
                    onChange={setPhone} />

                <StyledInput  placeholder='Street Adress *'
                    value={street}
                    onChange={(e)=> setStreet(e.target.value)}
                />

                <StyledCountryDropDown value={country}
                    onChange={(val) => setCounty(val)} />
                
                <RegionStyled country={country}
                    value={region} onChange={(val) => setRegion(val)} />
                
                <StyledInput placeholder='Zip Code *'
                    value={zipCode}
                    onChange={(e)=> setZipCode(e.target.value)}
                />
                
                <RequiredFields>Required fields *</RequiredFields>
                
                <CreateButton
                    type='submit'
                    disabled={disabled}
                    
                    onClick={(e) => {
                        e.preventDefault()
                        setVisibility(true)
                    } }
                >Create an Account</CreateButton>
            </form>

            <AccountInformation visible={visibility} info={info}/>

        </Container>
    )
}