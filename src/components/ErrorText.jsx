import React from 'react'
import styled from 'styled-components'
import tokens from './Tokens'

const RedText = styled.p`
color: ${tokens.lightTheme.red};
margin: 0 0 10px 0;
grid-column-start: ${props => props.colStart};
grid-column-end: ${props => props.colEnd};
grid-row-start: ${props => props.rowStart};
grid-row-end: ${props => props.rowEnd};
`


export default function ErrorText(props) {
    return (
        <RedText colStart={props.colStart} colEnd={props.colEnd}>
            {props.children}
        </RedText>
    )
}
