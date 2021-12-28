import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridColTemplate};
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  padding: 10px;
`;

const Item = styled.div`
  grid-column-start: ${(props) => props.colStart};
  grid-column-end: ${(props) => props.colEnd};
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  width: ${(props) => props.width}px;
  padding: 5px 10px 5px 10px;
  background-color: white;
  margin: 10px;
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
