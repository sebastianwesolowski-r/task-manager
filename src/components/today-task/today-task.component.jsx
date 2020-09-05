import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Edit} from '../../assets/edit.svg';
import {ReactComponent as Submit} from '../../assets/submit.svg';

import {TaskContainer, TaskHeader, TaskInfo, EditTitle} from './today-task.styles';

import CustomButton from '../custom-button/custom-button.component';

import {selectAuthToken} from '../../redux/user/user-selectors';
import {updateTaskStart, deleteTaskStart} from '../../redux/tasks/tasks-actions';

const TodayTask = ({task: {_id, title, deadline, completed, color}, token, updateTask, deleteTask}) => {

    const [taskEdit, setTaskEdit] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');

    const handleChange = e => {
        setEditedTitle(e.target.value);
    }

    const updateTaskTitle = () => {
        if(editedTitle.length > 0) {
            updateTask(token, _id, {title: editedTitle});
            setEditedTitle('');
            setTaskEdit(false);
            return;
        }
        setTaskEdit(false);
        return;
    }

    const taskDate = new Date(deadline);
    const getTaskDateMinutes = () => {
        let minutes = taskDate.getMinutes();
        if(minutes < 10) {
            return `0${minutes}`;
        }
        return minutes;
    }

    return (
        <TaskContainer completed={completed}>
            <TaskHeader color={color}>
                <TaskInfo>
                    <p>Task {taskEdit ? <EditTitle type="text" onChange={handleChange} maxlength="33" /> : title}</p>
                    <p>{taskDate.getHours()} : {getTaskDateMinutes()}</p>
                </TaskInfo>
                {
                    completed ? null : (
                        taskEdit ? <Submit onClick={() => updateTaskTitle()} /> : <Edit onClick={() => setTaskEdit(!taskEdit)} />
                    )
                }
            </TaskHeader>
            <span>status: {completed ? 'Done' : 'Pending'}</span>
            <div style={{marginBottom: '10px', marginLeft: '20px'}}>
                {
                    completed ? null : <CustomButton buttonStyle="task-done" color={color} onClick={() => updateTask(token, _id, {completed: true})}>Done</CustomButton>
                }
                <CustomButton buttonStyle="task-remove" color={color} onClick={() => deleteTask(token, _id)}>Remove</CustomButton>
            </div>
        </TaskContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectAuthToken
});

const mapDispatchToProps = dispatch => ({
    updateTask: (token, taskId, updateData) => dispatch(updateTaskStart(token, taskId, updateData)),
    deleteTask: (token, taskId) => dispatch(deleteTaskStart(token, taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodayTask);