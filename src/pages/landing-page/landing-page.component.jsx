import React, {useState} from 'react';

import {ReactComponent as HumanSvg} from '../../assets/human.svg';

import {LandingPageContainer, Splash, Sign} from './landing-page.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const LandingPage = () => {
    const [signMethod, setSignMethod] = useState('signin');
    return (
        <LandingPageContainer>
            <Splash>
                <p>All your plans in one place!</p>
                <span>be organized, keep track of everything you have to do.</span>
                <HumanSvg />
            </Splash>
            <Sign>
                <span>TASK MANAGER</span>
                {
                    signMethod === 'signin' ? (
                        <SignIn setSignMethod={setSignMethod} />
                    ) : (
                        <SignUp setSignMethod={setSignMethod} />
                    )
                }
            </Sign>
        </LandingPageContainer>
    );
};

export default LandingPage;