import React, {useContext} from 'react'
import styled, {css} from 'styled-components'
import { DarkThemeContext } from "../App";

const StyledContainer = styled.div`
width: ${props => props.width}px;
padding: 5px 20px;
background-color: ${props => props.isDarkMode ? "#333333" : "white"};
margin: 10px;
transition: 0.4s;

`
const CenteredContainer = styled(StyledContainer)`
margin: auto;

${(props) => props.float && css`margin: 100px auto`}
`
export default function Container(props) {
    const {isDarkMode} = useContext(DarkThemeContext)

    return (
        <>
        {props.centered ? <CenteredContainer {...props} isDarkMode={isDarkMode}>
            {props.children}
        </CenteredContainer> : <StyledContainer isDarkMode={isDarkMode} width={props.width}>{props.children}</StyledContainer>}
        </>
    )
}
