import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
list-style-type: none;
`
export default function UnorderedList(props) {
    return (
        <StyledList>
            {props.children}
        </StyledList>
    )
}
