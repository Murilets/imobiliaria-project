import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Text, CustomSlider, CarouselImage, CarouselImageWrapper, AnimatedText } from './styles';

//importando imagens locais
import carrosel1 from '../../assets/imagenscarrosel/carrosel1.jpg';
import carrosel2 from '../../assets/imagenscarrosel/carrosel2.jpg';
import carrosel3 from '../../assets/imagenscarrosel/carrosel3.jpg';
import carrosel4 from '../../assets/imagenscarrosel/carrosel4.jpg';

const  Carrosel = [carrosel1, carrosel2, carrosel3, carrosel4]

const Banner = ()=> {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidestoScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade:true,
    cssEase: "ease-in-out",
  };

  return (
  <Container>
    <CustomSlider {...settings}>
      {Carrosel.map((url, index) => (
        <CarouselImageWrapper key={index}>
          <CarouselImage src={url} alt={`Slide ${index + 1}`} />
          </CarouselImageWrapper>
      ))}
    </CustomSlider>

    <Text>
      <AnimatedText>O seu Imovel dos sonhos que você procura esta aqui!</AnimatedText>
    
   
    </Text>

  </Container>
  )
}

export default Banner;