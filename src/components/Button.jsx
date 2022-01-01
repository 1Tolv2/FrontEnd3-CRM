import React, {useContext} from 'react'
import styled, {css} from 'styled-components'
import { DarkThemeContext } from "../App";
import tokens from './Tokens';

const {lightTheme, darkTheme} = tokens

const StyledButton = styled.button`
justify-self: end;
color: ${props => props.isDarkMode ? darkTheme.black : lightTheme.white};
background-color: ${props => props.isDarkMode ? darkTheme.lightBlue : lightTheme.lightBlue};
font-weight: 600;
padding: 5px;
margin: 5px 0;
width: 80px;
border-radius: 2px;
border: none;
cursor: pointer;

${(props) => props.delete && css`
background-color: ${props => props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.red};
color: ${props => props.isDarkMode ? darkTheme.red : lightTheme.white}`}

`

const GridButton = styled(StyledButton)`
grid-column-start: ${props => props.colStart};
grid-column-end: ${props => props.colEnd};
width: ${props => props.width}%;
box-sizing: border-box;
margin-top: 20px;
${(props) => props.delete && css`
background-color: ${props => props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.red};
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
