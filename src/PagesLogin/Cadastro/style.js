import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;

    > img {
        width: 50vw;
        height: 100vh;
    }
`;

export const Main = styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        color: red;

        > a {
            display: flex;
            align-items: center;
            gap: 12px;
            justify-content: center;
            margin-top: 48px;
            color: #FF859B;
            cursor: pointer;

            > svg{
                font-size: 20px;
            }
        }

        > a:hover{
            transform: scale(1.5);
            color: #FF857A;
        }

`;

export const Content = styled.section`
        margin-bottom: 48px;
        margin-top: -150px;

        > h1{
            font-size: 48px;
            color: #FF859B;
        }

        > p{
            font-size: 12px;
            color: #CAC4CF;
        }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    > h2{
        color: white;
    }

    >button{
        width: 450px;
        height: 70px;
        font-size: 18px;
        font-weight: 700;
        > svg {
            display: none;
        }
    }

    > button:hover{
        transform: scale(1.1);
        background-color: #FF857A;
    }
`;