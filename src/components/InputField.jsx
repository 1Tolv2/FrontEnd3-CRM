import React, {useContext} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from "../App";
import tokens from './Tokens';

const {lightTheme, darkTheme} = tokens

const Input = styled.input`
border: none;
border-bottom: 1px solid;
height: 15px;
width: 95%;
margin: 5px;
background-color: transparent;
border-color: ${props => props.isDarkMode ? darkTheme.darkGrey4 : lightTheme.darkGrey2};
&:invalid:focus {
    outline: none !important;
    }
&:focus{
    border-color: #962fbf;
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
            <Input type={type} id={id} value={value} onChange={e => setValue(e.target.value)} title={title} pattern={pattern} required={required} placeholder={labelText} isDarkMode={isDarkMode}/>
        </>
    )
}
