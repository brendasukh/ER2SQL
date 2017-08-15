import React from 'react';
import {connect} from 'react-redux';

const Field = (props) => {
    const types = props.dataTypes;
    const curTable = props.currentTable;
    return (
        <form onSubmit={(e)=>props.addFieldToTable(curTable)}>
            <label>Name: <input type='text' name='columnName' /></label>
            <label>Type: <select name='type'>
                    <option>-</option>
                    {types.map((type) => <option value={type} key={type}>{type}</option>)}
                </select>
            </label>
            <label>Default Value: <input type='text' name='defaultValue' /></label>
            <label>Validations: <select><option>-</option></select></label>
            <input type='submit' />
        </form>
    )
}

const mapState = (state) => {
    return {
        dataTypes : state.datatypes,
        currentTable: state.currentTable
    }
}

const mapDispatch = (dispatch) => {
    return {
        addFieldToTable(e, curTable){
            e.preventDefault();
            const name = e.target.name.value;
            const type = e.target.type.value;
            const defaultValue = e.target.defaultValue.value;
            dispatch(addFieldToTable(curTable, name, {type, defaultValue}));
        }
    }
}

export default connect(mapState, mapDispatch)(Field);