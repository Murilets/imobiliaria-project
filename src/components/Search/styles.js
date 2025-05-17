import styled from "styled-components";
import { borderFill, fadeInUp } from "../../styles/animations";
import { devices } from "../../styles/responsive";
// Container principal
export const Container = styled.div`
  position: relative;
  width: 40%;
  height: auto;
  gap: 10px;
  padding: 90px 90px;
  background-color: rgba(238, 238, 238, 0.37);
  margin: 20px auto;
  border-radius: 20px;
  border: 5px solid rgba(39, 105, 248, 0.83);
  animation: ${fadeInUp} 1s ease-out, ${borderFill} 1s ease-out 0.5s forwards;

  h1 {
    height: 97px;
    width: auto;
    margin-top: -60px;
    position: relative;
    font-size: 34px;
    left: 60px;
    font-family: Arial, Helvetica, sans-serif;
    animation: ${fadeInUp} 1s ease-out;
  }

  p {
    padding: 20px;
    margin-top: -40px;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }
  /* 
  @media (max-width: 600px){
    h1{
      font-size: 30px;
      color: red
    }
  } */

  @media ${devices.tablet} {
    width: 100%;
    padding: 20px;
    bottom: 330px;
    background-color: rgba(163, 158, 158, 0.3);
    animation: none;

    h1 {
      position: relative;
      font-size: 20px;
      padding: 35px 20px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      left: 30px;
      top: 20px;
      font-family: Arial, Helvetica, sans-serif;
    }

    p {
      font-size: 16px;
    }
  }
`;

//Wrapper para alinhar os dropdowns
export const DropdownWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: -10px;

  @media ${devices.tablet} {
    flex-direction: column; /*no mobile os dropdowns fica empiladfos */
    align-items: center;
  }
`;
//estilizacao base para todos os dropdowns
const DropdownBase = styled.div`
  width: 240px;
  margin: 10px;
  align-items: center;
  justify-content: center;

  select {
    width: 100%;
    height: 50px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    background-color: var(--primary);
    border-radius: 5px;
  }
  // ajust especificos para mobile
  @media ${devices.tablet} {
    width: 100%;

    select {
      position: relative;
      display: flex;
      align-items: left;
      width: 240px;
      height: 47px;
    }
  }
`;

//aplicando o estilo para todos os dropdowns
export const Dropdown = styled(DropdownBase)``;
export const DropdownCity = styled(DropdownBase)``;
export const DropdownMaxValue = styled(DropdownBase)``;
export const DropdownMinValue = styled(DropdownBase)``;
export const DropdownBanheiro = styled(DropdownBase)``;
export const Dropdownquarto = styled(DropdownBase)``;

// Dropdown comum
// export const Dropdown = styled.div`
//   width: 200px;
//   padding: 0 auto;
//   font-size: 16px;
//   border-radius: 3px;
//   border: 1px solid #ccc;
//   position: relative; /* Mudando para 'relative' */
//   background-color: #fff;
//   appearance: none; /* remove a flecha padrão */
//   background-image: url('data:image/svg+xml;base64,...');
//   background-position: right 10px center;
//   background-repeat: no-repeat;
//   z-index: 4;

//   select {
//     width: 100%;
//     height: 52px;
//     font-size: 15px;
//     font-family: Arial, Helvetica, sans-serif;
//     font-weight: bold;
//     cursor: pointer;
//     background-color: var(--primary);
//     margin-left: 0;
//   }
// `;

// // Dropdown das Cidades (para não sobrepor)
// export const DropdownCity = styled.div`
// position: absolute;
//   margin-top: -50px;
//   z-index: 2;

//   select {
//     width: 200px;
//     height: 52px;
//     font-size: 15px;
//     font-family: Arial, Helvetica, sans-serif;
//     font-weight: bold;
//     cursor: pointer;
//     background-color: var(--primary);
//     margin-left: 470px;

//   }
// `;

// // Dropdown do Valor Máximo
// export const DropdownMaxValue = styled.div`
//   margin-top: -52px;
//   position: absolute;
//   z-index: 3;

//   select {
//     width: 200px;
//     height: 52px;
//     font-size: 15px;
//     font-family: Arial, Helvetica, sans-serif;
//     font-weight: bold;
//     cursor: pointer;
//     background-color: var(--primary);
//     margin-left: 230px;

//   }
// `;

// export const DropdownMinValue = styled.div`
//   margin-top: 20px;
//   position: relative;
//   z-index: 4;
//   display: inline-block; /* Permite que os dois elementos fiquem lado a lado */

//   select {
//     width: 200px;
//     height: 52px;
//     font-size: 15px;
//     font-family: Arial, Helvetica, sans-serif;
//     font-weight: bold;
//     cursor: pointer;
//     background-color: var(--primary);
//   }
// `;

// export const DropdownBanheiro = styled.div`
//   margin-top: 20px;  /* Ajuste para alinhar com o primeiro dropdown */
//   position: relative;
//   z-index: 5;
//   display: inline-block; /* Alinha ao lado do primeiro */
//   margin-left: 30px; /* Ajusta o espaço entre os dropdowns */

//   select {
//     width: 200px;
//     height: 52px;
//     font-size: 15px;
//     font-family: Arial, Helvetica, sans-serif;
//     font-weight: bold;
//     cursor: pointer;
//     background-color: var(--primary);
//   }
// `;

// export const Dropdownquarto = styled.div`
//   margin-top: 20px;  /* Ajuste para alinhar com o primeiro dropdown */
//   position: relative;
//   z-index: 5;
//   display: inline-block; /* Alinha ao lado do primeiro */
//   margin-left: 40px; /* Ajusta o espaço entre os dropdowns */

//   select {
//     width: 200px;
//     height: 52px;
//     font-size: 15px;
//     font-family: Arial, Helvetica, sans-serif;
//     font-weight: bold;
//     cursor: pointer;
//     background-color: var(--primary);
//   }
// `;
