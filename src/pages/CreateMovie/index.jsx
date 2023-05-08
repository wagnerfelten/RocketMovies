import { Container, Main, Content, Tags } from "./style.js";
import { BsTrash3Fill, BsPlusLg} from "react-icons/bs";

import Header from "../../components/Header";
import LinkText from "../../components/LinkText";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function CreateMovie() {
  return (
    <Container>
      <Header />

      <Main>
        <Content>
          <LinkText />

          <h1>Novo Filme</h1>
        </Content>

        <div className="inputs">
          <Input placeholder="Titúlo" />
          <Input placeholder="Sua nota" />
        </div>
        <textarea placeholder="Observações" />

        <Tags>
          <h1>Marcadores</h1>

          <div>
            <h3>React  <BsPlusLg /></h3>
            <a src="/"> Novo marcador <BsTrash3Fill /></a>
          </div>
        </Tags>

        <div className="buttons">
          <Button title="Salvar alterações" />
          <Button title="Excluir filme" />
        </div>
      </Main>
    </Container>
  );
}
