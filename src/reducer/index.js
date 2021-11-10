const initialState = {
    cards: [],
};

const cards = (state = initialState, action) => {
    switch(action.type) {
    case "BUSCAR_VEHICULO":
        console.log(action)
        return{
            cards: action.payload
        }
    default:
        return
    }
}

export default cards;