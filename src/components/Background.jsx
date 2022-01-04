import React, {useContext} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const { lightTheme, darkTheme } = tokens;

const BackgroundContainer = styled.div`
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;
background-image: url(${props=>props.isDarkMode ? darkTheme.background : lightTheme.background});
background-repeat: no-repeat;
background-position: center top;`

export default function Background(props) {
    const {isDarkMode} = useContext(DarkThemeContext)
    return (
        <BackgroundContainer isDarkMode={isDarkMode}>
            {props.children}
        </BackgroundContainer>
    )
}
