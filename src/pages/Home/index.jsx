import React, { Fragment, useEffect, useState } from "react";
import { Header, Wrapper } from "./styles";
import Banner from "../../components/Banner";
import Search from "../../components/Search";
import Cards from "../../components/Cards";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

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
      <Header>
        <h2>Propriedades em Destaque</h2>
      </Header>

      <Wrapper ref={elementRef} className={isVisible ? "visible" : ""}>
        {/*Percorrendo o array de imoveis  */}
        {filteredImoveis.length > 0 ? (
          filteredImoveis.map((imovel) =>(
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
          ))
        ) : filteredImoveis.length === 0 && (
          imoveis.map((imovel) => (
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
          ))
        )}
        {/* {Card} */}
      </Wrapper>
    </Fragment>
  );
};

export default Home;
