import React from 'react'
import styled from 'styled-components'

const RedText = styled.p`
color: red;
margin: 0 0 10px 0;
`


export default function ErrorText(props) {
    return (
        <RedText>
            {props.children}
        </RedText>
    )
}
