import { Container, Main, Content } from "./style.js";

import Header from "../../components/Header";
import LinkText from "../../components/LinkText";

export default function CreateMovie() {
  return (
    <Container>
      <Header />

      <Main>
        <Content>
             <LinkText />
        </Content>
      </Main>
    </Container>
  );
}
