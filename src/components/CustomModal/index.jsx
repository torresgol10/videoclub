import React, { useState } from 'react'
import { createPortal } from "react-dom"
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Ratio from 'react-bootstrap/Ratio';
import getVideoFromMovie from 'services/getVideoFromMovie';

export default function CustomModal({id, handlerId}) {
    const [show, setShow] = useState(true);
    const [video, setVideo] = useState({});

    const handleClose = () => {
        handlerId(null);
        setShow(false)
    };

    useEffect(() => {
        getVideoFromMovie({ id }).then(res => {
            const { name, key } = res?.results[0];
            let url = `https://www.youtube.com/embed/${key}`;
            setVideo({ title: name, url });
        })

    }, [id])

    return (
        <Modal show={show} onHide={handleClose} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>{video?.title || "Not Video"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Ratio aspectRatio="16x9">
                    <iframe src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
                </Ratio>
            </Modal.Body>
        </Modal>
    )
}

export function CustomModalPortal(){
    createPortal(<CustomModal />, document.getElementById("modal-root"))
}