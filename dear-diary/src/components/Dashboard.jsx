import React from 'react';
import { Button } from '@material-ui/core';
import { DashboardStyle } from './style';
import DiaryCalendar from './DiaryCalendar';
import Navigation from './Navigation.';

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
        <DashboardStyle>
            <Navigation />
            <div>
                <div className='content'>
                    <h1>Welcome!</h1>
                    <h4>Are you ready to tell me about your day?</h4>
                    <Button className='dashboard-button' onClick={onHandleSubmit} variant="contained" color="primary">
                        Let's Go
                    </Button>
                    <h4>Or would you rather see or update what you saved previously? </h4>
                    <Button className='dashboard-button' onClick={onCalendarSubmit} variant="contained" color="primary">
                        Go to Calendar
                    </Button>
                </div>
                <DiaryCalendar {...props} />
            </div>
        </DashboardStyle>
    )
};

export default Dashboard