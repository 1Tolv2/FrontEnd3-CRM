import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
border: solid grey 1.5px;
height: 15px;
&:invalid:focus {
    border-color: red;
    outline: none !important;
    }
&:valid {
border-color: grey;
}

`
export default function InputField({type, id, value, setValue, labelText, title, pattern, required}) {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <Input type={type} id={id} value={value} onChange={e => setValue(e.target.value)} title={title} pattern={pattern} required={required}/>
        </>
    )
}
