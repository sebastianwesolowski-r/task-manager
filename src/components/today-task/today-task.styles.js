import styled from 'styled-components';

export const TaskContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: auto;
    min-width: 420px;
    min-height: 180px;
    font-size: 1.2rem;
    background-color: #F1F1F1;
    box-shadow: 0px 3px 10px rgba(4, 4, 4, 0.3);
    border-radius: 12px;
    margin-bottom: 50px;
    opacity: ${props => props.completed ? '0.8' : '1'};
    span {
        margin-left: 20px;
    }
`;

export const TaskHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
    height: 70px;
    font-weight: 500;
    background-color: ${props => props.color};
    border-radius: 12px 12px 0 0;
    svg {
        cursor: pointer;
        transition-duration: 150ms;
        &:active {
            transform: scale(1.2);
        }
    }
`;

export const TaskInfo = styled.div`
    height: 100%;
    font-size: 1.15rem;
    padding: 10px 0;
    p {
        max-height: 22px;
        max-width: 350px;
        font-size: 1.3rem;
        letter-spacing: 0.03em;
        padding: 0;
        margin: 0;
    }
    p:last-of-type {
        font-size: 1rem;
        letter-spacing: 0;
        margin-top: 8px;
    }
`;

export const EditTitle = styled.input`
    width: 180px;
    height: 25px;
    border: 1px solid #000000;
    background-color: #F1F1F1;
    font-size: 1.15rem;
    font-weight: 500;
    color: #000000;
    outline: none;
`;