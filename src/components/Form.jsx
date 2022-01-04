import React from "react";
import styled from "styled-components";


const StyledForm = styled.form`
  display: flex;
  grid-template-columns: 350px;
  flex-flow: column wrap;
`;

export default function Form({
  handleOnSubmit,
  children,
  required,
}) {

  return (
    <>
        <StyledForm onSubmit={handleOnSubmit} required={required}>{children}</StyledForm>
    </>
  );
}
