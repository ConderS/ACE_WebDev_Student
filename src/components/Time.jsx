import React from 'react';
import Clock from 'react-live-clock';

import '../styles/components/time.css';

function Time(props) {
    const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const date = new Date();

    const month = MONTH_NAMES[date.getMonth()];
    const monthDay = date.getDate();
    const day = DAYS[date.getDay()];
    
    return (
        <div className="time-container">
            <Clock format={'h:mm:ss'} ticking={true} timezone={'US/Central'}className="time-main" />
            <p className="date">{day}</p>
            <p className="date">{month} {monthDay}</p>
        </div>
        )
}

export default Time;