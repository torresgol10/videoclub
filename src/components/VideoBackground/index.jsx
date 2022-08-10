import React from 'react'

const styledDiv = {
    position: "absolute",
    top: "-110px",
    left: "0",
    overflow: "hidden",
    width: "1920px",
    height: "1080px",
    zIndex: "-1",
    backgrounColor: "rgba(0, 0, 0, 0.5)"
}

const styleIframe = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
}
//
export default function VideoBackground({ id }) {
    return (
        <div style={styledDiv}>
            <iframe style={styleIframe} src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=0&loop=1`} id={id} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope;' title="f"></iframe>
        </div>
    )
}
