import React, { useContext } from "react";
import { DarkThemeContext } from "../App";
import styled from "styled-components";
import tokens from "./Tokens";

const {lightTheme, darkTheme} = tokens

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isDarkMode ? darkTheme.darkGrey3 : lightTheme.grey)};
  transition: 0.4s;
  &:before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    left: 5px;
    bottom: 4px;
    background-color: ${(props) => (props.isDarkMode ? darkTheme.darkGrey1 : lightTheme.white)};
    transition: 0.4s;
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 25px;
  margin: 10px 0 10px 10px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + ${Slider}:before {
    transform: translateX(34px);
  }
`;

export default function ModeSwitch() {
  const { isDarkMode, setDarkMode } = useContext(DarkThemeContext);

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }

  console.log(isDarkMode);
  return (
    <>
      <Switch className="switch">
        <input type="checkbox" onChange={toggleDarkMode} />
        <Slider isDarkMode={isDarkMode} className="slider"></Slider>
      </Switch>
    </>
  );
}
