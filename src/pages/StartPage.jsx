import React from "react";
import { Link } from "react-router-dom";

import CenteredContainer from "../components/CenteredContainer";
import H1 from "../components/H1";
import ButtonLink from "../components/ButtonLink";
import Grid from "../components/Grid";
import Background from "../components/Background";

export default function StartPage() {
  return (
    <Background>
      <CenteredContainer>
        <H1>WorkSpace</H1>
        <Grid center gridColTemplate="auto auto">
          <Grid item>
            <Link to="/login">
              <ButtonLink>SIGN IN</ButtonLink>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/create-user">
              <ButtonLink>REGISTER</ButtonLink>
            </Link>
          </Grid>
        </Grid>
      </CenteredContainer>
    </Background>
  );
}
