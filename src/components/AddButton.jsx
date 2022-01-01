import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from "../App";


const Button = styled.button`
position: relative;
float: right;
top: 20px;
width: 50px;
height: 50px;
font-size: 2em;
background-color: #79E2F2;
border-radius: 50%;
border: none;
cursor: pointer;
`

export default function AddButton(props) {
    const [buttonSymbol, setButtonSymbol] = useState("+")
    const {isDarkMode} = useContext(DarkThemeContext)

    function toggleAddCustomer(){
        props.function.setAddCustomer(!props.function.addCustomer)
        props.function.addCustomer ? setButtonSymbol("+") : setButtonSymbol("-")
    }
    return (
        <Button isDarkMode={isDarkMode} onClick={toggleAddCustomer}>
            {buttonSymbol}
        </Button>
    )
}
