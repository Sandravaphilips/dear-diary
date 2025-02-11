import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { store } from 'react-notifications-component';
import axios from 'axios';
import { TextField, Button, CircularProgress } from '@material-ui/core';

import logo from './assets/logo.svg';
import { SignUpStyle } from './style';

const initialFormValues = {
    emailAddress: '',
    password: '',
    username: ''
};

const SignUp = props => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onEmailChange = e => {
        setFormValues({...formValues, emailAddress: e.target.value});
    }

    const onPasswordChange = e => {
        setFormValues({...formValues, password: e.target.value});
    }

    const onUsernameChange = e => {
        setFormValues({...formValues, username: e.target.value});
    }

    const onConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value);
    }

    const onHandleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        if(formValues.password !== confirmPassword) {
            alert('Passwords must match!!')
        } else {
            axios.post('https://my-dear-diary.herokuapp.com/api/auth/register', formValues)
            .then(response => {
                localStorage.setItem("token", response.data.token);            
                props.history.push('/dashboard');
            })
            .catch(error => {
                store.addNotification({
                    title: "Error!",
                    message: error.response.data.message,
                    type: "warning",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: true
                    }                
                });
            });
        }        
    }

    return(
        <SignUpStyle>
            <figure>
                <img src={logo} alt='app-logo' />
            </figure>
            <div className='form-group'>
                <h1>Sign Up</h1>
                <form className='form-content'>
                    <TextField
                        onChange={onUsernameChange} 
                        required 
                        id="username" 
                        label="Username" 
                        placeholder="JohnSmith" 
                    />
                    <TextField 
                        onChange={onEmailChange}
                        required 
                        id="email" 
                        label="Email Address" 
                        placeholder="johnsmith@gmail.com" 
                    />                
                    <TextField
                        onChange={onPasswordChange}
                        required
                        id="password"
                        label="Password"
                        type="password"
                        placeholder='#2password@'
                    /> 
                    <TextField
                        onChange={onConfirmPasswordChange}
                        required
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        placeholder='#2password@'
                    />
                    <Button onClick={onHandleSubmit} variant="contained" color="primary">
                        {
                            loading ? <CircularProgress color='white' /> : 'Sign Up'
                        }
                    </Button>

                    <p>Already have an account? <Link to='/'>Log In</Link></p> 
                </form>
            </div>
        </SignUpStyle>
    )
};

export default SignUp