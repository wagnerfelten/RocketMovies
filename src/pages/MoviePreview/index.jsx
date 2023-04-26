import { Container, Main, Section, Data, Tags } from "./style";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { GoClock } from "react-icons/go";
import { BsStar } from "react-icons/bs";

import Tag from "../../components/Tag";
import Header from "../../components/Header";

let date = new Date().toLocaleString();

export default function MoviePreview() {
  return (
    <Container>
      <Header />

      <Main>
        <button>
          <BsArrowLeft />
          Voltar
        </button>

        <Section>
          <div>
            <h1>Interestellar</h1>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStar />
          </div>

          <Data>
            <img src="https://github.com/wagnerfelten.png" />
            <h3>Por Wagner Felten</h3>
            <p>{date}</p>
            <GoClock />
          </Data>

          <Tags>
            <Tag title="Ficção" />
            <Tag title="Drama" />
            <Tag title="Familia" />
          </Tags>
        </Section>
      </Main>
    </Container>
  );
}
