import React from 'react'

export default function InputField({type, placeholder, value, setValue}) {
    return (
        <>
            <input type={type} id={placeholder} value={value} placeholder={placeholder} onChange={e => setValue(e.target.value)}/>
            <label htmlFor={placeholder}></label>
        </>
    )
}
