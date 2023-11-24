const initialState = {
    isDropdown: false,
    isSidebar: false
}

const initialReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DROPDOWN':
            return{
                ...state,
                isDropdown: action.payload
            }
        case 'SIDEBAR':
            return{
                ...state,
                isSidebar: action.payload
            }

            default:
                return state;
    }
}

export default initialReducer