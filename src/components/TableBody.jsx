import React, {useContext} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const {lightTheme, darkTheme} = tokens

const StyledTbody = styled.tbody`
td {
    padding: 10px 5px;
}
tr {
    cursor: pointer;
}
tr:hover {
    z-index: 2;
    box-shadow: 0px 0px 10px ${props => (props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.grey)};
}
tr:nth-child(even){
    background-color: ${props => props.isDarkMode ? darkTheme.blueGrey : lightTheme.whiteGreen};
}
@media (max-width: 900px) {
    td:nth-child(3){
        display: none;
    }
    td:nth-child(5){
        display: none;
    }
    @media (max-width: 650px) {
        td:nth-child(6){
                display: none;
            }
    }
`
export default function ListItem(props) {
    const {isDarkMode} = useContext(DarkThemeContext)

    return (
        <StyledTbody isDarkMode={isDarkMode}>
            {props.children}
        </StyledTbody>
    )
}
