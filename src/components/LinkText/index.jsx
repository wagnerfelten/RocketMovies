import { Container } from "./style.js";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom"



export default function LinkText({...rest}){
  return (
    <Container {...rest}>
        <BsArrowLeft />
        Voltar
    </Container>
  );
};

