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
    width: calc(100% - 180px);
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
        background: #FF8246;
        border-radius: 0 0 10px 10px;
      }
`;

export const AddTaskButton = styled.button`
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
      background-color: #FF8246;
      margin: 0;
      border: none;
      border-radius: 10px;
      outline: none;
      cursor: pointer;
      transition-duration: 150ms;
      &:hover {
          opacity: 0.9;
      }
      &:active {
          svg {
              transition-duration: 250ms;
              transform: scale(1.2);
          }
      }
`;