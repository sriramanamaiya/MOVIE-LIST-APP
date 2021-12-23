import React,{ useState } from 'react'
import { FormControl, InputLabel, NativeSelect, TextField, Alert } from '@mui/material'

const MoviesSortSearch = (props) => {
    const { handleSearch, sortMovies } = props
    const [ search, setSearch ] = useState('')
    const [ select, setSelect ] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
        handleSearch(e.target.value)
    }

    const handleSelectChange = (e) => {
        setSelect(e.target.value)
        sortMovies(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="sort-search" onSubmit={handleSubmit}>
            <TextField
                label="Search By Name" 
                value={search}
                name="movie"
                onChange={handleChange}
                size="small"
                variant="standard"
                sx={{m : 1,  width: '60%' }}
            />

            <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel>Order By</InputLabel>
                <NativeSelect value={select} onChange={handleSelectChange}>
                    <option aria-label="None" value="">Order By</option>
                    <option value="name-a-to-z">Order By Name (A to Z)</option>
                    <option value="name-z-to-a">Order By Name (Z to A)</option>
                    <option value="rating-ascend">Order By Ranking (Ascending)</option>
                    <option value="rating-dscend">Order By Ranking (Dscending)</option>
                </NativeSelect>
            </FormControl>
        </form>
    )
}

export default MoviesSortSearch