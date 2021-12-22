import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
text-align: center;
margin: 5px;
`
export default function H1(props) {
    return (
        <Header>
            {props.children}
        </Header>
    )
}
