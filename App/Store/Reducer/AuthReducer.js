import actionTypes from '../actionTypes';


let INITIAL_STATE = {
    isProgress: false,
    isError: false,
    errorTest: '',
    currentUser: {}


}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_PROGRESS:
            return { ...state, isProgress: true }
        case actionTypes.SIGNUP_SUCCEED:
            return { ...state, currentUser: action.data, isProgress: false }
        case actionTypes.SIGNUP_ERROR:
            return { ...state, isError: true, errorTest: action.error }
        case actionTypes.SIGNUP_ERROR_ALERT:
            return { ...state, isError: false, errorTest: '', isProgress: false }
        case actionTypes.SIGNUP_PROGRESS:
            return { ...state, isProgress: true }
        case actionTypes.SIGNIN_SUCCEED:
            return { ...state, currentUser: action.data, isProgress: false }
        case actionTypes.SIGNIN_ERROR:
            return { ...state, isError: true, errorTest: action.error }
        case actionTypes.SIGNUP_ERROR_ALERT:
            return { ...state, isError: false, errorTest: '', isProgress: false }
        default:
            return state;
    }
}