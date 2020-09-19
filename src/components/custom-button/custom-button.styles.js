import styled, {css} from 'styled-components';

const signMain = css`
    width: 180px;
    height: 35px;
    font-size: 1.15rem;
    background-color: ${props => props.theme.mainColor};;
    border: none;
    border-radius: 10px;
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
    background-color: ${props => props.theme.customWhite};
    border: 2px solid ${props => props.theme.mainColor};
    border-radius: 10px;
    &:hover {
        transform: scale(1.05);
        background-color: ${props => props.theme.mainColor};
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

const taskAdd = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;
    position: absolute;
    right: 40px;
    bottom: 40px;
    font-size: 3.1rem;
    font-weight: 500;
    background-color: ${props => props.theme.mainColor};
    margin: 0;
    border: none;
    border-radius: 10px;
    &:hover {
        opacity: 0.9;
    }
    &:active {
        svg {
            transition-duration: 250ms;
            transform: scale(1.2);
        }
    }
    @media (max-width: 800px) {
        right: 20px;
        bottom: 20px;
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

const taskSubmit = css`
    width: 180px;
    height: 35px;
    font-size: 1.15rem;
    background-color: ${props => props.theme.mainColor};
    border: none;
    border-radius: 10px;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

const settings = css`
    width: auto;
    height: 35px;
    font-size: 0.95rem;
    font-weight: 500;
    background-color: #D3D3D3;
    border: none;
    border-radius: 8px;
    margin-top: auto;
    padding: 0 25px;
    &:hover {
        transform: scale(1.03);
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    }
`;

const getButtonStyles = props => {
    switch(props.buttonStyle) {
        case 'sign-main': return signMain;
        case 'sign-secondary': return signSecondary;
        case 'task-done': return taskDone;
        case 'task-add': return taskAdd;
        case 'task-remove': return taskRemove;
        case 'task-submit': return taskSubmit;
        case 'settings': return settings;
        default: return;
    }
};

export const CustomButtonContainer = styled.button`
    outline: none;
    cursor: pointer;
    transition-duration: 200ms;
    &:disabled {
        filter: brightness(0.85);
    }
    ${getButtonStyles};
`