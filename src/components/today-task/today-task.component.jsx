import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Edit} from '../../assets/edit.svg';
import {ReactComponent as Submit} from '../../assets/submit.svg';

import {TaskContainer, TaskHeader, TaskInfo, EditTitle} from './today-task.styles';

import CustomButton from '../custom-button/custom-button.component';
import Spinner from '../spinner/spinner.component';

import {add0ToNumber} from '../../utils/utils';

import {selectAuthToken} from '../../redux/user/user-selectors';
import {updateTaskStart, deleteTaskStart} from '../../redux/tasks/tasks-actions';
import {selectDeletingProcess, selectUpdatingProcess} from '../../redux/tasks/tasks-selectors';

const TodayTask = ({task: {_id, title, deadline, completed, color}, token, updateTask, deleteTask, deletingProcess, updatingProcess}) => {

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

    return (
        <TaskContainer completed={completed}>
            <TaskHeader color={color}>
                <TaskInfo>
                    <p>Task {taskEdit ? <EditTitle color={color} type="text" onChange={handleChange} maxLength="33" /> : title}</p>
                    <p>{taskDate.getHours()} : {add0ToNumber(taskDate.getMinutes())}</p>
                </TaskInfo>
                {
                    completed ? null : (
                        taskEdit ? updatingProcess ? <Spinner /> : <Submit onClick={() => updateTaskTitle()} /> : <Edit onClick={() => setTaskEdit(!taskEdit)} />
                    )
                }
            </TaskHeader>
            <span>status: {completed ? 'Done' : 'Pending'}</span>
            <div style={{marginBottom: '10px', marginLeft: '20px'}}>
                {
                    completed ? null : <CustomButton buttonStyle="task-done" color={color} onClick={() => updateTask(token, _id, {completed: true})}>Done</CustomButton>
                }
                <CustomButton buttonStyle="task-remove" color={color} onClick={() => deleteTask(token, _id)} disabled={deletingProcess ? true : false}>{deletingProcess ? <Spinner /> : "Remove"}</CustomButton>
            </div>
        </TaskContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectAuthToken,
    deletingProcess: selectDeletingProcess,
    updatingProcess: selectUpdatingProcess
});

const mapDispatchToProps = dispatch => ({
    updateTask: (token, taskId, updateData) => dispatch(updateTaskStart(token, taskId, updateData)),
    deleteTask: (token, taskId) => dispatch(deleteTaskStart(token, taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodayTask);