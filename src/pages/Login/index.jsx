import React from 'react';
import Input from  "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Form, Label} from "./styles";
const Login =() => {
  return (
    <Container >
      <h2>Acesse sua conta</h2>
      <p> Entre com seu e-mail e senha!</p>
      <ContainerForm>
        <Form>
          <Label>E-mail</Label>
          <Input type="text" placeholder="Informe seu Email" />
          <Label>Senha</Label>
          <Input type="password" placeholder="Informe sua Senha"/>
          <Button> Entrar</Button>
          <p style={{marginTop:"10px"}}>Não possui um cadastro? {""}
            <a
            href='/Cadastro'
            style={{color: "#3498db", textDecoration:"underline", margin: '5px'}} 
            >
              Crie uma conta aqui
              </a>
          </p>
        </Form>
      </ContainerForm>
    </Container >
  )
}
export default Login;