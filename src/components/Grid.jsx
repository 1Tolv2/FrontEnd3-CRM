import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridColTemplate};
  padding: 10px;
  gap: 10px;
  @media (max-width: 1200px) {
    display: flex;
    flex-flow: column wrap;
    padding: 20px 10px;
  }
`;

export default function GridContainer(props) {
  return <Grid {...props}>{props.children}</Grid>;
}
