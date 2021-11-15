export function loadData(payload) {
    return {
        type: "LOAD_DATA",
        payload
    }
}

export function loadUserData(payload) {
    return {
        type: "LOAD_USER_DATA",
        payload
    }
}