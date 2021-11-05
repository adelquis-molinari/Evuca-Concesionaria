const initialState = [];

const reducer = (state = initialState, action) => {
    switch(action.type) {
    case "actions":
        return{
            ...state
        }
    default:
        return
    }
}

export default reducer;