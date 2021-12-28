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

const GridButton = styled(StyledButton)`
grid-column-start: ${props => props.gridStart};
`

export default function Button(props) {
    return (
        <>
        {props.gridButton ? <GridButton type="submit" {...props}>
            {props.children}
        </GridButton> : <StyledButton onClick={props.onClick} delete={props.delete}>{props.children}</StyledButton>}
        </>
    )
}
