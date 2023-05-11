import { Container, Login, Content } from "./style";
import { Link } from "react-router-dom";

import Input from "../Input";

export default function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <div>
        <Input placeholder="Pesquisa pelo título" />
      </div>
      <Login>
        <Content>
          <h2>Wagner Rodrigues</h2>
          <Link to="/">sair</Link>
        </Content>

        <img src="https://github.com/wagnerfelten.png" />
      </Login>
    </Container>
  );
}
