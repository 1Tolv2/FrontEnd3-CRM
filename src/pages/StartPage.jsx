import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import H1 from "../components/H1";
import ButtonLink from "../components/ButtonLink";
import Grid from "../components/Grid";
import Background from "../components/Background";

export default function StartPage() {
  return (
    <Background>
      <Container centered float width={400}>
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
      </Container>
    </Background>
  );
}
