import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;

  padding: 15px;

  width: 100%;
  height: 170px;

  border-bottom: #948F99 solid 2px;

  >h1{
  color: #FF859B;
  }

  > div {
    width: 550px;
  }
`;

export const Login = styled.div`
  display: flex;
  gap: 15px;
    
 

    > img {
      width: 70px;
      height: 70px;

      border-radius: 50%;
    }
`;

export const Content = styled.div `
   
   
   >h2{
        color: white;
    }

    > a{
      color: #948F99;
      margin-left: 180px;
      text-decoration: none;
    }
`;
