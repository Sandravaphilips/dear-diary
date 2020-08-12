import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

import logo from './assets/logo.svg';
import { LoginStyle } from './style';

const initialFormValues = {
    emailAddress: '',
    password: ''
};

const Login = props => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const onEmailChange = e => {
        setFormValues({...formValues, emailAddress: e.target.value});
    }

    const onPasswordChange = e => {
        setFormValues({...formValues, password: e.target.value});
    }

    const onHandleSubmit = e => {
        e.preventDefault()
        axios.post('https://my-dear-diary.herokuapp.com/api/auth/login', formValues)
        .then(response => {
            localStorage.setItem("token", response.data.token);            
            props.history.push('/dashboard');
        })
        .catch(error => {
            alert(error);
        });
    }
    return(
        <LoginStyle>
            <figure>
                <img src={logo} alt='app-logo' />
            </figure>
            <div className='form-group'>
                <h1>Login</h1>
                <form className='form-content'>
                    <TextField required id="email" label="Email Address" placeholder="johnsmith@gmail.com" onChange={onEmailChange} />                
                    <TextField
                        required
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        placeholder='#2password@'
                        onChange={onPasswordChange}
                    /> 
                    <Button onClick={onHandleSubmit} variant="contained" color="primary">
                        Login
                    </Button>

                    <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p> 
                </form>
            </div>
        </LoginStyle>
    )
};

export default Login