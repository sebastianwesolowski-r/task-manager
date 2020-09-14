import styled from 'styled-components';

export const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-left: 180px;
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
`;

export const LoadingOverlay = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(2px);
`;