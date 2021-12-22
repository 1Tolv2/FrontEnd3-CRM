import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`

`
export default function FlexContainer() {
    return (
        <StyledContainer width={props.width}>
            {props.children}
        </StyledContainer>
    )
}
