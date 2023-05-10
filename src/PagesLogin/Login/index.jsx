import {Container, Main, Content, Form } from "./style";
import {Cinema} from "../../assets/img//cinema.png";
 
export default function Login(){
    return(
        <Container>
            <img src={Cinema} />

            <Main>
                <Content>
                    <h1>RocktMovies</h1>
                    <p>aplicação para acompanhar tudo que assistir.</p>
                </Content>

                <Form>
                    <h2>Faça seu login</h2>

                    <Input placerholder="E-mail" />
                    <Input placerholder="Senha" />

                    <Button title="Entrar" />
                </Form>

                <Link to="/">Criar Conta</Link>
            </Main>
        </Container>
    );
};