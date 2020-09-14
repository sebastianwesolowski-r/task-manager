import React from 'react';

import {NotFoundPageContainer, AppName, Number404, Message} from './not-found-page.styles';

import CustomButton from '../../components/custom-button/custom-button.component';

const NotFoundPage = ({history}) => (
    <NotFoundPageContainer>
        <AppName>TASK MANAGER</AppName>
        <Number404>404</Number404>
        <Message>This page is missing or you assembled the link incorrectly</Message>
        <CustomButton buttonStyle="task-submit" onClick={() => history.push("/")}>back to home</CustomButton>
    </NotFoundPageContainer>
);

export default NotFoundPage;