import * as types from './ActionTypes'
var initialState = {
    userData: {},
    societyData: {}
}
const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.ADD_USER_DATA:
            return {
                ...state,
                userData: actions.payload
            }
        case types.ADD_SOCIETY_DATA:
            return {
                ...state,
                societyData: actions.payload
            }

    }
}


export default reducer;