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
export function addAmount(payload) {
    return {
        type: "ADD_AMOUNT",
        payload
    }
}
export function removeAmount(payload) {
    return {
        type: "REMOVE_AMOUNT",
        payload
    }
}

export function removeGarage(payload) {
    return {
        type: "REMOVE_GARAGE",
        payload
    }
}

export function setStock(payload) {
    return {
        type: "SET_STOCK",
        payload
    }
}

export function getRating(payload) {
    return {
        type: "GET_RATING",
        payload
    }
}

export function setmonths(payload){
    return {
        type: "SET_MOUNTHS",
        payload
    }
}

export function setHours(payload){
    return {
        type: "SET_HOURS",
        payload
    }
}