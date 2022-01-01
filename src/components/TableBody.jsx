import React, {useContext} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from "../App";

const StyledTbody = styled.tbody`
td {
    padding: 10px 5px;
}
tr:nth-child(even){
    background-color: ${props => props.isDarkMode ? "#415358" : "#EBF5EE"};
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
