import React, { useState } from "react";
import {
  Container,
  Dropdown,
  DropdownCity,
  DropdownMaxValue,
  DropdownMinValue,
  DropdownBanheiro,
  Dropdownquarto,
  DropdownWrapper,
} from "./styles";
import Button from "../../components/Button";
import axios from "axios";
// import Cards from '../../components/Cards';

const Search = ({ setFilteredImoveis, setIsFiltered }) => {
  const [filters, setFilters] = useState({
    // type: '',
    // city: '',
    // minPrice: '',
    // maxPrice: '',
    // bathroom: '',
    // bedroom: ''
  });

  //esttado para armazenar os imoveis filtrados
  //  const [filteredImoveis, setFilteredImoveis ] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  
  const handleSearch = async () => {
    console.log("filtro", filters);

    const queryParams = Object.entries(filters)
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    try {
      const response = await axios.get(
        `http://localhost:3220/imoveis?${queryParams}`
      );
      setFilteredImoveis(response.data); // Atualiza os imóveis filtrados na Home
      setIsFiltered(true)  // Aqui marca que buscou com filtro

      console.log("Resultados filtrados", response.data);
    } catch (error) {
      console.error("erro ao buscar imoveis", error);
      if (error.response && error.response.status === 404){
        setFilteredImoveis([]);
        setIsFiltered(true);
      }
    }
  };
  return (
    <Container>
      <h1>Procurando por um imovel em especifico?</h1>
      <p></p>
      <DropdownWrapper>
        <Dropdown>
          <select name="type" onChange={handleFilterChange}>
            <option value="">Tipo de Imovel</option>
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
            <option value="sala_comercial">Sala Comercial</option>
            <option value="terreno">Terreno</option>
            <option value="chacara">Chácara</option>
            <option value="sitio">sítio</option>
            <option value="fazenda">fazendas</option>
            <option value="hotel">Hotel</option>
             <option value="rancho">Rancho</option>
             <option value="predio">Prédio</option>
             <option value="shopping">Shopping</option>
          </select>
        </Dropdown>
        <DropdownCity>
          <select name="city" onChange={handleFilterChange}>
            <option value="">Todas as Cidades</option>
            <option value="Catanduva">Catanduva</option>
            <option value="Pindorama">Pindorama</option>
            <option value="Catigua">Catigua</option>
            <option value="Tabapua">Tabapuã</option>
            <option value="Itajobi">Itajobi</option>
            <option value="Ariranha">Ariranha</option>
            <option value="Elisiario">Elisiário</option>
            <option value="Embauba">Embaúba</option>
            <option value="Novais">Novais</option>
            <option value="Palmares">Palmares Paulista</option>
            <option value="Paraiso">Paraíso</option>
            <option value="Santa Adélia">Santa Adélia</option>
            <option value="Cajobi">Cajobi</option>
           <option value="Fernando Prestes">Fernando Prestes</option>
            <option value="Irapua">Irapuã</option>
            <option value="Marapoama">Marapoama</option>
            <option value="Severinia">Severínia</option>
          <option value="Vista Alegre Do Alto">Vista Alegre Do Alto</option>
            <option value="Rio Preto">Rio Preto</option>
            <option value="Novo Horizonte">Novo Horizonte</option>
            <option value="Ibirá">Ibirá</option>
            <option value="Termas De Ibirá">Termas De Ibirá</option>
            <option value="José Bonifácio">José Bonifácio</option>
            <option value="Mirassol">Mirassol</option>
            <option value="RibeiraoPreto">Ribeirão Preto</option>
          </select>
        </DropdownCity>
      </DropdownWrapper>

      <DropdownWrapper>
        <DropdownMaxValue>
          <select name="maxPrice" onChange={handleFilterChange}>
            <option value="">Valor Maximo</option>
            <option value="100">R$100</option>
            <option value="500">R$500</option>
            <option value="1000">R$1.000</option>
            <option value="2000">R$2.000</option>
            <option value="3000">R$3.000</option>
            <option value="5000">R$5.000</option>
            <option value="10000">R$10.000</option>
            <option value="30000">R$30.000</option>
            <option value="50000">R$50.000</option>
            <option value="80000">R$80.000</option>
            <option value="100000">R$100.000</option>
            <option value="500000">R$500.000</option>
            <option value="900000">R$900.000</option>
            <option value="R$1.000.000">R$1.000.000</option>
          </select>
        </DropdownMaxValue>

        <DropdownMinValue>
          <select name="minPrice" onChange={handleFilterChange}>
            <option value="">Valor Minimo</option>
        <option value="100">R$100</option>
            <option value="500">R$500</option>
            <option value="1000">R$1.000</option>
            <option value="2000">R$2.000</option>
            <option value="3000">R$3.000</option>
            <option value="5000">R$5.000</option>
            <option value="10000">R$10.000</option>
            <option value="30000">R$30.000</option>
            <option value="50000">R$50.000</option>
            <option value="80000">R$80.000</option>
            <option value="100000">R$100.000</option>
            <option value="500000">R$500.000</option>
            <option value="900000">R$900.000</option>
            <option value="R$1.000.000">R$1.000.000</option>
          </select>
        </DropdownMinValue>
      </DropdownWrapper>

      <DropdownWrapper>
        <DropdownBanheiro>
          <select name="bathroom" onChange={handleFilterChange}>
            <option value="">Banheiros</option>
            <option value="1">1 banheiro</option>
            <option value="2">2 banehiros</option>
            <option value="3">3 banheiros</option>
            <option value="4">4 banheiros</option>
            <option value="5">5 banheiros ou mais </option>
          </select>
        </DropdownBanheiro>

        <Dropdownquarto>
          <select name="bedroom" onChange={handleFilterChange}>
            <option value="">Quartos</option>
            <option value="1">1 quarto</option>
            <option value="2">2 quartos</option>
            <option value="3">3 quartos</option>
            <option value="4">4 quartos</option>
            <option value="5">5 quartos ou mais </option>
          </select>
        </Dropdownquarto>
      </DropdownWrapper>
      <Button
        onClick={handleSearch}
        width="48%"
        display="inline-block"
        marginTop="20px"
        left="60px"
      >
        BUSCAR
      </Button>
    </Container>
  );
};
export default Search;
