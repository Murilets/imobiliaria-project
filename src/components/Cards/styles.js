import styled from "styled-components";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
  width: 24%;
  margin-bottom: 12px;
  background-color: var(--white);
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
border-radius: 8px;
overflow: hidden;
transition: transform 0.3s, box-shadown 0.3s;
position: relative;
color: black;

&:hover {
  transform: scale(1.05);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

@media ${devices.laptop} {
  width: 45%;
}

@media ${devices.tablet}{
  width: 70%;
  padding:20px;
}

@media  ${devices.mobileL}{
width: 100%;
padding: 10px;
height: auto;
margin-left: 0;
}



`;
export const Img = styled.div`
  width: 100%;
  height: 330px;
  overflow: hidden;
  position: relative;
  color: black;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
top: 60%;
transform: translateY(-50%);
background-color:   rgba(0, 0, 0, 0.73);
color: white;
border-radius: 23%;
width: 37px;
height: 45px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

z-index: 2;

&.left{
  left: 10px;

  @media ${devices.mobileM}{
    left: -15px;
    width: 60px;
    height: 60px;
  }
}

&.right{
right: 10px;

  @media ${devices.mobileM}{
    right: -15px;
    width: 60px;
    height: 60px;
  }
}
&:hover {
  background-color:  rgba(0, 0, 0, 0.99);
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
`