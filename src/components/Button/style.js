import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background-color: red;
  border-radius: 10px;
  background-color: #ff859b;
  color: black;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  height: 48px;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 10px;

  >svg{
    font-size: 14px;
  }
`;
