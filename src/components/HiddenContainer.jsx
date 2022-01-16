import React, { useContext } from "react";
import styled from "styled-components";
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const { lightTheme, darkTheme } = tokens;

const Container = styled.div`
position: absolute;
top: 0;
right: 0;
padding: 5px 20px;
box-sizing: border-box;
background-color: ${(props) => (props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.white)};
z-index: 1;
box-shadow: 0 0 10px ${(props) => (props.isDarkMode ? darkTheme.black : lightTheme.grey)};
transform: translateX(100%);

 animation: display 0.6s ease-out forwards;
       @keyframes display{
         0% {
             transform: translateX(100%);
       }
       100% {
           transform: translateX(0);
       }
      }
`

export default function HiddenContainer(props) {
    const {isDarkMode} = useContext(DarkThemeContext)
    return (
        <Container open={!props.state} isDarkMode={isDarkMode}>
            {props.children}
        </Container>
    )
}
