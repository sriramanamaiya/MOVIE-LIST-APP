import axios from "axios"

const startGetMovie = (searchData) => {
    return (dispatch) => {
        dispatch(toggleLoading())
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&query=${searchData.name.split(' ').join('+')}`)
            .then((response) => {
                const data =  response.data.results
                dispatch(toggleLoading())
                if( data.length === 0 ){
                    dispatch(addMovie({...searchData, src : `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}))
                }else {
                    dispatch(addMovie({...searchData, src : `${data[0].poster_path}`}))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const toggleLoading = () => {
    return {
        type : 'TOGGLE_LOADING'
    }
}

const addMovie = (movie) => {
    return {
        type : 'ADD_MOVIE',
        payload : movie
    }
}

const deleteMovie = (id) => {
    return {
        type : 'DELETE_MOVIE',
        payload : id
    }
}

const pageReload = (data) => {
    return {
        type : 'PAGE_RELOAD',
        payload : data
    }
}

export { startGetMovie, deleteMovie, pageReload }