import { Container, Main, Section, ContentNotes } from "./style";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Button from "../../components/Button";
import NewNotes from "../../components/NewNotas";

function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <Section>
          <h1>Meus Filmes</h1>

          <Button title="Adicionar filme" to="/createMoview"/>
        </Section>

        <ContentNotes>
          <NewNotes title="Jovens Titans" />
          <NewNotes title="Jovens Titans" />
        </ContentNotes>
        
      </Main>
    </Container>
  );
}

export default Home;
