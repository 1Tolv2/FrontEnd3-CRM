import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
justify-self: end;

color: black;
font-weight: 400;
background: linear-gradient(#f1f1f1, #d0d0d0);
padding: 5px;
margin: 5px 0;
width: 80px;
border-radius: 2px;
border: solid grey 1px;
`

const FormButton = styled(StyledButton)`
grid-column-start: ${props => props.gridStart};
`
export default function Button(props) {
    return (
        <>
        {props.form ? <FormButton type="submit" gridStart={props.gridStart}>
            {props.children}
        </FormButton> : <StyledButton onClick={props.onClick}>{props.children}</StyledButton>}
        </>
    )
}
