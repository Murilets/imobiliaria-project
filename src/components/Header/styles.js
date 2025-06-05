import styled from "styled-components"; //importando a biblioteca styled
import { devices } from "../../styles/responsive";
export const Container = styled.div`
  padding: 25px 150px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--white);

   @media ${devices.tablet}{
    padding: 10px 20px;
    height: 70px;
   }

   

`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 160px;
    height: auto;
  }
  p{
    display: none;
  }
  
  @media ${devices.tablet}{

    img{
      width: 120px;
     
    }
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin-right: 190px;
    margin-bottom: 55px;
  }
  p{
    display: none;
  }

`;

//botao do menu hamburguer
export const MenuButton = styled.button`
  display: flex;
  visibility: hidden;
  position: relative;
  top: -2px;
  right: 10px;
  background: none;
  color: black;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000;
  
@media ${devices.tablet}{
  visibility: visible;
}
`;

 export const CloseIcon = styled.div`
 display: flex;
 position: absolute;
 top: 4px;
 right: 25px;
 font-size: 28px;
 cursor: pointer;
 color: var(--black);
  h3{
    position: fixed;
    display: flex;
    margin-left: -180px;
    top: 10px;
    color: rgb(86, 131, 253);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }

  &:hover {
    color: var(--alt-color);
  }

 
 `;
//sidebar para dispositivos moveis
export const Sidebar = styled.div`
  position: fixed; /* CORRIGIDO */
  top: 0;
  right: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
  width: 250px;
  height: 100vh; /* altura total da tela */
  background-color: rgb(255, 255, 255);
  box-shadow: -3px 0px 10px rgba(0, 0, 0, 0.2);
  transition: right 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  z-index: 1000;

@media ${devices.tablet}{
  span{
    position: relative;
    display: flex;
    height: 5px;
    top: -35px;
    width: 27vh;
    color: black;
    background-color :rgba(204, 203, 203, 0.54);
  }
   p{
    display: flex;
    justify-content: center;
    position: relative;
    top: 5px;
     height: 65px;
     width: 100%;
    color: rgb(16, 201, 62);;
    font-family: Arial, Helvetica, sans-serif;
   }
 

}
`;

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(34, 34, 34, 0.2);
z-index: 999;

`
export const Menu = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

     .info-container {
       display: flex;
       gap: 20px; /* espaçamento entre os textos */
       
       .info-group{
         display: flex;
        flex-direction: center;
        gap: 15px; /* espaço entre cada linha */
        user-select: none;
       }
    }
    p{
     font-size: clamp(10px, 2vw, 15px);
        background-color: rgba(187, 187, 187, 0.03);
        color: rgb(137, 137, 138);
        text-align: left;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
     }
    li{
      position: relative;
      border: 1px solid var(--gray );
      border-radius: 10px;
      padding: 10px;
      transition: background-color 0.3s ease;
      span{
       font-size: 1.2rem;
       font-weight: 300;
      }
       &:hover{
        background-color: var(--alt-color);
        cursor: pointer;
       }
      }

    @media ${devices.tablet} {
    .info-container {
      display: none;
    }
  }
}
    /* li.whatsapp{
      border: none;

      &:hover{
        background-color:rgb(0, 233, 70) ;
        cursor: pointer;
      }
    }

    .whatsapp{
      width: 150px;
      height: 67px;
      right: 430px;
      border-color:rgb(64, 206, 32);
      border-radius: 3px;
      color: white;
      background-color:rgb(64, 206, 32);
      z-index: 2;
    } */

    //esconde o menu no mobile

    
`;
