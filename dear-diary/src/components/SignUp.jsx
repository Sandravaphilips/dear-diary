import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

const initialFormValues = {
    emailAddress: '',
    password: '',
    username: ''
};

const SignUp = props => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [confirmPassword, setConfirmPassword] = useState('');

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
        if(formValues.password !== confirmPassword) {
            alert('Passwords must match!!')
        } else {
            axios.post('https://my-dear-diary.herokuapp.com/api/auth/register', formValues)
            .then(response => {
                localStorage.setItem("token", response.data.token);            
                props.history.push('/dashboard');
            })
            .catch(error => {
                alert(error);
            });
        }        
    }

    return(
        <div>
            <form>
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
                    Submit
                </Button>

                <p>Already have an account? <Link to='/login'>Log In</Link></p> 
            </form>
        </div>
    )
};

export default SignUp