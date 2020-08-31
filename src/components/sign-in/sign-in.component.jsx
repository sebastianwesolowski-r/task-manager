import React, {useState} from 'react';
import {connect} from 'react-redux';

import {ReactComponent as PasswordVisible} from '../../assets/password-visible.svg';
import {ReactComponent as PasswordNotVisible} from '../../assets/password-not-visible.svg';

import {SignInContainer, SignInHeader} from './sign-in.styles';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {signInStart} from '../../redux/user/user-actions';

const SignIn = ({setSignMethod, signInStart}) => {
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});
    const [passwordShown, setPasswordShown] = useState(false);
    const {email, password} = userCredentials;
    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };

    const handleChange = e => {
        const {value, name} = e.target;
        setUserCredentials({...userCredentials, [name]: value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        signInStart({email, password});
    }

    return (
        <SignInContainer>
            <SignInHeader>SIGN IN</SignInHeader>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" name="email" value={email} placeholder="Email" onChange={handleChange} required/>
                <div>
                    <FormInput type={passwordShown ? 'text' : 'password'} name="password" value={password} placeholder="Password" onChange={handleChange} required/>
                    <i onClick={() => togglePasswordVisiblity()}>{passwordShown ? <PasswordVisible /> : <PasswordNotVisible />}</i>
                </div>
                <CustomButton type="submit" buttonStyle={'sign-main'} style={{marginTop: '25px'}}>Login</CustomButton>
                <CustomButton type="button" buttonStyle={'sign-secondary'} onClick={() => setSignMethod('signup')}>Sign Up</CustomButton>
            </form>
        </SignInContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signInStart: userCredentials => dispatch(signInStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignIn);