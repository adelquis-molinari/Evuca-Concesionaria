const initialState = {
    dataSimple: [],
    dataDetallada: [],
    dataGarage: [],
    stock:true
};

const cards = (state = initialState, action) => {
    switch(action.type) {
    case "LOAD_DATA":
        // console.log(JSON.parse(action.payload), 'dataaa')
        const jsonData = JSON.parse(action.payload)
        return {
            dataSimple: jsonData.dataSimple,
            dataDetallada: jsonData.dataDetallada,
        }
    case "ADD_GARAGE":
        console.log("reducer");
        return {
            dataGarage: [...state,action.payload]
        }
    case "REMOVE_GARAGE":
        return {
            dataGarage: [...state.filter(item => item.id !== action.payload)]
        }
    case "SET_STOCK":
        return {
            stock: !state.stock
        }
    default:
        return
    }
}

export default cards;