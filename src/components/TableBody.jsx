import React, {useContext} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const {lightTheme, darkTheme} = tokens

const StyledTbody = styled.tbody`
td {
    padding: 15px 5px;
}
tr {
    cursor: pointer;
}
tr:hover {
    z-index: 2;
    box-shadow: 0px 0px 10px ${props => (props.isDarkMode ? darkTheme.darkGrey1 : lightTheme.grey)};
}
@media (max-width: 900px) {

    td:nth-child(3), td:nth-child(4), td:nth-child(5), td:nth-child(6){
        display: none;
    }
    @media (max-width: 650px) {
    td:nth-child(8){
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
