import styled from 'styled-components';

export const SettingsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
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
`;

export const SettingsHeader = styled.p`
    font-size: 1.9rem;
    font-weight: 600;
    margin-bottom: 80px;
`;

export const SettingsButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: auto;
`;

export const PasswordMessage = styled.p`
    font-size: 0.95rem;
    font-weight: 500;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
`;