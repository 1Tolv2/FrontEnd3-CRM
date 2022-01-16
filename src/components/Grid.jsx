import React, { useContext } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridColTemplate};
  padding: 10px;
  transition: background-color 0.4s;
  gap: 10px;
  @media (max-width: 1200px) {
    display: flex;
    flex-flow: column wrap;
    padding: 0;
  }
`;

export default function GridContainer(props) {
  const { isDarkMode } = useContext(DarkThemeContext);

  return (
        <Grid {...props} isDarkMode={isDarkMode}>
          {props.children}
        </Grid>
  );
}
