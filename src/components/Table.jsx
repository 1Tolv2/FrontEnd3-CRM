import React, { useContext } from "react";
import styled from "styled-components";
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const {lightTheme, darkTheme} = tokens

const StyledTable = styled.table`
  margin: 5px 0;
  background-color: ${(props) => (props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.white)};
  width: 100%;
  overflow-y: scroll;
  border-collapse: collapse;
  transition: background-color 0.4s;

  th {
    text-align: left;
    color: ${(props) => (props.isDarkMode ? darkTheme.white : lightTheme.black)};
    border-bottom: solid 2px ${(props) => (props.isDarkMode ? darkTheme.purplePink : lightTheme.blueGreen)};
    padding: 3px 5px 15px 5px;
    
    @media (max-width: 900px) {
      :nth-child(3) {
        display: none;
      }
    
      :nth-child(5) {
        display: none;
      }
    }
    @media (max-width: 650px) {
      :nth-child(6) {
        display: none;
      }
    }
    overflow-x: auto;
  }
`;

export default function Table(props) {
  const { isDarkMode } = useContext(DarkThemeContext);

  return <StyledTable isDarkMode={isDarkMode}>{props.children}</StyledTable>;
}
