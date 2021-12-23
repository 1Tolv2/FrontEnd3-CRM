import React from 'react'
import styled from 'styled-components'

const StyledTbody = styled.tbody`
tr:nth-child(2){
    background-color: #ffffc8;
}
`
// const StyledListItem = styled.li``

export default function ListItem(props) {
    return (
        <StyledTbody>
            {props.children}
        </StyledTbody>
    )
}
