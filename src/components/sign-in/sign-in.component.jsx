import React, {useState} from 'react';

import {ReactComponent as PasswordVisible} from '../../assets/password-visible.svg';
import {ReactComponent as PasswordNotVisible} from '../../assets/password-not-visible.svg';

import {SignInContainer, SignInHeader} from './sign-in.styles';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

const SignIn = ({setSignMethod}) => {
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

    return (
        <SignInContainer>
            <SignInHeader>SIGN IN</SignInHeader>
            <form>
                <FormInput type="text" name="email" value={email} placeholder="Email" onChange={handleChange} required/>
                <div>
                    <FormInput type={passwordShown ? 'text' : 'password'} name="password" value={password} placeholder="Password" onChange={handleChange} required/>
                    <i onClick={() => togglePasswordVisiblity()}>{passwordShown ? <PasswordVisible />: <PasswordNotVisible />}</i>
                </div>
                <CustomButton type="submit" buttonStyle={'sign-main'} style={{marginTop: '25px'}}>Login</CustomButton>
                <CustomButton type="button" buttonStyle={'sign-secondary'} onClick={() => setSignMethod('signup')}>Sign Up</CustomButton>
            </form>
        </SignInContainer>
    );
};

export default SignIn;