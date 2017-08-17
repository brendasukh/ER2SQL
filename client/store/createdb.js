import axios from 'axios';

/* ------------   ACTION TYPES     ------------------ */

const CREATE = 'CREATE';


/* ------------   ACTION CREATORS     ------------------ */

const create = newDb => ({type: CREATE, newDb});

/* ------------       REDUCERS     ------------------ */

export default function reducer (state = {}, action){
  switch (action.type){
    case CREATE:
      return action.newDb;
    default:
      return state;
  }
}

/* ------------   THUNK CREATORS     ------------------ */
// unsure about the route path
export const createDatabase = (dbName, userId) => dispatch => {
    axios.post(`/api/users/${userId}/${dbName}`)
       .then(res => {
         console.log(res.data);
         dispatch(create(res.data));
       })
       .catch(err => console.error(`Creating databse ${dbName} unsuccessfull`, err));
}
