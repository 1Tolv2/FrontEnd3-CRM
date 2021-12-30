import React from 'react'
import styled from 'styled-components'

const StyledTbody = styled.tbody`
tr:nth-child(even){
    background-color: #EBF5EE;
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
    return (
        <StyledTbody>
            {props.children}
        </StyledTbody>
    )
}
