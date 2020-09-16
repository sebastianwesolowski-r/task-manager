import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Plus} from '../../assets/plus.svg';

import {HomePageContainer, TasksHeader, TasksContainer, LoadingOverlay, TasksError} from './home-page.styles';

import TodayTask from '../../components/today-task/today-task.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import AddTask from '../../components/add-task/add-task.component';
import Spinner from '../../components/spinner/spinner.component';

import {selectError, selectTodayTasks, selectFetchingProcess} from '../../redux/tasks/tasks-selectors';

const HomePage = ({todayTasks, fetchingProcess, tasksError}) => {

    const [taskPopup, setTaskPopup] = useState(false);

    const showTaskPopup = () => setTaskPopup(!taskPopup);

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
                {
                    tasksError ? (
                        <TasksError>Something went wrong. Please re-authenticate.</TasksError>
                    ) : null
                }
                <TasksContainer>
                    {todayTasks.sort(({deadline: previousDeadline}, {deadline: currentDeadline}) => new Date(previousDeadline) - new Date(currentDeadline)).map(task => <TodayTask key={task._id} task={task} />)}
                </TasksContainer>
                <CustomButton buttonStyle="task-add" onClick={() => showTaskPopup()}><Plus /></CustomButton>
            </HomePageContainer>
            {
                taskPopup ? (
                    <AddTask showTaskPopup={showTaskPopup} />
                ) : null
            }
            {
                fetchingProcess ? (
                    <LoadingOverlay>
                        <Spinner bigger/>
                    </LoadingOverlay>
                ) : null
            }
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    tasksError: selectError,
    todayTasks: selectTodayTasks,
    fetchingProcess: selectFetchingProcess
});

export default connect(mapStateToProps)(HomePage);