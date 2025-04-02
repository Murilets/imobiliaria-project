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

   @media ${devices.mobileM}{
    padding: 10px 20px;
    height: 70px;
   }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 300px;
  }
  
  @media ${devices.mobileM}{

    img{
      width: 220px;
    }
    display: flex;
    flex-direction: column;
    height: 68px;
    width: 100%;
    margin-right: 45px;
  }

  @media ${devices.tablet}{
    width: 500px;
    justify-content: space-between;
  }
`;

//botao do menu hamburguer
export const MenuButton = styled.button`
display: none;
background: none;
color: black;
border: none;
font-size: 1.8rem;
cursor: pointer;
margin-left: 20px;

@media ${devices.tablet}{
  display: block;
}

`;

 export const CloseIcon = styled.div`
 position: absolute;
 top: 15px;
 right: 35px;
 font-size: 24px;
 cursor: pointer;
 color: var(--black);

  &:hover {
    color: var(--alt-color);
  }
 `;
//sidebar para dispositivos moveis
export const Sidebar = styled.div`
position: relative;
top: 0;
right: ${({menuOpen}) => (menuOpen ? "0" : "-100%")};
width: 250px;
height: 260px;
margin-left: -90px;
margin-top: 200px;
background-color: rgb(255, 255, 255);
box-shadow: -3px 0px 10px rgba(0,0,0,0.2);
transition: right 0.5s ease-in-out;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 70px;
z-index: 1000;
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
    p{
      position: absolute;
      width: 20%;
      height: auto;
      font-size: clamp(17px, 5vw, 15px);
      display: flex;
      left: 1200px;
      background-color: rgba(187, 187, 187, 0.03);
      color:  rgb(137, 137, 138);
      bottom: 880px;
      text-align: left;
     
      max-width: 100%;
      font-family: Arial, Helvetica, sans-serif;
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
    @media ${devices.mobileM}{
      display: none;
    
    }

      li{
        width: 100%;
        text-align: center;
      }
    }
        

      li{
        flex-direction: column;
        padding: 5px;
        span{
          font-size: 1rem;;
        }
      }
    

 
  
`;
