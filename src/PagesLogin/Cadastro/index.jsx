import {Container, Main, Content, Form } from "./style";
import {BiUser, BiLockAlt, BiEnvelope, BiLeftArrowAlt} from "react-icons/bi";

import Cinema from "../../assets/img/Cinema.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
 
export default function Cadastro(){
    return(
        <Container>
            <img src={Cinema} alt="Cinema"/>

            <Main>
                <Content>
                    <h1>RocktMovies</h1>
                    <p>aplicação para acompanhar tudo que assistir.</p>
                </Content>

                <Form>
                    <h2>Crie sua conta</h2>

                    <Input placeholder="Usuário" icon={BiUser}/>
                    <Input placeholder="E-mail" icon={BiEnvelope}/>
                    <Input placeholder="Senha" type="password" icon={BiLockAlt}/>

                    <Button title="Cadastras" />
                </Form>

                <a src="/"><BiLeftArrowAlt /> Voltar para Login</a>
            </Main>
        </Container>
    );
};