import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL   
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
    isFetching: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START :
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS :
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_SMURFS_FAIL :
            return {
                ...state,
                isFetching: false,
                error: `${action.payload.status} ${action.payload.statusText}`
            }
        default :
            return state
    }
}