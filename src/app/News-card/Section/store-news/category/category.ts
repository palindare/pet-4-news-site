"use client"
const defaultState = {
    category: "Technology",
    page: 1
}


const categoryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_CATEGORY":
            return {...state, category: action.payload}
        case "CHANGE_PAGE":
            return {...state, page: action.payload}
        default:
            return state
    }
}

export default categoryReducer