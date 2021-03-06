import styled from 'styled-components';

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-left: 180px;
    @media (max-width: 800px) {
        padding-left 10px;
    }
`;

export const TasksHeader = styled.div`
    position: relative;
    top: 60px;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-align: left;
    span, p {
        font-size: 1.1rem;
    }
    span {
        color: #FF8246;
    }
    @media (max-width: 800px) {
        position: static;
        margin-top: 120px;
        font-size: 1.6rem;
        letter-spacing: 0.03em;
        span, p {
            font-size: 1.1rem;
            margin: 0;
            margin-top: 10px;
        }
    }
`;

export const TasksContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-height: calc(100% - 183px);
    position: relative;
    top: 100px;
    padding: 0;
    padding-top: 10px;
    padding-left: 10px;
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
        position: static;
        margin-top: 30px;
        padding-left: 1px;
    }
`;

export const LoadingOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(2px);
`;

export const TasksError = styled.div`
    width: 450px;
    height: 30px;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    font-size: 1.3rem;
    color: #E20E0E;
`;