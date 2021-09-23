import React from 'react';
import FormIn from '../form-input/form-input.js'
import CustomButton from '../button/button.js'
import './sign-in.scss';
import { signInWithGoogle } from '../../firebase/firebase.ut.js';

class SignIn extends React.Component {
	constructor(props){
		super(props);
		this.state={
			email:'',
			password: ''
		}
	}

handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

   render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormIn
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormIn
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;