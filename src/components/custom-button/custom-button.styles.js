import styled, {css} from 'styled-components';

const signMain = css`
    width: 180px;
    height: 35px;
    font-size: 1.15rem;
    background-color: #FF8246;
    border: none;
    border-radius: 10px;
    margin-top: 25px;
    margin-bottom: 20px;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

const signSecondary = css`
    width: 180px;
    height: 35px;
    font-size: 1rem;
    background-color: #F1F1F1;
    border: 2px solid #FF8246;
    border-radius: 10px;
    &:hover {
        transform: scale(1.05);
        background-color: #FF8246;
        color: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

const taskDone = css`
    width: 100px;
    height: 35px;
    font-size: 1rem;
    font-weight: 500;
    background-color: ${props => props.color};
    border-radius: 8px;
    margin-right: 30px;
    border: none;
    transition-duration: 120ms;
    &:hover {
        opacity: 0.8;
    }
`;

const taskRemove = css`
    width: 115px;
    height: 35px;
    font-size: 1rem;
    font-weight: 500;
    background-color: #D3D3D3;
    border-radius: 8px;
    border: none;
`;

const taskAdd = css`
    width: 180px;
    height: 35px;
    font-size: 1.15rem;
    background-color: #FF8246;
    border: none;
    border-radius: 10px;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

const getButtonStyles = props => {
    switch(props.buttonStyle) {
        case 'sign-main': return signMain;
        case 'sign-secondary': return signSecondary;
        case 'task-done': return taskDone;
        case 'task-remove': return taskRemove;
        case 'task-add': return taskAdd;
        default: return;
    }
};

export const CustomButtonContainer = styled.button`
    outline: none;
    cursor: pointer;
    transition-duration: 200ms;
    ${getButtonStyles};
`