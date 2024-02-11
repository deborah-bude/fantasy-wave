import React from "react";

export function Button(props) {
    let color = {
        "black": "text-black border-black",
        "pink-full": "text-white border-pink bg-pink",
        "white": "text-white border-white",
        undefined: "text-dark-pink border-dark-pink",
    }
    let buttonColor = (color[props.colors])

    return (
        <a
            className={buttonColor + " border font-medium rounded-full p-3 mt-2 mb-2"}
            href={props.link}> {props.children}
        </a>
    )
}