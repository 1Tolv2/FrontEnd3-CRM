import React, {useContext} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from '../App'

const ButtonDiv = styled.div`
display: inline-block;
padding: 9px 15px;
width: 60px;
border: solid 4px #d62976};
color: ${props => props.isDarkMode ? "white" : "white"};
background-color: ${props => props.isDarkMode ? "none" : "#d62976"};
border-radius: 30px;
text-align: center;
font-weight: bold;
transitions: 0.4s;

`
export default function ButtonLink(props) {
    const {isDarkMode} = useContext(DarkThemeContext)
    return (
        <ButtonDiv isDarkMode={isDarkMode}>
            {props.children}
        </ButtonDiv>
    )
}
