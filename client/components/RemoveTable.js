import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'; 
import store, {deleteTable} from '../store';

function RemoveTable (props){
  // const {tablename} = props;
  let dummyData =['monica', 'brenda', 'vinaya', 'kelaiya'];
  let handleSubmit = props.handleSubmit;
    return(
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Table Name : 
              <select name='tableName'><option>-</option>
                {dummyData.map(name => <option key={name} value={name}>{name}</option>)}
              </select>
            </label>
            <input type='submit' />
          </form>
        </div>
      )
}

const mapStateToProps = function(state, ownProps){
  return {
    // tables : state.loaddb.tables
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // delete(event){
    //   event.preventDefault();
    //   const tableName = e.target.tablename.value;
    //   onClick: () => dispatch(deleteTable(table));
    // },
    handleSubmit(e){
      e.preventDefault();
      dispatch(deleteTable(e.target.tableName.value));
      console.log('submitted!', e.target.tableName.value);
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RemoveTable));