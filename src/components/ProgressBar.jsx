import React, { useContext } from "react";
import styled from "styled-components";
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const {lightTheme, darkTheme} = tokens

const Bar = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${(props) => (props.isDarkMode ? darkTheme.darkGrey4 : lightTheme.grey)};
  width: 100%;
  height: 15px;
  border-radius: 5px;
`;

const Progress = styled.div`
  position: absolute;
  background: ${(props) => props.progressColor};
  width: ${(props) => props.progress}%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
`;
export default function ProgressBar(props) {
  const { isDarkMode } = useContext(DarkThemeContext);
  return (
    <>
      <Bar isDarkMode={isDarkMode}>
        <Progress
          progress={props.progress}
          progressColor={props.progressColor}
        />
      </Bar>
    </>
  );
}
