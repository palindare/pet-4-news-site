"use client"
const defaultState = {
    slide: null
}


const slideReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_SLIDE":
            return {...state, slide: action.payload}
        default:
            return state
    }
}

export default slideReducer