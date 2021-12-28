import React from 'react'
import styled from 'styled-components'

const RedText = styled.p`
color: red;
margin: 0 0 10px 0;
grid-column-start: ${props => props.gridStart};
grid-column-end: ${props => props.gridEnd};
`


export default function ErrorText(props) {
    return (
        <RedText gridStart={props.gridStart} gridEnd={props.gridEnd}>
            {props.children}
        </RedText>
    )
}
