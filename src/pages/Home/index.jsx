import React, { Fragment, useEffect, useState } from "react";
import { Header, Wrapper } from "./styles";
import Banner from "../../components/Banner";
import Search from "../../components/Search";
import Cards from "../../components/Cards";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Home = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const [imoveis, setImoveis] = useState([]); //variavel para armazenar os imoveis

  //buscar os imoveis do backend quando o componente for carregado
  useEffect(() => {
    fetch("http://localhost:3220/imoveis")
      .then((response) => response.json())
      .then((data) => {
        setImoveis(data);    //guardando os imoveis no esttado
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
      <Search />
      <Header>
        <h2>Propriedades em Destaque</h2>
      </Header>
      <Wrapper ref={elementRef} className={isVisible ? "visible" : ""}>
        {/*Percorrendo o array de imoveis  */}

        {imoveis.map((imovel) =>(    //o metodo map percorre o array de imoveis

          <Cards 
          key={imovel.id}   //identificador unico
          id={imovel.id}
          type={imovel.type}   ///ttipo do imovel
          price={imovel.price}
          address={imovel.address}
          />
        ))}
        {/* {Card} */}
      </Wrapper>
    </Fragment>
  );
};

export default Home;
