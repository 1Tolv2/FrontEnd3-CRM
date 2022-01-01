import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DarkThemeContext } from "../App";

const Button = styled.button`
  position: relative;
  float: right;
  top: 20px;
  width: 50px;
  height: 50px;
  font-size: 2em;
  background-color: #79e2f2;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;
const Icon = styled.div`
  position: absolute;
  top: 23px;
  left: 11.5px;
  background-color: black;
  width: 28px;
  height: 4px;
  border-radius: 20px;
  transform: rotate(90deg);
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    width: 28px;
    height: 4px;
    border-radius: 20px;
    transform: rotate(90deg);
    pointer-events: none;
  }
  &.iconPlus {
    animation: menuReversed 0.4s ease-in-out 1 forwards;
  }

  @keyframes menuReversed {
    0% {
      transform: rotate(45deg) scale(1.1);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  &.iconCross {
    animation: menu 0.4s ease-in-out 1 normal forwards;
  }

  @keyframes menu {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(135deg) scale(1.1);
    }
  }
`;

export default function AddButton(props) {
  const [buttonSymbol, setButtonSymbol] = useState("+");
  const { isDarkMode } = useContext(DarkThemeContext);

  function toggleIcon(e) {
    console.log(e.target.children[0].classList[2]);
    const icon = e.target.children[0];

    props.function.setAddCustomer(!props.function.addCustomer);
    if (!icon.classList[2]) {
      icon.classList.toggle("iconCross");
    } else if (icon.classList[2] === "iconCross") {
      icon.classList.toggle("iconCross");
      icon.classList.toggle("iconPlus");
    } else if (icon.classList[2] === "iconPlus") {
      icon.classList.toggle("iconPlus");
      icon.classList.toggle("iconCross");
    }
  }
  return (
    <Button isDarkMode={isDarkMode} onClick={toggleIcon}>
      <Icon />
    </Button>
  );
}
