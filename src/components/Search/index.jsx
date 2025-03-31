import React, { useState } from 'react';
import { Container, Dropdown, DropdownCity, DropdownMaxValue, DropdownMinValue, DropdownBanheiro,Dropdownquarto, DropdownWrapper } from './styles';
import Button from '../../components/Button';
import axios from 'axios';
// import Cards from '../../components/Cards';

const Search = ({setFilteredImoveis})  => {
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

   const handleFilterChange = (e) =>{
     const { name, value} = e.target;
     setFilters({ ...filters, [name]: value});
   };



  const handleSearch = async () => {

    console.log("filtro", filters);

    const queryParams = Object.entries(filters)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

    try{
      const response = await axios.get(`http://localhost:3220/imoveis?${queryParams}`);
      setFilteredImoveis(response.data); // Atualiza os imóveis filtrados na Home
      console.log ("Resultados filtrados", response.data);
      
    } catch(error){
      console.error('erro ao buscar imoveis', error);
    }
  };
  return (
    <Container>
      <h1>Procurando por um imovel em especifico?</h1>
      <p></p>
      <DropdownWrapper>
      <Dropdown>
      <select name='type' onChange={handleFilterChange}>
    <option value="">Tipo de Imovel</option>
    <option value="apartamento">Apartamento</option>
  <option value="casa">Casa</option>
  <option value="sala_comercial">Sala Comercial</option>
  <option value="terreno">Terreno</option>
  </select>

      </Dropdown>
      <DropdownCity>
    <select name='city' onChange={handleFilterChange}>
    <option value="">Todas as Cidades</option>
    <option value="Catanduva">Catanduva</option>
  <option value="Pindorama">Pindorama</option>
  <option value="Catigua">Catigua</option>
  <option value="Tabapua">Tabapua</option>
  <option value="itajobi">Itajobi</option>
    </select>
      </DropdownCity>
      </DropdownWrapper>

      <DropdownWrapper>
      <DropdownMaxValue>

    <select name='maxPrice' onChange={handleFilterChange}>
    <option value="">Valor Maximo</option>
    <option value="500">R$500</option>
  <option value="1000">R$1.000</option>
  <option value="2000">R$2.000</option>
  <option value="5000">R$5.000</option>
  <option value="10000">R$10.000</option>
    </select>
      </DropdownMaxValue>

      
      <DropdownMinValue>
   
    <select name='minPrice' onChange={handleFilterChange}>
    <option value="">Valor Minimo</option>
    <option value="500">R$500</option>
  <option value="1000">R$1.000</option>
  <option value="2000">R$2.000</option>
  <option value="5000">R$5.000</option>
  <option value="10000">R$10.000</option>
    </select>
      </DropdownMinValue>
      </DropdownWrapper>

      <DropdownWrapper>
      <DropdownBanheiro>
    <select name='bathroom' onChange={handleFilterChange}>
    <option value="">Banheiros</option>
    <option value="1">1 banheiro</option>
  <option value="2">2 banehiros</option>
  <option value="3">3 banheiros</option>
  <option value="4">4 banheiros</option>
  <option value="5">5 banheiros ou mais </option>
    </select>
      </DropdownBanheiro>

      <Dropdownquarto>
    <select name='bedroom' onChange={handleFilterChange}>
    <option value="">Quartos</option>
    <option value="1">1 quarto</option>
  <option value="2">2 quartos</option>
  <option value="3">3 quartos</option>
  <option value="4">4 quartos</option>
  <option value="5">5 quartos ou mais </option>
    </select>
      </Dropdownquarto>
      </DropdownWrapper>
      <Button onClick={handleSearch}
        width = "48%"
        display = "inline-block"  
        marginTop = "20px"
        left = "60px"
      >
        BUSCAR
    
      </Button>
    </Container>
  );
};
 export default Search;