import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
background-color: #f0f0f0;
width: ${props => props.width}px;
padding: 5px 5px 5px 5px;
border: solid grey 1px;
`
const CenteredContainer = styled(StyledContainer)`
margin: 100px auto;
`
export default function Container(props) {
    return (
        <>
        {props.centered ? <CenteredContainer width={props.width}>
            {props.children}
        </CenteredContainer> : <StyledContainer>{props.children}</StyledContainer>}
        </>
    )
}
