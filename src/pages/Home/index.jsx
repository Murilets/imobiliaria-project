import React, { Fragment, useEffect, useState } from "react";
import { Header, Wrapper } from "./styles";
import Banner from "../../components/Banner";
import Search from "../../components/Search";
import Cards from "../../components/Cards";
import WhatsAppButton from "../../components/WhatsAppButton";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { CardsWrapper } from "../../components/Cards/styles";

const Home = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const [imoveis, setImoveis] = useState([]); //variavel para armazenar os imoveis
  const [filteredImoveis, setFilteredImoveis] = useState ([]);

  //buscar os imoveis do backend quando o componente for carregado
  useEffect(() => {
    fetch("http://localhost:3220/imoveis")
      .then((response) => response.json())
      .then((data) => {
        setImoveis(data);    //Armazena todos os imoveis
        setFilteredImoveis(data); // inicia com todos os imoveis exibidos
        console.log("Imóveis recebidos: ", data);
      })
      .catch((error) => {
        console.error("Erro ao buscar imóveis", error);
      });
  }, []);

  // let Card = [];
  // for(let i = 0; i<4; ++i){
  //   Card.push(<Cards key={i}/>)

  // }
  return (
    <Fragment>
      <Banner />
      <Search  setFilteredImoveis={setFilteredImoveis}/>
      {/* {filteredImoveis.map((imovel) => (
         <Cards />
      ))} */}
      <WhatsAppButton />
      <Header>
        <h2>Propriedades em Destaque</h2>
      </Header>

      <CardsWrapper isTwoCards={(filteredImoveis.length || imoveis.length) === 2}>
  {(filteredImoveis.length > 0 ? filteredImoveis : imoveis).map((imovel) => (
    <Cards
      key={imovel.id}
      id={imovel.id}
      type={imovel.type}
      price={imovel.price}
      street={imovel.street}
      cep={imovel.cep}
      city={imovel.city}
      estado={imovel.estado}
      features={imovel.features}
    />
  ))}
</CardsWrapper>
    </Fragment>
  );
};

export default Home;
