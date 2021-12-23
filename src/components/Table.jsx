import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
margin: 5px 0;
background: white;
width:800px;
overflow-y: scroll;
border: solid grey 1px;
border-collapse: collapse;

th{
    text-align:left;
    background: linear-gradient(#f1f1f1, #d0d0d0);
}
thead {
    border: solid grey 1px;
}
`

export default function Table(props) {
    return (
        <StyledTable>
            {props.children}
        </StyledTable>
    )
}
