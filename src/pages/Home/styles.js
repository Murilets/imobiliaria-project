import styled from "styled-components";
import { fadeInUp } from "../../styles/animations";
import { devices } from "../../styles/responsive";

export const Header = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 25px 150px;
font-family: Arial, Helvetica, sans-serif;
animation: ${fadeInUp} 0.8s ease-out;

/* Responsavidade*/
@media (max-width: 1024px){
  padding:  20px 80px;
}

@media (max-width: 768px){
  position: absolute;
  top: 50.0rem;
  padding: 15px 40px;
  flex-direction: column;
  align-items: flex-start;
}
@media  ${devices.mobileL}{
  width: 100%;
}

`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px 150px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.visible { /* Quando o usuario desce e o elemento aparece */
    opacity: 1;
    transform: translateY(0);

  }

  @media (max-width: 768px){
    padding: 15px 40px; /* ajuste para tablets */
    flex-direction: column; /* coloca itens em coluna */
    align-items: flex-start;
    gap: 20px; /* Adiciona espaco entre os elementos */
  }
  @media (max-width: 480px) {
    padding: 10px 20px; /* ajuste para celulares */
  }


`;