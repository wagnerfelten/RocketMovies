import { Container, Main, Section, Form } from "./style";
import { AiOutlineCamera } from "react-icons/ai";
import {BiUser, BiLockAlt, BiEnvelope} from "react-icons/bi";

import LinkText from "../../components/LinkText";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <Container>
      <header>
        <LinkText to="/"/>
      </header>

      <Main>
        <Section>
          <img src="https://github.com/wagnerfelten.png" />

          <div>
            <AiOutlineCamera />
          </div>
        </Section>

        <Form>
          <Input  placeholder="Nome" icon={BiUser} type="text" />
          <Input placeholder="Email" type="email" icon={BiEnvelope}/>
          <Input placeholder="Senha atual" type="password" icon={BiLockAlt}/>
          <Input placeholder="Nova senha" type="password" icon={BiLockAlt}/>

          <Button title="Cadastrar"/>
        </Form>
      </Main>
    </Container>
  );
}
