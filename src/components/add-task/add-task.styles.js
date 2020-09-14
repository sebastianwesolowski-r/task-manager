import styled, {keyframes} from 'styled-components';

const show = keyframes`
    0% {
        transform: scale(0.4);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

export const AddTaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 500px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    margin-top: 150px;
    z-index: 100;
    background-color: ${props => props.theme.customWhite};
    box-shadow: 1px 2px 15px 1px rgba(4, 4, 4, 0.3);
    border-radius: 8px;
    animation: ${show} 150ms ease-in;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const AddTaskHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    font-size: 1.3rem;
    font-weight: 500;
    background-color: ${props => props.theme.mainColor};;
    border-radius: 8px 8px 0 0;
    margin-bottom: 60px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 305px;
    margin-bottom: 40px;
`;

export const ColorBox = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 25px;
    background-color: ${props => props.color};
    box-shadow: ${props => props.taskColor === props.color ? "0px 0px 10px 5px #FF8246" : ""};
    transition-duration: 150ms;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;