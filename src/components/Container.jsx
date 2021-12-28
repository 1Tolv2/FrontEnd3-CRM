import React from 'react'
import styled, {css} from 'styled-components'

const StyledContainer = styled.div`
width: ${props => props.width}px;
padding: 5px 10px 5px 10px;
background-color: white;
margin: 10px;
`
const CenteredContainer = styled(StyledContainer)`
margin: auto;

${(props) => props.float && css`margin: 100px auto`}
`
export default function Container(props) {
    return (
        <>
        {props.centered ? <CenteredContainer {...props}>
            {props.children}
        </CenteredContainer> : <StyledContainer width={props.width}>{props.children}</StyledContainer>}
        </>
    )
}
