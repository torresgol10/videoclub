import React, { useState } from 'react'
import { useEffect } from 'react';
import getMoviesFromKeyword from 'services/getMoviesFromKeyword';

export default function useSearch({ keyword = '' }) {
    const [movies, setMovies] = useState([]);
    const [keyGlobal, setKeyGlobal] = useState(keyword);

    useEffect( () => {
        getMoviesFromKeyword({ keyword: keyGlobal }).then((data) => {
            setMovies(data.results);
        });
    }, [keyGlobal]);

    return { movies, keyGlobal, setKeyGlobal }
}
