import React from 'react'

export default function Icon({ name, color = "currentColor", size = "1" }) {
    const WH = 16 * size;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={WH} height={WH} fill={color} viewBox="0 0 16 16">
            {name === "search" &&
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />}

            {name === "play-fill" && <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
}
        </svg>
    )
}
