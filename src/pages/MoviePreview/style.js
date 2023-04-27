import styled from "styled-components";

export const Container = styled.div`
  color: white;
`;

export const Main = styled.main`
  width: 900px;
  margin: 0 auto;
  margin-top: 48px;

  > button {
    background-color: black;
    border: none;
    color: #ff859b;
    width: 100px;

    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Section = styled.section`
  > p {
    margin-top: 24px;
    text-align: justify;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  font-size: 30px;
  margin-bottom: 24px;

  > p {
    font-size: 24px;
    color: #ff859b;
  }
`;

export const Data = styled.div`
  width: 500px;

  display: flex;
  align-items: center;
  gap: 14px;

  > img {
    width: 50px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 4px;

    > svg {
      color: #FF859b;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 24px;
`;
