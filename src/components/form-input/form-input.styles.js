import styled from 'styled-components';

export const FormInputContainer = styled.input`
    width: 300px;
    font-size: 1.15rem;
    font-weight: 500;
    border: none;
    border-bottom: 1px solid #808080;
    background: none;
    padding-left: 5px;
    padding-bottom: 7px;
    outline: none;
    margin-bottom: 55px;
    transition-duration: 150ms;
    &:placeholder {
        font-size: 1.05rem;
        color: #9A9A9A;
        svg {
            margin-right: 10px;
        }
    }
    &:focus {
        border-bottom: 1px solid ${props => props.theme.customBlack};;
    }
`;