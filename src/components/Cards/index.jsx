import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Description, Img, Itens, Arrow, FeatureItem, Icon, Quantity } from "./styles";
import {
  FaArrowAltCircleRight,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaCar,
  FaBed,
  FaBath,
  FaHome,
} from "react-icons/fa";
const Cards = ({ id, type, price, street, cep, city, estado, features}) => {
  const [currentImageIndex, SetCurrentImageIndex] = useState(0);

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    //buscando imagens no back end
    fetch(`http://localhost:3220/imoveis/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("fotos recerbidas", data);
        setPhotos(data.photos[0] ? Object.values(data.photos[0]) : []); //pegando fotos no aray
      })
      .catch((error) =>
        console.log("nao foi possivel carregar as imagens", error)
      );
  }, [id]);

  const handleNextImage = () => {
    SetCurrentImageIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrevImage = () => {
    SetCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  //funcao para mapear o tipo de feature e retornar o icon correspondente
const getFeatureIcon = (type) => {
  switch  (type) {
    case "GARAGE":
    return <FaCar />;
    case "BEDROOM":
      return <FaBed />;
      case "BATHROOM":
        return <FaBath />;
        case "LIVINGROOM":
          return <FaHome />
          default:
            return null;
  }
};

  return (
    <Container>
      <Img>
        {photos.length > 0 ? (
          <>
            <img src={photos[currentImageIndex]} alt="Imóvel" />
            <Arrow className="left" onClick={handlePrevImage}>
              <FaChevronLeft />
            </Arrow>
            <Arrow className="right" onClick={handleNextImage}>
              <FaChevronLeft/>
            </Arrow>
          </>
        ) : (
          <p> Carregando imagens...</p>
        )}
      </Img>
      <Description>
        <h4>{type}</h4> {/*mostrando o tipo de imovel */}
        <Itens>
          <span>
            <FaMapMarkerAlt />
            {street}, {cep}, {city}, {estado}
          </span>
          <span>R$ {price}</span>

          {/*exbir as features junto com os icons */}
          <FeatureItem>
         {features && features.map((feature, index) =>(
          <span key={index}>
           <Icon>{getFeatureIcon(feature.type)}</Icon>  
           <Quantity>{feature.quantity}</Quantity>
          </span>
         ))}
          </FeatureItem>

        </Itens>
        <Link to={`/imovel/${id}`}>
          {" "}
          Detalhes <FaArrowAltCircleRight />
        </Link>
      </Description>
    </Container>
  );
};
export default Cards;
