import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const {lightTheme, darkTheme} = tokens 

const Button = styled.button`
  position: relative;
  float: right;
  top: -50%;
  right: -35px;
  width: 45px;
  height: 45px;
  font-size: 2em;
  background-color: ${props => props.isDarkMode ? darkTheme.lightBlue : lightTheme.lightBlue};
  color: ${props => props.isDarkMode ? darkTheme.black : lightTheme.white};
  border-radius: 100%;
  border: none;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 0 20px ${props => props.isDarkMode ? darkTheme.darkGrey1 : lightTheme.grey};
  transition: transform ease-out 0.6s;
  &.open {
    transform: translate(-490%);
  }
  @media (max-width: 1200px) {
    left: 0px;
    }
`;
const Icon = styled.div`
  position: absolute;
  top: 22px;
  left: 15px;
  background-color: ${props => props.isDarkMode ? darkTheme.black : lightTheme.white};
  width: 15px;
  height: 2px;
  transform: rotate(-90deg);
  pointer-events: none;
  transition: transform 0.4s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.isDarkMode ? darkTheme.black : lightTheme.white};
    width: 15px;
    height: 2px;
    transform: rotate(-90deg);
    pointer-events: none;
  }
  &::before.open {
    transform: rotate(-315deg) scale(1.1);
  }
  &.open {
    transform: rotate(-315deg) scale(1.1);
  }
`

const ButtonText = styled.p`
position: absolute;
top: 0px;
left: 40px;
font-size: .4em;
font-weight: bold;
text-transform: uppercase;
color: inherit;
`

export default function AddButton(props) {
  const { isDarkMode } = useContext(DarkThemeContext);
  const [iconState, setIconState] = useState("close") 
  function toggleIcon() {
    props.setState(!props.state);
    props.state ? setIconState("close") : setIconState("open");
  }
  return (
    <Button className={iconState} isDarkMode={isDarkMode} onClick={toggleIcon}>
      <Icon className={iconState} isDarkMode={isDarkMode}/>
    </Button>
  );
}
