import React from 'react'
import styled from 'styled-components'

const StyledTbody = styled.tbody`
tr:nth-child(even){
    background-color: #EBF5EE;
}
@media (max-width: 900px) {
    td:nth-child(even){
        display: none;
    }
`
export default function ListItem(props) {
    return (
        <StyledTbody>
            {props.children}
        </StyledTbody>
    )
}
