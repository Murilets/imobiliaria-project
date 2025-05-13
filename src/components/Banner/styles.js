import styled from "styled-components";
import { expandText, fadeInUp,  typingEffect } from "../../styles/animations";
import Slider from "react-slick";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
  padding: 50px 50px;
  position: relative;
  min-height: 600px; /* alinha com o carrosel */
  animation: ${fadeInUp} 0.8s ease-out;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Impede o scroll lateral */
  box-sizing: border-box;
  
  
  @media ${devices.mobileL}{
    height: 400px;
   
  }

  @media ${devices.tablet}{
   height: 400px;
  }
`;

export const CustomSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 0;

  @media ${devices.mobileL}{
   height: 450px;
   
  }


`;

export const CarouselImageWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
overflow: hidden;

&:before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(224, 224, 224, 0.36);
  z-index:1;
}
`;

export const CarouselImage = styled.img`
  max-width: 100%;
  max-height: 600px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
 transition: transform 8s ease;
 /* aplica o zoom na imagens do slider */
 .slick-active &{
  transform: scale(1.1); /**/
 }
`;

export const Text = styled.div`
  width: 55%;
  text-align: center;
  position: absolute;
  margin: 70px;
  left: 20%;
  bottom: 230px;
  z-index: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 
 
 @media ${devices.tablet}{
  position: absolute;
   width: 150px;
   bottom: 50px;
   left: 50px;
   transform: translateX(-50%);
   word-wrap: wrap;
 }


`;
  
  //animando o h2
export const AnimatedText = styled.h2`

  color: var(--white);
  background-color: rgba(32, 32, 32, 0.07);;
  font-size: 43px;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 300px;
  user-select: none;
  z-index: 1;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  line-height: 1.0;
  word-wrap: normal ;
  animation: ${typingEffect} 3s steps(90) 0s forwards;


//responsividade (talvez nao esteja funcioanndo)

@media ${devices.mobileL}{
  font-size: 24px;
    margin-top: 0;
    animation: none;
    padding: 0 0px;
    width: 100%;
    white-space: normal;

}
@media ${devices.tablet}{
  position: relative;
  right: 190px;
  font-size: 30px;
  max-height: 100%;
  size: 10px;
  bottom: -70px;
  padding: -10px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
}
`;

