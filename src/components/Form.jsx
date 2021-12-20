import React from 'react'

export default function Form(props) {

    return (
        <form onSubmit={props.handleOnSubmit}>
             {props.children}
         </form>
    )
}
