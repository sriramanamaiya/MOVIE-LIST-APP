const moviesInitialState = {
    isLoading : false,
    data : []
}

const moviesReducer = (state = moviesInitialState, action) => {
    switch(action.type) {
        case 'TOGGLE_LOADING' : {
            return { ...state, isLoading : !state.isLoading }
        }
        case 'ADD_MOVIE' : {
            return {...state, data : [{...action.payload},...state.data]} //[{...action.payload}, ...state]
        }
        case 'DELETE_MOVIE' : {
            const result = state.data.filter((movie) => {
                return movie.id !== action.payload
            })
            return {...state, data : [...result]}
        }
        case 'PAGE_RELOAD' : {
            return {...state, data : [...action.payload]}
        }
        default : {
            return {...state}
        }
    }
}

export default moviesReducer