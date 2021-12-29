import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
margin: 5px 0;
background: white;
width: 100%;
overflow-y: scroll;
border-collapse: collapse;
th{
    text-align: left;
    background-color: #33cccc;
    color: white; 
    padding: 3px 5px ;
    @media (max-width: 900px) {
        :nth-child(even){
            display: none;
        }
}
overflow-x:auto;
}
`

export default function Table(props) {
    return (
        <StyledTable>
            {props.children}
        </StyledTable>
    )
}
