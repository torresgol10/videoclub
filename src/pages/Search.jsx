import Nav from 'components/Nav';
import Result from 'components/Result';
import useSearch from 'hooks/useSearch';
import React from 'react'

export default function Search({ params }) {
    const { keyword } = params;
    const { movies, keyGlobal, setKeyGlobal } = useSearch({ keyword });

    const handlerChange = (e) => {
        setKeyGlobal(e.target.value)
    }

    return (
        <div className='pageSearch'>
            <Nav />
            <form >
                <input type="text" placeholder="Search" value={keyGlobal} onChange={handlerChange} />
            </form>
            <h1>Search {keyword}</h1>
            {movies && <Result movies={movies} />}
        </div>
    )
}
