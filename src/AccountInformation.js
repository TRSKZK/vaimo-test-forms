import React from 'react'
import styled from 'styled-components'
import {Line} from './Form'

const AccInfoWrapp = styled.div`
margin-top: 20px;
display:${props=> props.visible ? 'block' : 'none'};

`
const AdressBook = styled.p`
margin-top:20px;
`
export const AccountInformation = ({info, visible}) => {
    
    return (
        <AccInfoWrapp visible={visible}>
            <h3>Account Information</h3>
            <Line />
            <p><b>Contact information</b></p>
            <p>{info.firstName}, {info.lastName}</p>
            <p>{info.email}</p>
            <p> <b>Newsletter:</b>{info.checkbox ?
                "You've subscribed to our newsletter" :
                "You aren't subscribed to our newsletter"}</p>
            
            <AdressBook><b>Adress Book</b></AdressBook>
            <Line />
            <p>{info.street}</p>
            <p>{info.country}</p>
            <p>{info.region}</p>
        </AccInfoWrapp>
    )
}