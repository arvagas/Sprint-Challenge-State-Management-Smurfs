import axios from 'axios'

export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL'

export const POST_SMURFS_START = 'POST_SMURFS_START'
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS'
export const POST_SMURFS_FAIL = 'POST_SMURFS_FAIL'

export const getSmurfVillage = () => {
    return dispatch => {
        dispatch({ type: GET_SMURFS_START })
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: GET_SMURFS_FAIL, payload: err.response }))
    }
}

export const addToVillage = (newSmurf) => {
    return dispatch => {
        dispatch({ type: POST_SMURFS_START })
        axios
            .post(`http://localhost:3333/smurfs`, newSmurf)
            .then(res => dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: POST_SMURFS_FAIL, payload: err.response }))
    }
}