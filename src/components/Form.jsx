import React from 'react'

export default function Form({handleOnSubmit, children}) {

    return (
        <form onSubmit={handleOnSubmit}>
             {children}
         </form>
    )
}
