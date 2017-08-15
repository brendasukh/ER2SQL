import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_DATA_TYPES = 'GET_DATA_TYPES';

/**
 * INITIAL STATE
 */
const datatypes = []

/**
 * ACTION CREATORS
 */
const getDataTypes = datatypes => ({type: GET_DATA_TYPES, datatypes});

/**
 * THUNK CREATORS
 */
export const fetchDatatypes = () =>
  dispatch =>
    axios.get('/api/datatypes')
    .then(res => 
    dispatch(getDataTypes(res.data)))
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function (state = datatypes, action) {
  switch (action.type) {
    case GET_DATA_TYPES: 
      return action.datatypes;
    default:
      return state
  }
}
