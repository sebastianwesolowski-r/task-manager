import styled, {css} from 'styled-components';

export const CalendarPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 180px;
    padding-top: 100px;
    overflow: hidden;
    @media (max-width: 800px) {
        padding: 0;
        overflow-y: scroll;
    }
`;

export const MonthPicker = styled.input`
    width: 300px;
    height: 50px;
    font-size: 1.4rem;
    font-weight: 500;
    background: transparent;
    border: none;
    border-bottom: 1px solid ${props => props.theme.customBlack};;
    outline: none;
    @media (max-width: 800px) {
        font-size: 1.3rem;
        margin-top: 100px;
        padding: 20px 0;
    }
`;

export const CalendarContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 99%;
    height: 650px;
    margin-top: 90px;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        height: unset;
        margin-top: 30px;
    }
`;

export const Calendar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 75%;
    min-width: 1000px;
    max-width: 1300px;
    height: 100%;
    @media (max-width: 800px) {
        width: 99%;
        min-width: 390px;
        max-width: 99%;
        height: 370px;
    }
`;

export const Weekdays = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 14.28%;
        height: 100%;
        font-size: 1rem;
        font-weight: 500;
    }
    @media (max-width: 800px) {
        div {
            font-size: 0.9rem;
        }
    }
`;

export const DaysContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 93%;
    @media (max-width: 800px) {
        height: 100%;
    }
`;

const prevMonth = css`
    color: #969696;
`;

const nextMonth = css`
    color: #969696;
`;

const prevDay = css`
    color: #8F90B4;
`

const today = css`
    border: 2px solid ${props => props.theme.mainColor};
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        background-color: #C1CAD7;
    }
    &:active {
        transform: scale(1.25);
    }
`;

const currentMonth = css`
    color: ${props => props.theme.customBlack};
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        background-color: #C1CAD7;
    }
    &:active {
        transform: scale(1.25);
    }
    @media (max-width: 800px) {
        &:hover {
            transform: none;
            background-color: ${props => props.theme.mainColor};
        }
    }
`;

const getDayStyles = props => {
    switch(props.type) {
        case 'prev-month': return prevMonth;
        case 'next-month': return nextMonth;
        case 'prev-day': return prevDay;
        case 'today': return today;
        case 'current-month': return currentMonth;
        default: return;
    }
};

export const Day = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14.28%;
    position: relative;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 75px;
        height: 75px;
        font-family: 'Righteous', cursive;
        font-size: 1.3rem;
        border-radius: 15px;
        transition-duration: 200ms;
        background-color: ${props => props.pickedDay === props.thisDay ? props.theme.mainColor : "#EBEBEB"};
        ${getDayStyles}
    }
    @media (max-width: 800px) {
        div {
            width: 50px;
            height: 50px;
            font-size: 0.9rem;
        }
    }
`;

export const TaskDots = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 10px;
    list-style-type: none;
    position: absolute;
    bottom: 31px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0 5px;
    pointer-events: none;
    @media (max-width: 800px) {
        width: 45px;
        bottom: 10px;
        padding: 0 2px;
    }
`;

export const Dot = styled.li`
    width: 7px;
    height: 7px;
    border-radius: 7px;
    padding: 0;
    margin: 0 3px;
    background-color: ${props => props.overflow ? props.theme.customBlack : props.theme.mainColor};
    @media (max-width: 800px) {
        width: 5px;
        height: 5px;
    }
`;

export const CalendarTasksSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 22%;
    height: 100%;
    font-weight: 500;
    @media (max-width: 800px) {
        width: 100%;
        padding-top: 20px;
        padding-left: 10px;
    }
`;

export const CalendarTasksHeader = styled.p`
    font-size: 1.7rem;
    margin: 20px 0;
    @media (max-width: 800px) {
        font-size: 1.3rem;
        margin: 0;
        margin-top: 5px;
    }
`;

export const DateHeader = styled.p`
    font-size: 3.1rem;
    color: ${props => props.theme.mainColor};
    margin: 0;
    span {
        font-size: 2.5rem;
        color: ${props => props.theme.customBlack};
        margin-left: 10px;
    }
    @media (max-width: 800px) {
        font-size: 2rem;
        span {
            font-size: 1.5rem;
            margin: 0;
        }
    }
`;

export const TasksContainer = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 100%;
    margin-top: 20px;
    padding: 0;
    padding-top: 15px;
    overflow-x: none;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 9px;
    }
    &::-webkit-scrollbar-track {
        background: #c7c7c7;
        box-shadow: inset 0 0 5px #D3D3D3;
    }
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.mainColor};
        border-radius: 0 0 10px 10px;
    }
    @media (max-width: 800px) {
        padding: 0;
    }
`;

export const Task = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    font-size: 1.4rem;
    margin-bottom: 40px;
    padding: 0;
    p {
        margin: 0;
        padding: 0;
    }
    p:last-of-type {
        font-size: 1rem;
        letter-spacing: 0.03em;
        margin-top: 3px;
    }
    svg {
        margin-right: 20px;
    }
    @media (max-width: 800px) {
        font-size: 1.2rem;
        margin-bottom: 5px;
    }
`;

export const TaskData = styled.div`
    display: flex;
    flex-direction: column;
`;