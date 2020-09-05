import React, {useState} from 'react';
import {connect} from 'react-redux';

import {ReactComponent as PasswordVisible} from '../../assets/password-visible.svg';
import {ReactComponent as PasswordNotVisible} from '../../assets/password-not-visible.svg';

import {SignUpContainer, SignUpHeader} from './sign-up.styles';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {signUpStart} from '../../redux/user/user-actions';

const SignUp = ({setSignMethod, signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({email: '', password: '', confirmPassword: ''});
    const [passwordShown, setPasswordShown] = useState(false);
    const {email, password, confirmPassword} = userCredentials;
    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };
    
    const handleChange = e => {
        const {value, name} = e.target;
        setUserCredentials({...userCredentials, [name]: value});
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords didn't match");
            return;
        }
        signUpStart({email, password});
    }

    return (
        <SignUpContainer>
            <SignUpHeader>SIGN UP</SignUpHeader>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" name="email" value={email} placeholder="Email" onChange={handleChange} required/>
                <div>
                    <FormInput type={passwordShown ? 'text' : 'password'} name="password" value={password} placeholder="Password" onChange={handleChange} required/>
                    <i onClick={() => togglePasswordVisiblity()}>{passwordShown ? <PasswordVisible />: <PasswordNotVisible />}</i>
                </div>
                <FormInput type={passwordShown ? 'text' : 'password'} name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={handleChange} style={{marginBottom: '25px'}} required/>
                <CustomButton type="submit" buttonStyle={'sign-main'}>Register</CustomButton>
                <CustomButton type="button" buttonStyle={'sign-secondary'} onClick={() => setSignMethod('signin')}>Sign In</CustomButton>
            </form>
        </SignUpContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);