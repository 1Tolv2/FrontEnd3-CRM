import React from "react";
import styled, { css } from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: ${props => props.gridColTemplate};
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  background: white;
  margin: auto;
  padding: 20px;
  border: solid grey 1px;
`;

export default function Form({ handleOnSubmit, children, gridColTemplate}) {
  return <StyledForm onSubmit={handleOnSubmit} gridColTemplate={gridColTemplate}>{children}</StyledForm>;
}
