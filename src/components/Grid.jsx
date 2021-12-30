import React, {useContext} from 'react'
import styled, {css} from 'styled-components'
import { DarkThemeContext } from "../App";

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridColTemplate};
  padding: 10px;
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
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  width: ${(props) => props.width}px;
  padding: 5px 10px 5px 10px;
  background-color: ${props => props.isDarkMode ? "#333333" : "white"};
`;

export default function GridContainer(props) {
  const {isDarkMode} = useContext(DarkThemeContext)

  return (
    <>
      {props.item ? (
        <Item {...props} isDarkMode={isDarkMode}>{props.children}</Item>
      ) : (
        <Grid {...props} isDarkMode={isDarkMode}>{props.children}</Grid>
      )}
    </>
  );
}
