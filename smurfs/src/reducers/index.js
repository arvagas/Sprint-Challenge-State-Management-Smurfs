import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAIL,
    POST_SMURFS_START,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_FAIL,
}
from '../actions'

const initialState = {
    smurfs: [
        {
            id: 0,
            name: 'Arvin',
            age: '210',
            height: '5.5cm'
        }
    ],
    error: '',
    callingAPI: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS_START :
            return {
                ...state,
                callingAPI: true,
                error: ''
            }
        case GET_SMURFS_SUCCESS :
            return {
                ...state,
                smurfs: action.payload,
                callingAPI: false,
                error: ''
            }
        case GET_SMURFS_FAIL :
            return {
                ...state,
                callingAPI: false,
                error: `${action.payload.status} ${action.payload.statusText}`
            }
        case POST_SMURFS_START :
            return {
                ...state,
                callingAPI: true,
                error: ''
            }
        case POST_SMURFS_SUCCESS :
            return {
                ...state,
                smurfs: action.payload,
                callingAPI: false,
                error: ''
            }
        case POST_SMURFS_FAIL :
            return {
                ...state,
                callingAPI: false,
                error: `${action.payload.status} ${action.payload.statusText}`
            }
        default :
            return state
    }
}