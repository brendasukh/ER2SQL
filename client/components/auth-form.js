import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth, signup} from '../store'

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form className = 'login' onSubmit={handleSubmit} name={name}>
        { displayName && (displayName === 'Sign Up')
        ?<div>
          <label htmlFor='username'><small>Name</small></label>
          <input name='username' type='text' />
        </div>
        : ''
        }
        <div className = 'login-child1'>
          <label htmlFor='email'><small>Email</small></label>
          <input name='email' type='text' />
        </div>
        <div className = 'login-child2'>
          <label htmlFor='password'><small>Password</small></label>
          <input name='password' type='password' />
        </div>
        <div className = 'login-child3'>
          <button type='submit'>{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href='/auth/google'>{displayName} with Google</a>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault();
      let name;
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      if (formName === 'signup'){
        name = evt.target.username.value;
      }
      (formName === 'signup')
      ? dispatch(signup(name, email, password, formName))
      : dispatch(auth(email, password, formName));
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
