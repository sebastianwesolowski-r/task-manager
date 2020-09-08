import styled from 'styled-components';

export const CalendarPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding-left: 180px;
    padding-top: 140px;
    overflow: hidden;
`;

export const MonthPicker = styled.input`
    width: 350px;
    height: 65px;
    font-size: 2rem;
    font-weight: 500;
    background: transparent;
    border: none;
    border-bottom: 1px solid #9D9D9D;
    outline: none;
`;
