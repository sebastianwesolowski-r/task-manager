import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as PasswordVisible} from '../../assets/password-visible.svg';
import {ReactComponent as PasswordNotVisible} from '../../assets/password-not-visible.svg';

import {SettingsPageContainer, SettingsHeader, SettingsButtons, PasswordMessage} from './settings-page.styles';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

import {updateUserStart, deleteAccountStart} from '../../redux/user/user-actions';
import {selectAuthToken} from '../../redux/user/user-selectors';

const SettingsPage = ({token, updateUser, deleteUser}) => {

    const messages = {
        default : "After changing password you must re-authenticate",
        error: "Passwords didn't match"
    };
    const [passwordMessage, setPasswordMessage] = useState(messages.default);
    const [passwordData, setPasswordData] = useState({password: '', confirmPassword: ''});
    const {password, confirmPassword} = passwordData;
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown(!passwordShown);

    const handleChange = e => {
        if(password.length === 0) {
            setPasswordMessage(messages.default);
        };
        const {name, value} = e.target;
        setPasswordData({...passwordData, [name]: value});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            setPasswordMessage(messages.error);
            return;
        }
        setPasswordMessage(messages.default);
        await updateUser(token, {password});
    };

    return (
        <SettingsPageContainer>
            <SettingsHeader>Change Password</SettingsHeader>
            <form onSubmit={handleSubmit}>
                <div>
                    <FormInput type={passwordShown ? 'text' : 'password'} name="password" value={password} placeholder="New Password" onChange={handleChange}/>
                    <i onClick={() => togglePasswordVisiblity()}>{passwordShown ? <PasswordVisible /> : <PasswordNotVisible />}</i>
                </div>
                <FormInput type={passwordShown ? 'text' : 'password'} name="confirmPassword" value={confirmPassword} placeholder="Confirm New Password" onChange={handleChange} style={{marginBottom: '20px'}} />
                {
                    password.length > 0 ? (
                        <PasswordMessage>{passwordMessage}</PasswordMessage>
                    ) : null
                }
                <CustomButton type="submit" buttonStyle="task-add" style={{marginTop: '20px'}}>submit</CustomButton>
            </form>
            <SettingsButtons>
                <CustomButton buttonStyle="settings" onClick={() => deleteUser(token)}>Delete account</CustomButton>
            </SettingsButtons>
        </SettingsPageContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    token: selectAuthToken
});

const mapDispatchToProps = dispatch => ({
    updateUser: (token, updateData) => dispatch(updateUserStart(token, updateData)),
    deleteUser: token => dispatch(deleteAccountStart(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);