import React, { useContext } from "react";
import { DarkThemeContext } from "../App";
import styled from "styled-components";

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.isDarkMode ? "#424242" : "#ccc"};
  transition: 0.4s;
  &:before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    left: 5px;
    bottom: 4px;
    background-color: ${props => props.isDarkMode ? "#212121" : "white"};
    transition: 0.4s;
  }
`;

const Switch = styled.label`
  position: relative;
  top: -40px;
  display: inline-block;
  width: 60px;
  height: 25px;
  margin-left: 10px;
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
  const {isDarkMode, setIsDarkMode} = useContext(DarkThemeContext)

  function changeMode(){
      isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true)
  }

  console.log(isDarkMode);
  return (<>
    <Switch className="switch">
      <input type="checkbox" onChange={changeMode}/>
      <Slider isDarkMode={isDarkMode} className="slider" ></Slider>
    </Switch>
    </>
  );
}
