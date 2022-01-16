import React from "react";
import { Link } from "react-router-dom";

import CenteredContainer from "../components/CenteredContainer";
import FlexBox from "../components/FlexBox";
import H1 from "../components/H1";
import ButtonLink from "../components/ButtonLink";
import Background from "../components/Background";

export default function StartPage() {
  return (
    <Background>
      <CenteredContainer>
        <H1>WorkSpace</H1>
        <FlexBox>
            <Link to="/login">
              <ButtonLink>SIGN IN</ButtonLink>
            </Link>
            <Link to="/create-user">
              <ButtonLink>REGISTER</ButtonLink>
            </Link>
        </FlexBox>
      </CenteredContainer>
    </Background>
  );
}
