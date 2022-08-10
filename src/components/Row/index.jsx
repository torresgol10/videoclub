import React, { useState, useEffect, useRef } from 'react'
import { useDraggable } from "react-use-draggable-scroll";

import getInfoFromUrl from 'services/getInfoFromUrl';
import "./style.css";
const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, url, isLargeRow = false }) {
    const [movies, setMovies] = useState([])
    const ref = useRef();
    const { events } = useDraggable(ref); 

    useEffect(() => {
        getInfoFromUrl({ url }).then(data => {
            setMovies(data.results)
        })
    }, [url])

    return (
        <div className='row'>
            <h2 className='row__title'>{title}</h2>

            <div className='row__posters' {...events}
            ref={ref}>
                {movies.map(movie =>
                    <img key={movie.id}
                        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}
                `} alt={movie.title} />
                )}
            </div>
        </div>
    )
}
