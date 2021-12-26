import React from 'react'
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
justify-self: end;
color: white;
background-color: #33cccc;
font-weight: 600;
padding: 5px;
margin: 5px 0;
width: 80px;
border-radius: 2px;
border: none;
cursor: pointer;

${(props) => props.delete && css`background-color: #ff3300;`}
`

const FormButton = styled(StyledButton)`
grid-column-start: ${props => props.gridStart};
`

export default function Button(props) {
    return (
        <>
        {props.formButton ? <FormButton type="submit" {...props}>
            {props.children}
        </FormButton> : <StyledButton onClick={props.onClick} delete={props.delete}>{props.children}</StyledButton>}
        </>
    )
}
