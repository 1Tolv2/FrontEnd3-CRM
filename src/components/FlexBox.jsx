import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
  transition: background-color 0.4s;
  justify-content: space-evenly;
`;

export default function FlexBox(props) {

  return <Grid {...props}>{props.children}</Grid>;
}
