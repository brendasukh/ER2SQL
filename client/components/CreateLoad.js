import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUserDatabases} from '../store'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {CreateDB, LoadDB} from './index';

class CreateLoad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showCreate: false,
            showLoad: false,
        }
        this.showCreateForm = this.showCreateForm.bind(this);
        this.showLoadForm = this.showLoadForm.bind(this);
    }
    showCreateForm(evt) {
        evt.preventDefault()
        this.setState({
            showCreate: true,
            showLoad: false
        })
    }

    showLoadForm(evt) {
        evt.preventDefault()
        this.setState({
            showCreate: false,
            showLoad: true
        })
        this.props.getUserDatabases(this.props.user.id);
    }

    render() {
        return (
            <div>
                <button onClick={this.showCreateForm}>Create Db</button>
                <button onClick={this.showLoadForm}>Load DB</button>
                {this.state.showLoad ? <LoadDB/> : <div/>}
                {this.state.showCreate ? <CreateDB/> : <div/>}
            </div>
        )
    }
}

const mapStateToProps = ({user, userdbs}) => ({user, userdbs});

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDatabases(userId){
      dispatch(getUserDatabases(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLoad);
