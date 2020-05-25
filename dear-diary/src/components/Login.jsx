import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

const Login = props => {
    const onHandleSubmit = e => {
        e.preventDefault()
        const payload = {
            emailAddress: e.target.email,
            password: e.target.password
        }
        axios.post('https://my-dear-diary.herokuapp.com/api/auth/login', payload)
        .then(response => {
            localStorage.setItem("token", response.data.token);            
            props.history.push('/diary');
        })
        .catch(error => {
            alert(error);
        });
    }
    return(
        <div>
            <form>
                <TextField required id="email" label="Email Address" defaultValue="johnsmith@gmail.com" />                
                <TextField
                    required
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    defaultValue='#2password@'
                /> 
                <Button onClick={onHandleSubmit} variant="contained" color="primary">
                    Submit
                </Button>

                <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p> 
            </form>
        </div>
    )
};

export default Login