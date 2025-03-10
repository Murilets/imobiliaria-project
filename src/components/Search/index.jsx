import React from 'react';
import { Container, Dropdown, DropdownCity, DropdownMaxValue, DropdownMinValue, DropdownBanheiro,Dropdownquarto, DropdownWrapper } from './styles';
import Button from '../../components/Button';

const Search = () => {
  return (
    <Container>
      <h1>Procurando por um imovel em especifico?</h1>
      <p></p>
      <DropdownWrapper>
      <Dropdown>
      <label htmlFor= "imoveis"></label>
    <select id="imoveis" name='imoveis'>
    <option value="tipo">Tipo de Imovel</option>
    <option value="apartamento">Apartamento</option>
  <option value="casa">Casa</option>
  <option value="sala_comercial">Sala Comercial</option>
  <option value="terreno">Terreno</option>
    </select>
      </Dropdown>
      <DropdownCity>
      <label htmlFor= "cidades"></label>
    <select id="cidades" name='cidades'>
    <option value="todas">Todas as Cidades</option>
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
      <label htmlFor= "valormaximo"></label>
    <select id="valormaximo" name='valormaximo'>
    <option value="valormaximo">Valor Maximo</option>
    <option value="500">R$500</option>
  <option value="1000">R$1.000</option>
  <option value="2000">R$2.000</option>
  <option value="5000">R$5.000</option>
  <option value="10000">R$10.000</option>
    </select>
      </DropdownMaxValue>

      
      <DropdownMinValue>
      <label htmlFor= "valorminimo"></label>
    <select id="valorminimo" name='valorminimo'>
    <option value="valorminimo">Valor Minimo</option>
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
      <label htmlFor= "banheiro"></label>
    <select id="banheiro" name='banheiro'>
    <option value="banheiro">Banheiros</option>
    <option value="1">1 banheiro</option>
  <option value="2">2 banehiros</option>
  <option value="3">3 banheiros</option>
  <option value="4">4 banheiros</option>
  <option value="5">5 banheiros ou mais </option>
    </select>
      </DropdownBanheiro>

      <Dropdownquarto>
      <label htmlFor= "quarto"></label>
    <select id="banheiro" name='quarto'>
    <option value="quarto">Quartos</option>
    <option value="1">1 quarto</option>
  <option value="2">2 quartos</option>
  <option value="3">3 quartos</option>
  <option value="4">4 quartos</option>
  <option value="5">5 quartos ou mais </option>
    </select>
      </Dropdownquarto>
      </DropdownWrapper>
      <Button
        width = "48%"
        display = "inline-block"  
        marginTop = "20px"
        left = "60px"
      >
        BUSCAR
      </Button>


    </Container>
  )
}
 export default Search;