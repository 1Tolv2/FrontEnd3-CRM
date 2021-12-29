import React from "react";
import ErrorText from "./ErrorText";

export default function ErrorResponse(props) {
    return (
        <> <br/>
        <ErrorText {...props}>
          {props.children}
        </ErrorText>
        </>
        )
}