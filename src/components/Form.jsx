import React, {useContext} from 'react'
import styled from 'styled-components'
import { DarkThemeContext } from "../App";
import tokens from './Tokens';

const {lightTheme, darkTheme} = tokens

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: ${props => props.gridColTemplate};
  grid-row-gap: 5px;
  grid-column-gap: 10px;
  background-color: ${props => props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.white};
  padding: 20px;
  transition: 0.4s;

  @media (max-width: 700px) {
    display: flex;
    flex-flow: column wrap;
  }
`;

export default function Form({ handleOnSubmit, children, gridColTemplate}) {
  const {isDarkMode} = useContext(DarkThemeContext)
  
  return <StyledForm onSubmit={handleOnSubmit} gridColTemplate={gridColTemplate} isDarkMode={isDarkMode}>{children}</StyledForm>;
}
