import React, {useContext} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from "../App";
import tokens from './Tokens';

const {lightTheme, darkTheme} = tokens

const Input = styled.input`
border: solid grey 1.5px;
height: 15px;
background-color: ${props => props.isDarkMode ? darkTheme.darkGrey4 : lightTheme.white};
border-color: ${props => props.isDarkMode ? darkTheme.darkGrey4 : lightTheme.darkGrey2};
border-radius: 3px;
&:invalid:focus {
    border-color: red;
    outline: none !important;
    }
&:valid {
border-color: ${props => props.isDarkMode ? darkTheme.darkGrey4 : lightTheme.darkGrey2};
}
&:valid:focus{
    outline: none;
}
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`
export default function InputField({type, id, value, setValue, labelText, title, pattern, required}) {
  const {isDarkMode} = useContext(DarkThemeContext)
   
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <Input type={type} id={id} value={value} onChange={e => setValue(e.target.value)} title={title} pattern={pattern} required={required} isDarkMode={isDarkMode}/>
        </>
    )
}
