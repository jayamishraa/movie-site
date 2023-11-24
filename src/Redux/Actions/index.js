export const dropdown = (data) => {
    return{
        type: "DROPDOWN",
        payload: data
    }
}

export const sidebar = (data) => {
    return{
        type: "SIDEBAR",
        payload: data
    }
}

export const trending = (data) => {
    return{
        type: "TRENDING",
        payload: data
    }
}