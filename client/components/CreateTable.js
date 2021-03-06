import React, {Component} from 'react';
import {AddField} from '../components';
import store, {addTableToTemp} from '../store';

class CreateTable extends Component{
    constructor(){
        super();
        this.state = {
            tableName : '',
            fields : []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState({
            fields : [...this.state.fields, {}]
        });
    }

    handleChange(e){
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        if (name==='tableName') {this.setState({tableName : value})}
        else {
            this.state.fields[e.target.id] = Object.assign({}, this.state.fields[e.target.id], {[name]: value});
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        let tableName = this.state.tableName;
        let curFields = this.state.fields;
        let curState = store.getState();
        let database = curState.database;
        let table = {tableName, fields : {}, database};
        for (var field of curFields){
            let temp = field.columnName;
            delete field['columnName'];
            table.fields[temp] = field;
        }
        store.dispatch(addTableToTemp(table));
        this.setState({
            tableName : '',
            fields : []
        });
    }

    render(){
        let fieldsArr = [...Array(this.state.fields.length).keys()];
        return (
            <form onSubmit={this.handleSubmit}>
            <label>Table Name: <input type='text' name='tableName' onChange={this.handleChange} value={this.state.tableName}/></label>
            <button onClick={this.handleClick}>Add Field</button>
            <input type='submit' disabled={this.state.tableName.length === 0}/>
            <hr />
            {fieldsArr.map(each => <AddField key={each} id={each} handleChange={this.handleChange}/>)}
            </form>
        );
    }
}

export default CreateTable;