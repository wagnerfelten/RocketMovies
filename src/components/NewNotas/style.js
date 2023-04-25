import styled from "styled-components";

export const Container = styled.div`
    background-color: #312E38;
    border-radius: 10px;
    display: flex;
    height: 550px;
   
`;

export const Main = styled.main`
    margin: 32px;
  

>h1{
        color: white;
        padding: 0px 0px 8px 14px;
    }
    > svg{
        color: #FF859B;
        padding-left: 14px;
        font-size: 30px;
        margin-bottom: 24px;
    }
`;

export const Section = styled.section`
    width: 100%;
    text-align: justify;
    margin-bottom: 24px;

    >p{
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
    }
`;

export const Tags = styled.div `
    display: flex;
    gap: 12px;
    margin-top: 24px;
`;

