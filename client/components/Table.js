import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTableToTemp} from '../store';

const Table = (props) => {
    return (
        <form onSubmit={props.onAddTable}>
            <label>Table Name: <input type='text' name='tableName'/></label>
            <input type='submit' />
        </form>
    )
}

const mapState = (state) => {
    return {

    }
}

const mapDispatch = (dispatch) => {
    return {
        onAddTable(e){
            e.preventDefault();
            const tableName = e.target.tableName.value;
            const table = {tableName, fields : {}};
            dispatch(addTableToTemp(table));
        } 
    }
}

export default connect(mapState, mapDispatch)(Table);