import React from 'react';
import { Button } from '@material-ui/core';

const Dashboard = props => {
    const onHandleSubmit = e => {
        e.preventDefault()
        let d = Date.now();
        d = new Date(d);
        d = d.toLocaleDateString();
        d = d.replace(/\//g, '-')
        props.history.push(`/diary/${d}`)
    };

    const onCalendarSubmit = e => {
        e.preventDefault()
        props.history.push('/calendar')
    };

    return(
        <div>
            <h3>Welcome</h3>
            <h4>Are you ready to tell me about your day?</h4>
            <Button onClick={onHandleSubmit} variant="contained" color="primary">
                Let's Go
            </Button>
            <h4>Or would you rather see or update what you saved previously? </h4>
            <Button onClick={onCalendarSubmit} variant="contained" color="primary">
                Go to Calendar
            </Button>
        </div>
    )
};

export default Dashboard