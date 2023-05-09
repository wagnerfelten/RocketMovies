import styled from "styled-components";

export const Container = styled.div`
    > header {
        display: flex;
        align-items: center;
        padding-left: 144px;

        background-color: #220336;
        height: 150px;
    }


`;

export const Main = styled.main`
    width: 950px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

`;

export const Section = styled.section`
    display: flex;
    margin-bottom: 100px;

      > img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-top: -70px;
    }

    > div {
        width: 70px;
        height: 70px;
        background-color: #FF859B;
        margin-left: -40px;
        margin-top: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        > svg{
        color: balck;
        width: 40px;
        height: 50px;
        }
        
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    > svg {
        color: red;
    }

    > button {
        width: 455px;
        height: 60px;

        >svg{
            display: none;
        }
    }

`;