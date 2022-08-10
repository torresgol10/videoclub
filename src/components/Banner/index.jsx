import React, {useEffect , useState} from 'react'
import getOriginalNetflix from 'services/getOriginarNetflix';
import "./style.css";

export default function Banner() {
    const [movie, setMovie] = useState([])
    
    useEffect(() => {
        getOriginalNetflix().then(data => {
            let random = Math.floor(Math.random() * data.results.length - 1);
            setMovie(data.results[random]);
        })
    }, [])
    

    function truncate (string, number) {
        return string?.length > number ? string.substring(0, number) + "..." : string;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPostion: 'center center'
            }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{truncate(
                    movie?.overview, 150)}</h1>
            </div>

            <div className='banner__fadeBottom'></div>
        </header>
    )
}
