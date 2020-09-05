import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Plus} from '../../assets/plus.svg';

import {HomePageContainer, TasksHeader, TasksContainer, AddTaskButton} from './home-page.styles';

import TodayTask from '../../components/today-task/today-task.component';
import AddTask from '../../components/add-task/add-task.component';

import {selectTodayTasks} from '../../redux/tasks/tasks-selectors';

const HomePage = ({todayTasks}) => {

    const [taskPopup, setTaskPopup] = useState(false);

    const showTaskPopup = () => setTaskPopup(!taskPopup);

    console.log(todayTasks);
    return (
        <>
            <HomePageContainer>
                <TasksHeader>
                    Today Tasks
                    {
                        todayTasks ? (
                            <p>{todayTasks.length} Tasks | <span>{todayTasks.filter(task => task.completed === true).length} Done</span></p>
                        ): (
                            <p>0 tasks</p>
                        )
                    }
                </TasksHeader>
                <TasksContainer>
                    {todayTasks.sort(({deadline: previousDeadline}, {deadline: currentDeadline}) => new Date(previousDeadline) - new Date(currentDeadline)).map(task => <TodayTask key={task._id} task={task} />)}
                </TasksContainer>
                <AddTaskButton onClick={() => showTaskPopup()}><Plus /></AddTaskButton>
            </HomePageContainer>
            {
                taskPopup ? (
                    <AddTask showTaskPopup={showTaskPopup} />
                ) : null
            }
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    todayTasks: selectTodayTasks
});

export default connect(mapStateToProps)(HomePage);