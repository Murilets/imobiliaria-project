import styled from "styled-components";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
  position: relative;
  width: 25%;
  margin-bottom: 12px;
  background-color: var(--white);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  color: black;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

  @media ${devices.tablet} {
    width: 100%;
    bottom: 200px;
    padding: 10px;
  }
`;

export const CardsWrapper = styled.div`
   display: flex;
  flex-wrap: wrap;

  justify-content: ${({ isTwoCards }) => (isTwoCards ? "left" : "flex-start")};
  gap: 3rem;
  padding: 2rem;
`;
export const Img = styled.div`
  width: 100%;
  height: 420px; // antes era 350px
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${devices.tablet} {
    width: 100%;
    height: 300px; // um pouco menor no mobile
  }
`;
export const Description = styled.div`
  padding: 12px;
  color: black;
  a {
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  h4 {
    color: black;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 10px;
  }


`;

export const Itens = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: black;
  span {
    margin-bottom: 10px;
  }

@media ${devices.mobileS}{
  span{
    font-size: 0.8rem;
  }
}
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }

  @media ${devices.tablet} {
    width: 35px;
    height: 35px;
    
  }
`;


export const FeatureItem = styled.div`
  display: flex;          /* Alinha os ícones e números na horizontal */
  gap: 20px;              /* Espaçamento entre o ícone e o número */
  flex-wrap: wrap;        /* Permite quebra de linha se não couber em uma linha */
  margin-top: 5px;  
`;

export const Icon = styled.span`
font-size: 23px;
color:rgb(104, 177, 255);
`;

export const Quantity = styled.span`
position: relative;
font-size: 18px;
right: -6px;
user-select: none;
`;