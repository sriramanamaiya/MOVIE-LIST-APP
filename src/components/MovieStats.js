import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent, Typography } from '@mui/material'

const MovieStats = (props) => {
    const movies = useSelector((state) => {
        return state.movies.data
    })

    const max = Math.max(...movies.map(ele => ele.rating))

    const topMovieRank = movies.find(movie => movie.rating === max)

    return (
        <Card elevation={3} sx={{ mt: 2 , width: 3/4 }}>
            <CardContent >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> Total Movies - { movies.length }</Typography>
                <Typography variant="h5" component="div"><p>⭐ {topMovieRank.name}</p></Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Movie Stats
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MovieStats