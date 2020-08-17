import React from 'react';
import DiaryCalendar from './DiaryCalendar';
import Navigation from './Navigation.';
import { CalendarStyle } from './style';

const Calendar = props => {
    return(
        <CalendarStyle>
            <Navigation />
            <p>Note To Self: Click on day to view<span role='img' aria-label='smiling face'>😊</span></p>
            <DiaryCalendar {...props} />
            <footer>
                <p>&copy; Dear Diary</p>
            </footer>
        </CalendarStyle>
    )
}

export default Calendar