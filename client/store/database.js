import axios from 'axios';
import {getMetatables} from './index';

/* ------------   ACTION TYPES     ------------------ */

const CREATE = 'CREATE';
const LOAD = 'LOAD';
const REMOVE = 'REMOVE';


/* ------------   ACTION CREATORS     ------------------ */

const create = newDb => ({type: CREATE, newDb});
const load = (userDb) => ({type: LOAD, userDb });
const remove = () => ({type: REMOVE});

/* ------------       REDUCERS     ------------------ */

export default function reducer (state = {}, action){
  switch (action.type){
    case CREATE:
      return action.newDb;
    case LOAD:
      return action.userDb;
    case REMOVE:
      return {};
    default:
      return state;
  }
}

/* ------------   THUNK CREATORS     ------------------ */
// TODO: handleError on UI when Thunk hits the catch block: for later
export const createDatabase = (dbName, userId) => dispatch => {
    axios.post(`/api/users/${userId}/database/${dbName}`)
       .then(res => {
         dispatch(create(res.data));
       })
       .catch(err => console.error(`Creating databse ${dbName} unsuccessfull`, err));
}

// Chaining loadDatabe to loadMetatables!! 
export const loadDatabase = (selectedDb) => dispatch => {
  // dispatch(getMetatables(selectedDb.id));
  dispatch(load(selectedDb));
}

export const clearDatabase = () => dispatch => {
  dispatch(remove());
}
