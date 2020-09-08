import React, {useState} from 'react';

import {CalendarPageContainer, MonthPicker} from './calendar-page.styles';

const CalendarPage = () => {

    let pickedMonth = "";
    const pickedDate = new Date();

    const handleChange = e => {
        pickedMonth = e.target.value;
        pickedDate.setDate(1);
        pickedDate.setMonth(pickedMonth.substring(5,8) - 1);
        const lastDay = new Date(
            pickedDate.getFullYear(),
            pickedDate.getMonth() + 1,
            0
        ).getDate();
        const prevLastDay = new Date(
            pickedDate.getFullYear(),
            pickedDate.getMonth(),
            0
        ).getDate();
        const firstDayIndex = pickedDate.getDay();
        const lastDayIndex = new Date(
            pickedDate.getFullYear(),
            pickedDate.getMonth() + 1,
            0
        ).getDay();
        const nextDays = 7 - lastDayIndex - 1;
        let days;
        for (let x = firstDayIndex; x > 0; x--) {
            days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        }
        for (let i = 1; i <= lastDay; i++) {
            if (
              i === new Date().getDate() &&
              pickedDate.getMonth() === new Date().getMonth()
            ) {
              days += `<div class="today">${i}</div>`;
            } else {
              days += `<div>${i}</div>`;
            }
        }
        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="next-date">${j}</div>`;
        }
    }


    return (
        <CalendarPageContainer>
            <MonthPicker type="month" onChange={handleChange} />
        </CalendarPageContainer>
    );
};

export default CalendarPage;