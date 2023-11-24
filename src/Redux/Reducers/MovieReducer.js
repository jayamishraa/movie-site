const initialState = {
    trendingApi: []
}

const movieReducer = (state=initialState, action)=>{
    switch (action.type){
        case 'TRENDING':
            return{
                ...state,
                trendingApi: action.payload
            }

        default:
            return state;
    }
}