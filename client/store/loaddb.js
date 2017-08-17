// import axios from 'axios';

// /* ------------   ACTION TYPES     ------------------ */
// const LOAD = 'LOAD';

// /* ------------   ACTION CREATORS     ------------------ */
// const load = (userDbs) => ({type: LOAD, userDbs });

// /* ------------       REDUCERS     ------------------ */
// export default function reducer(state = {}, action){

// }

// /* ------------   THUNK CREATORS     ------------------ */
// // unsure about the route path
// export const getUserDatabase = (userId) => dispatch => {
//   axios.get(`/api/users/${userId}/databases/load`)
//   .then(userDbs => {
//     console.log(userDbs.data);
//     dispatch(load(userDbs.data));
//   })
//   .catch(err => console.error(`Loading databases for
//   ${userId} failed`, err));
// }
