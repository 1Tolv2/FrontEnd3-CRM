import React from 'react'
import styled from 'styled-components'
import TeamCard from './TeamCard'

const FlexBox = styled.div`
display: flex;
flex-flow: row wrap;
height: fit-content;
justify-content: space-evenly;
align-content: center;
@media (max-width: 800px) {
    display: flex;
    flex-flow: column wrap;
  }
`

export default function TeamModule() {
    return (
        <>
        <h2>TEAM</h2>
        <FlexBox>
            <TeamCard name="Amelia" value="7/12"></TeamCard>
            <TeamCard name="Rory" value="4/9"></TeamCard>
            <TeamCard name="Oswin" value="9/15"></TeamCard>
        </FlexBox>
        </>
    )
}
