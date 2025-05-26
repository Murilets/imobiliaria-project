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

  const [imoveis, setImoveis] = useState([]);
  const [filteredImoveis, setFilteredImoveis] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  <Search
    setFilteredImoveis={setFilteredImoveis}
    setIsFiltered={setIsFiltered}
  />;

  useEffect(() => {
    fetch("http://localhost:3220/imoveis")
      .then((response) => response.json())
      .then((data) => {
        setImoveis(data);
        setFilteredImoveis(data);
        console.log("Imóveis recebidos: ", data);
      })
      .catch((error) => {
        console.error("Erro ao buscar imóveis", error);
      });
  }, []);

  return (
    <Fragment>
      <Banner />

      <Search
        setFilteredImoveis={setFilteredImoveis}
        setIsFiltered={setIsFiltered} // <<< importante passar este set
      />

      <WhatsAppButton />

      <Header>
        <h2>Imóveis Disponíveis</h2>
      </Header>
      {filteredImoveis.length === 0 && isFiltered ? (
        <p>Nenhum imóvel encontrado na sua busca</p>
      ) : (
        <CardsWrapper
          isTwoCards={(filteredImoveis.length || imoveis.length) === 2}
        >
          {(filteredImoveis.length > 0 ? filteredImoveis : imoveis).map(
            (imovel) => (
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
            )
          )}
        </CardsWrapper>
      )}
    </Fragment>
  );
};

export default Home;
