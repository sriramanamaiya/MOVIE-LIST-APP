import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { Typography, TextField, Button } from '@mui/material'

import { startGetMovie } from '../actions/movieActions'

const MovieForm = (props) => {
    const [ movieName, setMovieName ] = useState('')
    const [ movieRating, setMovieRating ] = useState('')
    const [ formErrors, setFormErrors ] = useState({})
    const errors ={}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if( e.target.name === 'movie' ){
            setMovieName(e.target.value)
        }else if( e.target.name === 'rating' ){
            setMovieRating(e.target.value)
        }
    }

    const runValidations = () => {
        if( movieName.trim().length === 0 ){
            errors.movieName = 'Movie Name Cannot be Blank'
        }else if( movieRating.trim().length === 0 ){
            errors.movieRating = 'IMDB Rating cannot be Blank'
        }else if( isNaN(movieRating.trim()) ){
            errors.movieRating = 'IMDB Rating Should be in Numbers'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if( Object.keys(errors).length === 0 ){
            setFormErrors({})
            const data = {
                id : Number(new Date()),
                name : movieName,
                rating : Number(movieRating)
            }
            setMovieName('')
            setMovieRating('')
            dispatch(startGetMovie(data))
        }else {
            setFormErrors(errors)
        }
    }

    return (
        <>
            <Typography variant="h6">Add Movie</Typography>
            <form onSubmit={handleSubmit} >
                <TextField
                    label="Movie Name"
                    value={movieName}
                    name="movie"
                    onChange={handleChange}
                    error={ formErrors.movieName ? true : false }
                    helperText={formErrors.movieName}
                    margin="normal"
                    size="small"
                />
             
                <TextField
                    label="IMDB Rating"
                    value={movieRating}
                    name="rating"
                    onChange={handleChange}
                    error={ formErrors.movieRating ? true : false }
                    helperText={formErrors.movieRating}
                    margin="normal"
                    size="small"
                />
                <br />
                
                <Button variant="contained" onClick={handleSubmit}>Add</Button>
            </form>
        </>
    )
}

export default MovieForm