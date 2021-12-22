import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
background-color: #f0f0f0;
margin: 100px auto;
width: ${props => props.width}px;
padding: 5px 5px 5px 5px;
border: solid grey 1px;
`
export default function Container(props) {
    return (
        <StyledContainer width={props.width}>
            {props.children}
        </StyledContainer>
    )
}
