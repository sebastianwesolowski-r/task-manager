import styled, {keyframes} from 'styled-components';

const show = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 500px;
    background-color: ${props => props.theme.customWhite};
    border-radius: 8px;
    box-shadow: 1px 3px 15px 1px rgba(4, 4, 4, 0.35);
    animation: ${show} 300ms ease;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        div {
            position: relative;
            i {
                position: absolute;
                top: 1%;
                right: 3%;
                cursor: pointer;
                transition-duration: 150ms;
                &:active {
                    transform: scale(1.4);
                }
            }
        }
    }
`;

export const SignUpHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    background-color: ${props => props.theme.mainColor};
    border-radius: 8px 8px 0 0;
    margin-bottom: 60px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const SignError = styled.div`
    width: 100%;
    height: 25px;
    font-size: 1rem;
    font-weight: 500;
    word-wrap: break-word;
    text-align: center;
    color: #E20E0E;
    margin-bottom: 10px;
`;