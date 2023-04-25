import styled from "styled-components";

export const Container = styled.div `
    background-color: #000000;
    width: 100%;
    
`;

export const Main = styled.main `
    width: 75%;
    height: 100vh;
    margin: 50px auto;
    
    display: flex;
    flex-direction: column;
`;

export const Section = styled.section `
    display: flex;
    justify-content: space-between;
    margin: 24px;

    > h1{
        color: white;
        font-size: 34px;
    }

    > svg {
        color: white;
    }
`;

export const ContentNotes = styled.div `
    display: flex;
    flex-direction: column;
    gap: 24px;
`;