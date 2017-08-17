// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {getUserDatabase} from '../store';

// class LoadDb extends Component {

//   constructor(props){
//     super(props);

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit (evt){
//     evt.preventDefault();
//   }

//   render(){
//     return (
//       <div>
//         <h1> In LoadDb </h1>
//         <form onSubmit= {this.handleSubmit}>
//           <label htmlFor="load">Select database</label>
//           <select name="load">
//             {}
//           </select>
//           <button type="submit">Load DB</button>
//         </form>
//       </div>
//     )
//   }
// }

// const mapStateToProps = ({user}) => ({user});

// const mapDisptachProps = (dispatch) =>{
//   return {
//     getUserDatabase(userId){
//       dispatch(getUserDatabase(userId))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDisptachProps)(LoadDb);
