import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Right,
  Left,
  Thumb,
  Description,
  Profile,
  ProfileImg,
  ProfileDescription,
  ProfileContact,
  ProfileFormContact,
} from "./styles";

import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import TopBanner from "../../components/TopBanner";


const Imobi = () => { 
  const { id } = useParams();  //pegando o id da URL 
  const [imovel, setImovel] = useState(null);
 console.log("ID do imovel", id);
 useEffect(() => {
  // Buscar dados do imóvel
  fetch(`http://localhost:3220/imoveis/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Imóvel recebido:", data);
      setImovel(data); // Certifique-se de ter o estado 'imovel' configurado
    })
    .catch((error) =>
      console.error("Erro ao buscar informações do imóvel:", error)
    );
}, [id]); // O efeito será executado sempre que o id mudar

if (!imovel) {
  return <p>Carregando...</p>; // Caso os dados ainda não tenham chegado
}

  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img
              src="https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </Thumb>
          <Description>
            <h2>{imovel.type}</h2>
            <p>
             {imovel.description}
            </p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img src= "https://i.pinimg.com/736x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg" alt=" " />
            </ProfileImg>
            <ProfileDescription>
              <h3>Ronei de Almeida Vilela</h3>
              <p>Descricao do usuario</p>
             
            </ProfileDescription>
          </Profile>
          <ProfileContact>
          <h3>Informacoes para contato</h3>
              <p>(11) 111-1111</p>
              <p>teste@teste.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3> Contate o anunciante:</h3>
            <form>
              <Input type="text" placeholder="Nome:"/>
              <Input type="text" placeholder="E-mail:"/>
              <TextArea  placeholder="Mensagem:"/>
              <Button> Enviar mensagem</Button>
            </form>

          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  );
};
export default Imobi;
