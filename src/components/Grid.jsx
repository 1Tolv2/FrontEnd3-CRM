import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const { lightTheme, darkTheme } = tokens;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridColTemplate};
  padding: 10px;
  transition: background-color 0.4s;

  ${(props) =>
    props.innerGrid &&
    css`
      align-items: center;
      padding: 0;
    `}
  ${(props) =>
    props.align &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.center &&
    css`
      justify-content: space-evenly;
    `}
 

  ${(props) =>
    props.gap &&
    css`
      gap: 10px;
    `}
  @media (max-width: 1000px) {
    display: flex;
    flex-flow: column wrap;
    padding: 0;
  }
`;

const Item = styled.div`
position: relative;
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  width: ${(props) => props.width}%;
  padding: ;
  background-color: ${(props) =>
    props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.white};
  transition: background-color 0.4s;

  ${(props) =>
    props.padding &&
    css`
    padding: 5px 20px 5px 20px;
    `}

  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 0px 0px 20px
        ${(props) => (props.isDarkMode ? darkTheme.black : lightTheme.grey)};
  transition: background-color box-shadow 0.4s;

    `}
  @media (max-width: 1000px) {
    align-self: center;
`;

export default function GridContainer(props) {
  const { isDarkMode } = useContext(DarkThemeContext);

  return (
    <>
      {props.item ? (
        <Item {...props} isDarkMode={isDarkMode}>
          {props.children}
        </Item>
      ) : (
        <Grid {...props} isDarkMode={isDarkMode}>
          {props.children}
        </Grid>
      )}
    </>
  );
}
