import { Container } from "./style.js";
import { BsArrowLeft } from "react-icons/bs";



export default function LinkText(){
  return (
    <Container>
      <Link to="/">
        <BsArrowLeft />
        Voltar
      </Link>
    </Container>
  );
};

