import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: ${props => props.gridColTemplate};
  grid-row-gap: 5px;
  grid-column-gap: 10px;
  background: white;
  padding: 20px;
`;

export default function Form({ handleOnSubmit, children, gridColTemplate}) {
  return <StyledForm onSubmit={handleOnSubmit} gridColTemplate={gridColTemplate}>{children}</StyledForm>;
}
