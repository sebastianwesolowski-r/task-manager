import styled from 'styled-components';

export const LandingPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    padding: 0 100px;
`;

export const Splash = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 65%;
    max-height: 650px;
    width: 45%;
    max-width: 700px;
    font-weight: 500;
    p {
        font-size: 2.8rem;
        letter-spacing: 0.05em;
        margin: 0;
        padding-left: 50px;
        margin-bottom: 15px;
    }
    span {
        font-size: 1.25rem;
        letter-spacing: 0.03em;
        padding-left: 50px;
        margin-bottom: 40px;
    }
`;

export const Sign = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 450px;
    height: 550px;
    span {
        font-family: 'Righteous', cursive;
        font-size: 1.25rem;
        color: ${props => props.theme.mainColor};
    }
`;