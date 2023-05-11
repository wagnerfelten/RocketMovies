import {Container, Main, Content, Form } from "./style";
import { BiLockAlt, BiEnvelope} from "react-icons/bi";
import { Link } from "react-router-dom";

import Cinema from "../../assets/img/Cinema.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
 
export default function Login(){
    return(
        <Container>
            <img src={Cinema} alt="Cinema"/>

            <Main>
                <Content>
                    <h1>RocktMovies</h1>
                    <p>aplicação para acompanhar tudo que assistir.</p>
                </Content>

                <Form>
                    <h2>Faça seu login</h2>

                    <Input placeholder="E-mail" icon={BiEnvelope}/>
                    <Input placeholder="Senha" icon={BiLockAlt}/>

                    <Button title="Entrar" to="home"/>
                </Form>

                <Link to="/cadastro">Criar Conta</Link>
                <Link to="/perfil">Esqueci a senha</Link>
            </Main>
        </Container>
    );
};