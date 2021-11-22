import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, CircularProgress, Box } from '@mui/material'

import { deleteMovie } from '../actions/movieActions'

import MoviesSortSearch from './MoviesSortSearch'
import MovieCard from './MovieCard'

const MoviesList = (props) => {
    const [ movies, setMovies ] = useState([])

    const dispatch = useDispatch()

    const moviesData = useSelector((state) => {
        return state.movies
    })

    const { isLoading, data } = moviesData

    useEffect(() => {
        setMovies(data)
    },[data])

    const handleSearch = (value) => {
        const result = data.filter((movie) => {
            return movie.name.toLowerCase().includes(value.toLowerCase())
        })
        setMovies(result)
    }

    const sortMovies = (value) => {
        if( value.length === 0 ){
            setMovies(data)
        }else if( value === 'name-a-to-z' ){
            const result = movies.slice(0).sort((a,b) => (a.name > b.name) ? 1 : (b.name > a.name ) ? -1 : 0)
            setMovies(result)
        }else if( value === 'name-z-to-a' ){
            const result = movies.slice(0).sort((a,b) => (b.name > a.name) ? 1 : (a.name > b.name ) ? -1 : 0)
            setMovies(result)
        }else if( value === 'rating-ascend' ){
            const result = movies.slice(0).sort((a,b) => a.rating - b.rating)
            setMovies(result)
        }else if( value === 'rating-dscend' ){
            const result = movies.slice(0).sort((a,b) => b.rating - a.rating)
            setMovies(result)
        }
    }

    const handleRemoveMovie = (id) => {
        dispatch(deleteMovie(id))
    }

    return (
        <>
            { isLoading ? (
                <Box sx={{ display: 'flex' , justifyContent : 'center', my : 6 }}>
                    <CircularProgress />
                </Box>
            ) : ( 
                <>
                    <MoviesSortSearch movies={movies} handleSearch={handleSearch} sortMovies={sortMovies} />
                    <Grid container>
                        { movies.map((movie) => {
                            return <MovieCard key={movie.id} {...movie} handleRemoveMovie={handleRemoveMovie} />
                        }) }
                    </Grid>
                </>
            )}
        </>
    )
}

export default MoviesList