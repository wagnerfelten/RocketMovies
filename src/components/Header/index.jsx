import {Container, Login} from "./style";
import Input from "../Input";

export default function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisa pelo título"/>

        <Login>
            <div>
                <h2>
                    Wagner Rodrigues
                </h2>
                <p>sair</p>
            </div>

            <img src="https://github.com/wagnerfelten.png" />
        </Login>

    </Container>
  );
}
