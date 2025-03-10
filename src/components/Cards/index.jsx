import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Container, Description, Img, Itens, Arrow  } from './styles';
import { FaArrowAltCircleRight, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import card1 from "../../assets/imagenscard/card1.jpg";
import card2 from "../../assets/imagenscard/card2.jpg";
import card3 from "../../assets/imagenscard/card3.jpg";

const Cards = () => {
  const [currentImageIndex, SetCurrentImageIndex] = useState(0);

  const images  = [card1, card2, card3];
  const handleNextImage = () => {
    SetCurrentImageIndex((prevIndex) =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  };
  const handlePrevImage = () => {
    SetCurrentImageIndex((prevIndex) =>
    prevIndex === 0 ? images.length -1 : prevIndex -1);
  };


  return (

    <Container>
      
      <Img>
      <img src= {images[currentImageIndex]} alt='Imóvel' />
      <Arrow className='left' onClick={handlePrevImage}>
        <FaChevronLeft />
      </Arrow>
      <Arrow className='right' onClick={handleNextImage}>
        <FaChevronRight />
      </Arrow>
      </Img>
      <Description>
        <h4>Apartamento</h4>
        <Itens>
            <span><FaMapMarkerAlt />Jardim do Bosque, Catanduva,SP</span>
            <span>R$ 2.400,00 / mes</span>
        </Itens>
        <Link to='/imovel'> Detalhes <FaArrowAltCircleRight /></Link>
       
      </Description>
    
    </Container>
  
  )
}
export default Cards;
