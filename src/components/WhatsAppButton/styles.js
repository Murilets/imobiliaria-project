import styled, { css } from "styled-components";
import { fadeInUp, glow} from "../../styles/animations";
import {devices } from "../../styles/responsive";
export const Container = styled.a`

position: fixed;
bottom: 20px;
right: 20px;
background-color:rgb(39, 228, 108);
color: white;
width: 76px;
height: 70px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 4px 6px rgba(59, 59, 59, 0.23);
text-decoration: none;
cursor: pointer;
font-size: 30px;
z-index: 1000;
transition: box-shadow 1s ease-out, opacity 1s ease-out;
border: none;


@media ${devices.mobileM}{
    display: none;
    width: 62px;
    height: 64px;
}
`;


export const Notifications = styled.span`
    position: absolute;
    width: 27px;
    font-size: 25px;
    display: flex;
    height: 30px;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
    border-radius: 40px;
    bottom: 50px;
    right: 45px;
   animation:  ${fadeInUp} 0.8s ease-in-out;

   ${({showGlow}) =>
      showGlow && css`
      animation:  ${fadeInUp} 0.8s ease-in-out, ${glow} 1.5s ease-in-out 3;
      `}


      @media ${devices.mobileM}{
        display: none;
         height: 24px;
         width: 20px;
         right: 40px;
         top: -8px;
      }
`;