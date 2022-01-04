import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
margin: 10px;
`

export default function ToDoList() {
    return (
        <>
            <h2>TO-DO</h2>
            <p>TODAY</p>
          <hr/>
          <StyledInput type="checkbox"/>Call Adam<br/>
          <StyledInput id="hello" type="checkbox"/>Send Quote<br/>
          <p>THIS WEEK</p>
          <hr/>
          <StyledInput type="checkbox"/>Buy flowers<br/>
          <StyledInput type="checkbox"/>Email Hanna<br/>
          <StyledInput type="checkbox"/>Drop by the office<br/>
        </>
    )
}
