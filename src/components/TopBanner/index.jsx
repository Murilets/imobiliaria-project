import React, { useState, useEffect} from 'react';
import { Container, Text } from './styles';
import { useParams } from 'react-router-dom';
const TopBanner = ()=> {
const { id } = useParams(); //pegando o id da url
const [imovel, setImovel] = useState(null);
console.log("ID do imovel teste", id)
useEffect(() => {
  //buscar dados do imovel
  fetch (`http://localhost:3220/imoveis/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("imovel recebido teste", data);
    setImovel(data);  //estado do imovel configurado
  })
  .catch ((error) =>
  console.log ("erro ao buscar informacoes do imovel", error)
);
}, [id]);  //sera executado sempre que o ID mudar

if (!imovel){
return <p>carregando...</p>
}

  return (
    <Container>
      <Text>
        <h2>{imovel.type}</h2>
        <p>{imovel.description}</p>
      </Text>
    </Container>
  )
}
export default TopBanner;
