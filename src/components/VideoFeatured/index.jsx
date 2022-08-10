import Icon from 'components/Icon';
import Link from 'components/Link'
import VideoBackground from 'components/VideoBackground'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Title } from './style';

const idsVideo = [766507]

export default function VideoFeatured() {
    const [video, setVideo] = useState({});

    useEffect(() => {
        //Fecth video trending movie from url The movie BD with header Token Bearer,
        fetch(`https://api.themoviedb.org/3/movie/${idsVideo[0]}?language=es-Es`, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjIyOWQ5NDQ0MmEyZTk2YTlmYjE0ZGQ0N2E5ODM2MiIsInN1YiI6IjYyZjE5N2NmY2VlMmY2MDA4Mjk1Y2MyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IomhlEba6oECO-EpFzq65FfSu0E-pfwDv689OGCssnY",
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(data => {
            fetch(`https://api.themoviedb.org/3/movie/${idsVideo[0]}/videos?language=es-ES`, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjIyOWQ5NDQ0MmEyZTk2YTlmYjE0ZGQ0N2E5ODM2MiIsInN1YiI6IjYyZjE5N2NmY2VlMmY2MDA4Mjk1Y2MyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IomhlEba6oECO-EpFzq65FfSu0E-pfwDv689OGCssnY",
                    "Content-Type": "application/json"
                }
            }).then(res => res.json()).then(dataMovie => {
                console.log(data)
                setVideo({ id: dataMovie?.results[0].key, title: data?.title })
            })

        })

    }, [])

    return (
        <div style={{ width: "100%", height: "80vh", position: "relative", overflow: "hidden" }}>
            {video && <VideoBackground id={video.id} />}
            <div style={{ position: "absolute", bottom: "150px", left: "50px" }}>
                <Title>{video.title}</Title>
                <Link><Icon name="play-fill" /> Play</Link>
                <Link>More Info</Link>
            </div>
        </div>
    )
}
