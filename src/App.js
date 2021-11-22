import React from 'react'
import { Container, Typography } from '@mui/material'

import MoviesContainer from './components/MoviesContainer'

const App = (props) => {

    return (
        <Container fixed>
            <Typography variant="h3" component="h1" color="textSecondary" gutterBottom >My Big Movie List</Typography>
            <MoviesContainer />
        </Container>
    )
}

export default App