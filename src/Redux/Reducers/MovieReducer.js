const initialState = {
    trendingApi: [],
    searchId: 0
}

const movieReducer = (state=initialState, action)=>{
    switch (action.type){
        case 'TRENDING':
            return{
                ...state,
                trendingApi: action.payload
            }
        case 'SEARCH':
            return{
                ...state,
                searchId: action.payload
            }

        default:
            return state;
    }
}

export default movieReducer