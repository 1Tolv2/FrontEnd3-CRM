import React from 'react'
import styled from 'styled-components'

const StyledTbody = styled.tbody`
tr:nth-child(even){
    background-color: #ffffc8;
}
`
export default function ListItem(props) {
    return (
        <StyledTbody>
            {props.children}
        </StyledTbody>
    )
}
