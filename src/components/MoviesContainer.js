import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Alert } from '@mui/material'

import { pageReload } from '../actions/movieActions'

import MoviesList from './MoviesList'
import MovieForm from  './MovieForm'
import MovieStats from './MovieStats'

const MoviesContainer = (props) => {
    const dispatch =  useDispatch()

    const movies = useSelector((state) => {
        return state.movies.data
    })

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('data'))
        
        if(userData){
            dispatch(pageReload(userData))
        }
    },[])

    useEffect(() => {
        localStorage.setItem('data',JSON.stringify(movies))
    },[movies])

    return (
        <Grid container columnSpacing={12} >
            <Grid item xs={8}>
                { movies.length === 0 ? (
                    <Alert severity="info">No Movie Added. Add New Movie ..👍</Alert>
                ) : (
                    <MoviesList />
                ) }
            </Grid>
            <Grid item xs={4}>
                <MovieForm />
                { movies.length > 0 && <MovieStats />  }
            </Grid>
        </Grid>
    )
}

export default MoviesContainer