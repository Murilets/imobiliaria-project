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

const Search = ({ setFilteredImoveis }) => {
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
      console.log("Resultados filtrados", response.data);
    } catch (error) {
      console.error("erro ao buscar imoveis", error);
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
            <option value="itajobi">Itajobi</option>
            <option value="ariranha">Ariranha</option>
            <option value="elisiario">Elisiário</option>
            <option value="embauba">Embaúba</option>
            <option value="novais">Novais</option>
            <option value="palmares">Palmares Paulista</option>
            <option value="paraiso">Paraíso</option>
            <option value="santa_adelia">Santa Adélia</option>
            <option value="cajobi">Cajobi</option>
            <option value="fernando_preste">Fernando Prestes</option>
            <option value="irapua">Irapuã</option>
            <option value="marapoama">Marapoama</option>
            <option value="severinia">Severínia</option>
            <option value="vista_alegre_do_alto">Vista Alegre Do Alto</option>
            <option value="rio_preto">Rio Preto</option>
            <option value="novo_horizonte">Novo Horizonte</option>
            <option value="ibira">Ibirá</option>
            <option value="termas_de_ibira"> Termas De Ibirá</option>
            <option value="jose_bonifacio">José Bonifácio</option>
            <option value="mirassol">Mirassol</option>
            <option value="ribeirao_preto">Ribeirão Preto</option>
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
