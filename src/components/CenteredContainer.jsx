import React, {useContext} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from "../App";
import tokens from './Tokens';

const {lightTheme, darkTheme} = tokens

const StyledContainer = styled.div`
width: fit-content;
min-width: 350px;
height: fit-content;
padding: 20px 30px;
background-color: ${props => props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.white};
transition: background-color 0.4s;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
box-shadow: 0 0 10px grey;`

export default function CenteredContainer( props) {
    const {isDarkMode} = useContext(DarkThemeContext)

    return (
        <StyledContainer isDarkMode={isDarkMode}>
            {props.children}
        </StyledContainer>
    )
}
