import styled, {css} from 'styled-components';

const signMain = css`
    width: 180px;
    font-size: 1.15rem;
    background-color: #FF8246;
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

const getButtonStyles = props => {
    switch(props.buttonStyle) {
        case 'sign-main': return signMain;
        case 'sign-secondary': return signSecondary;
    }
};

export const CustomButtonContainer = styled.button`
    width: auto;
    height: 35px;
    outline: none;
    cursor: pointer;
    transition-duration: 200ms;
    ${getButtonStyles};
`