import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 130px;
    height: 100%;
    word-wrap: normal;
    padding-top: 30px;
    padding-bottom: 40px;
    background-color: #FF8246;
    position: absolute;
    left: 0;
    top: 0;
    span {
        font-size: 1.25rem;
        font-family: 'Righteous', cursive;
        text-align: center;
    }
    svg {
        margin-top: auto;
        cursor: pointer;
    }
`;

export const NavigationPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 250px;
    margin-top: 150px;
`;

export const NavigationItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    ${props => props.isactive ? 'background-color: #F1F1F1' : ''};
    border-radius: 15px;
    cursor: pointer;
    transition-duration: 200ms;
    svg {
        transition-duration: 150ms;
        margin: 0;
    }
    &:hover {
        ${props => props.isactive ? '' : 'background-color: rgba(241, 241, 241, 0.6)'};
    }
    &:active {
        svg {
            transform: scale(1.2);
        }
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    font-size: 0.9rem;
    font-weight: 500;
    position: absolute;
    right: 40px;
    top: 60px;
    svg {
        margin-left: 10px;
    }
`;