import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {HomePageContainer, TasksHeader} from './home-page.styles';

import {getTasksStart} from '../../redux/tasks/tasks-actions';
import {selectUserTasks} from '../../redux/tasks/tasks-selectors';

const HomePage = ({auth, userTasks, getTasksStart}) => {

    useEffect(() => {
        getTasksStart(auth);
    }, []);
    console.log(userTasks);
    return (
        <HomePageContainer>
            <TasksHeader>
                Today Tasks
                <p>3 tasks | <span>1 done</span></p>
            </TasksHeader>
        </HomePageContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    userTasks: selectUserTasks
});

const mapDispatchToProps = dispatch => ({
    getTasksStart: authToken => dispatch(getTasksStart(authToken))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);