import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  width: 900px;
  margin: 0 25%;
  margin-top: 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow-x: hidden;

  > .inputs {
    display: flex;
    gap: 40px;
    margin-top: 40px;
  }

  > textarea {
    background-color: #262529;
    padding: 20px;
    width: 900px;
    height: 358px;

    margin-top: 48px;
    border-radius: 10px;

    color: white;
  }

  > .buttons{
    display: flex;
    margin-top: 48px;
    gap: 48px;

    > button{
        width: 450px;
        height: 60px;
        >svg{
            display: none;
        }
    }

    > button:first-child {
        background-color: #262529;
        border: none;

        color: #ff859b;

      
    }
  }
`;

export const Content = styled.div`
  > h1 {
    color: white;
    margin-top: 24px;
  }
`;

export const Tags = styled.div`
  margin-top: 48px;

  > h1 {
    color: #999591;
    font-size: 24px;
    margin-bottom: 24px;
  }

  > div {
    height: 100px;

    background-color: #262529;
    border-radius: 10px;

    display: flex;
    gap: 14px;
    align-items: center;
    padding-left: 30px;

    color: white;

    > h3 {
      background-color: #262741;
      width: 170px;
      height: 60px;

      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;

      border-radius: 10px;
    }

    > a {
      border: dashed #999591;
      color: #999591;

      width: 170px;
      height: 60px;

      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;

      border-radius: 10px;
    }

    > svg {
      color: #ff859b;
    }
  }
`;
