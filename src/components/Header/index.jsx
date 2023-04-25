import {Container, Login, Content} from "./style";
import Input from "../Input";

export default function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisa pelo título"/>

        <Login>
            <Content>
                <h2>
                    Wagner Rodrigues
                </h2>
                <p>sair</p>
            </Content>

            <img src="https://github.com/wagnerfelten.png" />
        </Login>

    </Container>
  );
}
