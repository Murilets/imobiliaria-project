import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Container, Description, Img, Itens, Arrow  } from './styles';
import { FaArrowAltCircleRight, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import card1 from "../../assets/imagenscard/card1.jpg";
import card2 from "../../assets/imagenscard/card2.jpg";
import card3 from "../../assets/imagenscard/card3.jpg";

const Cards = ({ id,type, price, address}) => {
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
        <h4>{type}</h4>     {/*mostrando o tipo de imovel */}
        <Itens>
            <span><FaMapMarkerAlt />{address}</span>
            <span>R$ {price}</span>
        </Itens>
        <Link to={`/imovel/${id}`}> Detalhes <FaArrowAltCircleRight /></Link>
       
      </Description>
    
    </Container>
  
  )
}
export default Cards;
