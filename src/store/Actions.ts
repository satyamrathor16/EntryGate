import * as types from './ActionTypes'
export const AddUserData = (dispatch, data) => {
    dispatch({ type: types.ADD_USER_DATA, payload: data });
}

export const AddSocietyData = (dispatch, data) => {
    dispatch({ type: types.ADD_SOCIETY_DATA, payload: data });
}