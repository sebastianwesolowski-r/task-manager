import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {AddTaskContainer, AddTaskHeader, ColorContainer, ColorBox} from './add-task.styles';

import FormInput from '../form-input/form-input.component';
import Overlay from '../overlay/overlay.component';
import CustomButton from '../custom-button/custom-button.component';

import {selectAuthToken} from '../../redux/user/user-selectors';
import {addTaskStart} from '../../redux/tasks/tasks-actions';

const AddTask = ({showTaskPopup, token, addTask}) => {

    const [taskData, setTaskData] = useState({title: '', time: '', date: ''});
    const {title, time, date} = taskData;
    const [taskColor, setTaskColor] = useState("#7E5398");

    const handleChange = e => {
        const {value, name} = e.target;
        setTaskData({...taskData, [name]: value});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const deadline = new Date(`${date}T${time}`);
        await addTask(token, {title, deadline, color: taskColor});
        showTaskPopup();
    };

    return (
        <>
            <AddTaskContainer>
                <AddTaskHeader>CREATE NEW TASK</AddTaskHeader>
                <form onSubmit={handleSubmit}>
                    <FormInput type="text" name="title" value={title} placeholder="Title" onChange={handleChange} maxlength="33" required/>
                    <FormInput type="time" name="time" value={time} onChange={handleChange} required/>
                    <FormInput type="date" name="date" value={date} style={{marginBottom: '40px'}} onChange={handleChange} required/>
                    <ColorContainer>
                        <ColorBox color="#7E5398" taskColor={taskColor} onClick={() => setTaskColor("#7E5398")}/>
                        <ColorBox color="#C5458C" taskColor={taskColor} onClick={() => setTaskColor("#C5458C")}/>
                        <ColorBox color="#F63F5E" taskColor={taskColor} onClick={() => setTaskColor("#F63F5E")}/>
                        <ColorBox color="#00B32B" taskColor={taskColor} onClick={() => setTaskColor("#00B32B")}/>
                        <ColorBox color="#58BABA" taskColor={taskColor} onClick={() => setTaskColor("#58BABA")}/>
                    </ColorContainer>
                    <CustomButton buttonStyle="task-add">Submit</CustomButton>
                </form>
            </AddTaskContainer>
            <Overlay onClick={() => showTaskPopup()} />
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectAuthToken
});

const mapDispatchToProps = dispatch => ({
    addTask: (token, taskData) => dispatch(addTaskStart(token, taskData))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);