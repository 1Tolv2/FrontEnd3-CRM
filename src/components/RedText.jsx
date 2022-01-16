import React from 'react'
import styled from 'styled-components'
import tokens from './Tokens'

const StyledText = styled.p`
color: ${tokens.lightTheme.red};
margin: 0 0 10px 0;
grid-column-start: ${props => props.colStart};
grid-column-end: ${props => props.colEnd};
grid-row-start: ${props => props.rowStart};
grid-row-end: ${props => props.rowEnd};
`


export default function RedText(props) {
    return (
        <StyledText {...props}>
            {props.children}
        </StyledText>
    )
}
