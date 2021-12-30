import React from "react";
import styled from "styled-components";

const Slider = styled.span`
position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
  &:before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    left: 5px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
  }
`;

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 25px;
    margin-left: 10px;
   input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  input:checked + ${Slider} {
    background-color: #ccc;
  }
  
  input:checked + ${Slider}:before {
    transform: translateX(34px);
  }
`;


export default function ModeSwitch() {
  return (
    <Switch className="switch">
    <input type="checkbox" />
    <Slider className="slider"></Slider>
    </Switch>
  );
}
