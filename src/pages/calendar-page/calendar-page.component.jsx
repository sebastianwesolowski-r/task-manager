import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Plus} from '../../assets/plus.svg';
import {ReactComponent as Pending} from '../../assets/pending.svg';
import {ReactComponent as Completed} from '../../assets/completed.svg';

import {CalendarPageContainer, MonthPicker, CalendarContainer, Calendar, Weekdays, DaysContainer, Day, TaskDots, Dot, CalendarTasksSection, DateHeader, TasksContainer, Task, TaskData} from './calendar-page.styles';

import {add0ToNumber} from '../../utils/utils';

import {selectUserTasks} from '../../redux/tasks/tasks-selectors';

import CustomButton from '../../components/custom-button/custom-button.component';
import AddTask from '../../components/add-task/add-task.component';

const date = new Date();

const CalendarPage = ({userTasks}) => {

    let current = `${new Date().getFullYear()}-${add0ToNumber(new Date().getMonth() + 1)}`;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [days, setDays] = useState(null);
    const [pickedDay, setPickedDay] = useState(`${new Date().getFullYear()}-${add0ToNumber(new Date().getMonth())}-${new Date().getDate()}`);
    const [selectedTasks, setTasks] = useState([]);
    const [taskPopup, setTaskPopup] = useState(false);

    useEffect(() => {
        handleChange(current, "initial");
    }, [])

    useEffect(() => {
        selectTasksForDay();
    }, [userTasks, pickedDay])

    const showTaskPopup = () => setTaskPopup(!taskPopup);

    let keyCount = 0;
    const getKey = () => keyCount++;

    const renderDots = numberOfTasks => {
        let numberOfDots = [];
        for (let i = 0; i < numberOfTasks; i++) {
            if (i === 3) {
                numberOfDots.push({key: i, overflow: 1})
                break;
            }
            numberOfDots.push({key: i});
        }
        return numberOfDots.map(({key, overflow}) => <Dot key={key} overflow={overflow} />);
    };

    const getNumberOfTasksForDay = day => {
        const matchingTasks = [];
        userTasks.forEach(task => {
            const taskDate = new Date(task.deadline);
            const dateToCompare = `${taskDate.getFullYear()}-${add0ToNumber(taskDate.getMonth())}-${taskDate.getDate()}`;
            if(dateToCompare === day) {
                matchingTasks.push(task);
            }
        })
        return matchingTasks.length;
    }

    const selectTasksForDay = () => {
        const matchingTasks = [];
        userTasks.forEach(task => {
            const taskDate = new Date(task.deadline);
            const dateToCompare = `${taskDate.getFullYear()}-${add0ToNumber(taskDate.getMonth())}-${taskDate.getDate()}`;
            if(dateToCompare === pickedDay) {
                matchingTasks.push(task);
            }
        })
        setTasks(matchingTasks);
    }

    const selectDay = (e, type) => {
        switch(type) {
            case "prev-month":
            case "next-month":
            case "prev-day":
                return;
            case "today":
            case "current-month":
                return setPickedDay(`${date.getFullYear()}-${add0ToNumber(date.getMonth())}-${e.target.textContent}`)
            default: return;
        }
    }

    const getDayFullDate = (dayOfMonth, type) => {
        switch(type) {
            case "prev-month": return `${date.getFullYear()}-${add0ToNumber(date.getMonth() - 1)}-${dayOfMonth}`;
            case "next-month": return `${date.getFullYear()}-${add0ToNumber(date.getMonth() + 1)}-${dayOfMonth}`;
            case "prev-day":
            case "today":
            case "current-month":
                return `${date.getFullYear()}-${add0ToNumber(date.getMonth())}-${dayOfMonth}`
            default: return;
        }
    }

    const getDays = (firstDayIndex, lastDay, prevLastDay, nextDays) => {
        let daysOfMonth = [];
        for (let x = firstDayIndex; x > 0; x--) {
            let createdDay = {dayOfMonth: prevLastDay - x + 1, type: "prev-month"};
            createdDay.thisDay = getDayFullDate(createdDay.dayOfMonth, createdDay.type);
            createdDay.numberOfTasks = getNumberOfTasksForDay(createdDay.thisDay);
            daysOfMonth.push(createdDay);
        }
        for (let i = 1; i <= lastDay; i++) {
            if (
              i === new Date().getDate() &&
              date.getMonth() === new Date().getMonth()
            ) {
              let createdDay = {dayOfMonth: i, type: "today"};
              createdDay.thisDay = getDayFullDate(createdDay.dayOfMonth, createdDay.type);
              createdDay.numberOfTasks = getNumberOfTasksForDay(createdDay.thisDay);
              daysOfMonth.push(createdDay);
            } else if (i < new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                let createdDay = {dayOfMonth: i, type: "prev-day"};
                createdDay.thisDay = getDayFullDate(createdDay.dayOfMonth, createdDay.type);
                createdDay.numberOfTasks = getNumberOfTasksForDay(createdDay.thisDay);
                daysOfMonth.push(createdDay);
            } else {
                let createdDay = {dayOfMonth: i, type: "current-month"};
                createdDay.thisDay = getDayFullDate(createdDay.dayOfMonth, createdDay.type);
                createdDay.numberOfTasks = getNumberOfTasksForDay(createdDay.thisDay);
                daysOfMonth.push(createdDay);
            }
        }
        for (let j = 1; j <= nextDays; j++) {
            let createdDay = {dayOfMonth: j, type: "next-month"};
            createdDay.thisDay = getDayFullDate(createdDay.dayOfMonth, createdDay.type);
            createdDay.numberOfTasks = getNumberOfTasksForDay(createdDay.thisDay);
            daysOfMonth.push(createdDay);
        }
        return daysOfMonth;
    }

    const handleChange = (e, initial) => {
        let pickedDate;
        if (initial) {
            pickedDate = e;
        } else {
            pickedDate = e.target.value;
        }
        const pickedDateYear = parseInt(pickedDate.substring(0,5));
        const pickedDateMonth = parseInt(pickedDate.substring(5,8));
        date.setDate(1);
        date.setMonth(pickedDateMonth - 1);
        date.setFullYear(pickedDateYear);

        const lastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();
        const prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();
        const firstDayIndex = date.getDay();
        const lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();
        const nextDays = 7 - lastDayIndex - 1;
        let daysOfMonth = getDays(firstDayIndex, lastDay, prevLastDay, nextDays);
        setDays(daysOfMonth);
    }

    return (
        <>
            <CalendarPageContainer>
                <MonthPicker type="month" onChange={handleChange} defaultValue={current}/>
                <CalendarContainer>
                    {
                        days ? (
                            <Calendar>
                                <Weekdays>
                                    <div>SUN</div>
                                    <div>MON</div>
                                    <div>TUE</div>
                                    <div>WED</div>
                                    <div>THU</div>
                                    <div>FRI</div>
                                    <div>SAT</div>
                                </Weekdays>
                                <DaysContainer>
                                    {
                                        days.map(({dayOfMonth, type, thisDay, numberOfTasks}) => (
                                            <Day key={getKey()} type={type} pickedDay={pickedDay} thisDay={thisDay}>
                                                <div onClick={(e) => selectDay(e, type)}>{dayOfMonth}</div>
                                                <TaskDots>
                                                    {renderDots(numberOfTasks)}
                                                </TaskDots>
                                            </Day>
                                        ))
                                    }
                                </DaysContainer>
                            </Calendar>
                        ) : null
                    }
                    <CalendarTasksSection>
                        <DateHeader>
                            {pickedDay.substring(8, 10)} <span>{months[parseInt(pickedDay.substring(5,7))]}</span>
                        </DateHeader>
                        <p style={{fontSize: "1.7rem", margin: "20px 0"}}>Tasks</p>
                        <TasksContainer>
                            {selectedTasks.sort(({deadline: previousDeadline}, {deadline: currentDeadline}) => new Date(previousDeadline) - new Date(currentDeadline)).map(task => <Task key={task._id}>
                                {task.completed ? <Completed /> : <Pending />}
                                <TaskData>
                                    <p>{task.title}</p>
                                    <p>{new Date(task.deadline).getHours()} : {add0ToNumber(new Date(task.deadline).getMinutes())}</p>
                                </TaskData>
                            </Task>)}
                        </TasksContainer>
                    </CalendarTasksSection>
                </CalendarContainer>
                <CustomButton buttonStyle="task-add" onClick={() => showTaskPopup()}><Plus /></CustomButton>
            </CalendarPageContainer>
            {
                taskPopup ? (
                    <AddTask showTaskPopup={showTaskPopup} defaultDate={pickedDay}/>
                ) : null
            }
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    userTasks: selectUserTasks
});

export default connect(mapStateToProps)(CalendarPage);