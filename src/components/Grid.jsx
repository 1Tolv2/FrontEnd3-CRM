import React from "react";
import styled, { css } from "styled-components";

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
      }
      @media (max-width: 700px) {
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
  background-color: white;
`;

export default function GridContainer(props) {
  return (
    <>
      {props.item ? (
        <Item {...props}>{props.children}</Item>
      ) : (
        <Grid {...props}>{props.children}</Grid>
      )}
    </>
  );
}
