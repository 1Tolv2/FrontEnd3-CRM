import React, { useContext } from "react";
import { UserContext } from "../App";
import { DarkThemeContext } from "../App";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Grid from "./Grid";
import tokens from "./Tokens";

const { lightTheme, darkTheme } = tokens;

const Card = styled.div`
  background-color: ${props => props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.white};
  transition: 0.4s;
  span {
    font-weight: bold;
  }
  img {
    width: 90px;
    height: auto;
    margin: 25px 0;
  }
`;

export default function UserCard() {
  const { user } = useContext(UserContext);
  const { isDarkMode } = useContext(DarkThemeContext);

  return (
    <Card isDarkMode={isDarkMode}>
      <h3>
        {user.firstName} {user.lastName} - {user.email}
      </h3>
      <Grid innerGrid gap gridColTemplate="100px auto">
        <Grid item innerGrid>
          <img src="/avatar.svg" alt="user avatar"></img>
        </Grid>
        <Grid item innerGrid>
          <Grid innerGrid gridColTemplate="90px auto">
            <Grid item innerGrid colStart={1} colEnd={2}>
              <span>Calls</span>
            </Grid>
            <Grid item innerGrid colStart={2} colEnd={3}>
              <ProgressBar progress={78} progressColor="blueviolet" />
            </Grid>
            <Grid item innerGrid colStart={1} colEnd={2}>
              <span>Meetings</span>
            </Grid>
            <Grid item innerGrid colStart={2} colEnd={3}>
              <ProgressBar progress={35} progressColor="royalBlue" />
            </Grid>
            <Grid item innerGrid colStart={1} colEnd={2}>
              <span>Quotes</span>
            </Grid>
            <Grid item innerGrid colStart={2} colEnd={3}>
              <ProgressBar progress={45} progressColor="orange" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
