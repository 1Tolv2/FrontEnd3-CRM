import React from 'react'
import styled from 'styled-components'
import TeamCard from './TeamCard'

const FlexBox = styled.div`
display: flex;
height: 160px;
justify-content: space-evenly;
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
