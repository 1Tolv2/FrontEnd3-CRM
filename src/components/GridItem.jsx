import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const { lightTheme, darkTheme } = tokens;

const Item = styled.div`
  position: relative;
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  background-color: ${(props) =>
    props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.white};
  transition: background-color 0.4s;

  ${(props) =>
    props.container &&
    css`
    padding: 5px 20px 5px 20px;
    box-shadow: 0px 0px 20px
        ${(props) => (props.isDarkMode ? darkTheme.black : lightTheme.grey)};
    transition: background-color box-shadow 0.4s;
    `}
`;

export default function GridItem(props) {
  const { isDarkMode } = useContext(DarkThemeContext);

  return <Item {...props} isDarkMode={isDarkMode}>{props.children}</Item>;
}
