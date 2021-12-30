import React, {useContext} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from "../App";

const StyledTable = styled.table`
margin: 5px 0;
background-color: ${props => props.isDarkMode ? "#333333" : "white"};
width: 100%;
overflow-y: scroll;
border-collapse: collapse;
th{
    text-align: left;
background-color: ${props => props.isDarkMode ? "#68fdf3" : "#33cccc"};
    color: ${props => props.isDarkMode ? "black" : "#white"}; 
    padding: 3px 5px ;
    @media (max-width: 900px) {
        :nth-child(3){
            display: none;
        }
        :nth-child(5){
            display: none;
        }
}
@media (max-width: 650px) {
    :nth-child(6){
            display: none;
        }
}
overflow-x:auto;
}
`

export default function Table(props) {
    const {isDarkMode} = useContext(DarkThemeContext)

    return (
        <StyledTable isDarkMode={isDarkMode}>
            {props.children}
        </StyledTable>
    )
}
