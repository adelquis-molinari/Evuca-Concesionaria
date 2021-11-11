const initialState = {
    dataSimple: [],
    dataDetallada: []
};

const cards = (state = initialState, action) => {
    switch(action.type) {
    case "LOAD_DATA":
        console.log(JSON.parse(action.payload), 'dataaa')
        const jsonData = JSON.parse(action.payload)
        return {
            dataSimple: jsonData.dataSimple,
            dataDetallada: jsonData.dataDetallada
        }
    default:
        return
    }
}

export default cards;