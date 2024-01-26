import React from "react";

export function Button(props) {
    return (
        <a
            className="border border-black font-medium rounded-full p-3 me-2 mb-2"
            href={props.link}> {props.text}
        </a>
    )
}