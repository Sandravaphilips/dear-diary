import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

const SignUp = props => {
    const onHandleSubmit = e => {
        e.preventDefault()
        if(e.target.password !== e.target.confirmPassword) {
            alert('Passwords must match!!')
        } else {
            const payload = {
                username: e.target.username,
                emailAddress: e.target.email,
                password: e.target.password
            }
            axios.post('https://my-dear-diary.herokuapp.com/api/auth/register', payload)
            .then(response => {
                localStorage.setItem("token", response.data.token);            
                props.history.push('/login');
            })
            .catch(error => {
                alert(error);
            });
        }        
    }

    return(
        <div>
            <form>
                <TextField required id="username" label="Username" defaultValue="JohnSmith" />
                <TextField required id="email" label="Email Address" defaultValue="johnsmith@gmail.com" />                
                <TextField
                    required
                    id="password"
                    label="Password"
                    type="password"
                    defaultValue='#2password@'
                /> 
                <TextField
                    required
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    defaultValue='#2password@'
                />
                <Button onClick={onHandleSubmit} variant="contained" color="primary">
                    Submit
                </Button>

                <p>Already have an account? <Link to='/login'>Log In</Link></p> 
            </form>
        </div>
    )
};

export default SignUp