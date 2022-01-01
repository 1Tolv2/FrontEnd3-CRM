import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const {lightTheme, darkTheme} = tokens 

const Button = styled.button`
  position: relative;
  float: right;
  top: 20px;
  width: 50px;
  height: 50px;
  font-size: 2em;
  background-color: ${props => props.isDarkMode ? darkTheme.lightBlue : lightTheme.lightBlue};
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;
const Icon = styled.div`
  position: absolute;
  top: 23px;
  left: 11px;
  background-color: ${props => props.isDarkMode ? darkTheme.black : lightTheme.white};
  width: 28px;
  height: 3px;
  border-radius: 20px;
  transform: rotate(90deg);
  pointer-events: none;
  transition: transform 0.4s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color:  ${props => props.isDarkMode ? darkTheme.black : lightTheme.white};
    width: 28px;
    height: 3px;
    border-radius: 20px;
    transform: rotate(90deg);
    pointer-events: none;
    
  }
  &::before.open {
    transform: rotate(315deg) scale(1.1);
  }
  &.open {
    transform: rotate(315deg) scale(1.1);
  }
`;

export default function AddButton(props) {
  const { isDarkMode } = useContext(DarkThemeContext);

  function toggleIcon(e) {
    console.log(e.target.children[0].classList[2]);
    const icon = e.target.children[0];
    props.function.setAddCustomer(!props.function.addCustomer);
      icon.classList.toggle("close");
      icon.classList.toggle("open");
  }
  return (
    <Button isDarkMode={isDarkMode} onClick={toggleIcon}>
      <Icon className="close" isDarkMode={isDarkMode}/>
    </Button>
  );
}
