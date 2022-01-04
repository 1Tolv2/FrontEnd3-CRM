import React, {useContext} from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const {lightTheme, darkTheme} = tokens

const Card = styled.div`
  width: 200px;
  height: fit-content;
  padding: 5px 15px;
  background-color: ${props => props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.white};
transition: 0.4s;
  h4 {
    padding: 0 10px;
    margin: 10px 5px;
text-align: center;
  }
  span {
    position: relative;
    top: -25px;
    left: 30px;
    font-size: 2em;
    font-weight: bold;
  }
  img {
    width: 55px;
    height: auto;
    margin: 0 0 10px 0;
  }
`;
export default function TeamCard(props) {
  const {isDarkMode} = useContext(DarkThemeContext)
  return (
    <Card isDarkMode={isDarkMode}>
      <h4>{props.name}</h4>
      <img src="/avatar.svg"></img>
      <span>{props.value}</span>
      <ProgressBar progress={45} progressColor={lightTheme.blueGreen} />
    </Card>
  );
}
