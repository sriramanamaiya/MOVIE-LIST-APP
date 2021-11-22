import React from 'react'
import { Grid, Button } from '@mui/material'
import Box from '@mui/material/Box'
import { Card, CardContent, Typography,CardActions } from '@mui/material'

const MovieCard = (props) => {
    const { id, name, rating, src : source, handleRemoveMovie } = props

    const handleClick = () => {
        const userConfirm = window.confirm('Are You Sure')
        if( userConfirm ){
            handleRemoveMovie(id)
        }
    }

    return (
        <Grid item xs={6}  >
            <Card 
                sx={{ 
                    display : 'flex', 
                    alignItems : 'center', 
                    justifyContent : 'space-around', 
                    maxWidth: 250, 
                    maxHeight : 250, 
                    mb : 2, 
                    mt : 2 
                }}>
                <CardContent>
                    <img 
                        src={ source.includes('amazon') ? source : `http://image.tmdb.org/t/p/w185${source}`} 
                        alt={name} 
                        width="75%" 
                        height="180"  
                    />
                </CardContent>
                <Box>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                        <Typography variant="h6" color="text.secondary">&hearts; {rating}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={handleClick}>Delete</Button>
                    </CardActions>
                </Box>
            </Card>
        </Grid>
    )
}

export default MovieCard