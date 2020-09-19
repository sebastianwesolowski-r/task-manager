import styled from 'styled-components';

export const SettingsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 100px;
    padding-left: 180px;
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 300px;
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
    @media (max-width: 800px) {
        padding-top: 90px;
        padding-left: 10px;
    }
`;

export const SettingsHeader = styled.p`
    font-size: 1.9rem;
    font-weight: 600;
    margin-bottom: 80px;
    @media (max-width: 800px) {
        font-size: 1.6rem;
        margin-bottom: 60px;
    }
`;

export const PasswordMessage = styled.p`
    font-size: 1rem;
    font-weight: 500;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
`;

export const DeleteAccountMessage = styled.p`
    height: 20px;
    font-size: 1rem;
    font-weight: 500;
    color: #E20E0E;
    margin-bottom: 30px;
    padding: 0;
`;