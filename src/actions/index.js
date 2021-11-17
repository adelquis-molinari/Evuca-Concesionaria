export function loadData(payload) {
    return {
        type: "LOAD_DATA",
        payload
    }
}

export function addGarage(payload) {
    return {
        type: "ADD_GARAGE",
        payload
    }
}

// export function removeGarage(payload) {
//     return {
//         type: "REMOVE_GARAGE",
//         payload
//     }
// }

export function setStock(payload) {
    return {
        type: "SET_STOCK",
        payload
    }
}