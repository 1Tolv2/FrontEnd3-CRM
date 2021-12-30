import React, {useContext} from 'react'
import styled, {css} from 'styled-components'
import { DarkThemeContext } from "../App";

const StyledButton = styled.button`
justify-self: end;
color: ${props => props.isDarkMode ? "black" : "white"};
background-color: ${props => props.isDarkMode ? "#80ffff" : "#33cccc"};
font-weight: 600;
padding: 5px;
margin: 5px 0;
width: 80px;
border-radius: 2px;
border: none;
cursor: pointer;

${(props) => props.delete && css`
background-color: ${props => props.isDarkMode ? "#333333" : "#ff3300"};
color: ${props => props.isDarkMode ? "#ff3300" : "white"}`}

`

const GridButton = styled(StyledButton)`
grid-column-start: ${props => props.colStart};
grid-column-end: ${props => props.colEnd};
width: ${props => props.width}%;
box-sizing: border-box;
margin-top: 20px;
${(props) => props.delete && css`
background-color: ${props => props.isDarkMode ? "#333333" : "#ff3300"};
color: ${props => props.isDarkMode ? "#ff3300" : "white"}`}

@media (max-width: 1000px) {
    align-self: flex-end;
    }
@media (max-width: 550px) {
width: 100%;
}
`

export default function Button(props) {
    const {isDarkMode} = useContext(DarkThemeContext)

    return (
        <>
        {props.gridButton ? <GridButton type="submit" {...props} isDarkMode={isDarkMode}>
            {props.children}
        </GridButton> : <StyledButton onClick={props.onClick} delete={props.delete} isDarkMode={isDarkMode}>{props.children}</StyledButton>}
        </>
    )
}
