import React, { Fragment, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Right,
  Left,
  Thumb,
  Description,
  Profile,
  ProfileImg,
  ProfileDescription,
  ProfileContact,
  ProfileFormContact,
  Arrow,
} from "./styles";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import TopBanner from "../../components/TopBanner";
import WhatsAppButton from "../../components/WhatsAppButton";

const Imobi = () => {
  const carouselRef = useRef(null);
  const scrollToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;

    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setImagemAtual(index);
  };

  //armazena os inputs
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState(
    "Olá, estou interessado neste imóvel!"
  );
  useEffect(() => {
    const urlAtual = window.location.href;
    const mensagemPronta = `Olá, estou interessado neste imóvel! Poderia me enviar mais informações?\n\n ${urlAtual}`;
    setMensagem(mensagemPronta);
  }, []);
  const handleEnviarWhatsApp = () => {
    const numeroProprietario = "5517997651100"; //numero do proprietario do imovel

    //mensagem pre definida
    const msgDefinida = `Nome : ${nome}%0AEmail: ${email}%0AMensagem:  ${mensagem}`;

    //criando a URL do wahts com a mensagem definida
    const urlWhatsApp = `https://wa.me/${numeroProprietario}?text=${msgDefinida}`;

    //Abir a URL no whats
    window.open(urlWhatsApp, "_blank");
  };

  const { id } = useParams(); //pegando o id da URL
  const [imovel, setImovel] = useState(null);
  const [imagemAtual, setImagemAtual] = useState(0);

  console.log("ID do imovel", id);
  useEffect(() => {
    // Buscar dados do imóvel
    fetch(`http://localhost:3220/imoveis/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Imóvel recebido:", data);
        setImovel(data); // Certifique-se de ter o estado 'imovel' configurado
      })
      .catch((error) =>
        console.error("Erro ao buscar informações do imóvel:", error)
      );
  }, [id]); // O efeito será executado sempre que o id mudar

  if (!imovel) {
    return <p>Carregando...</p>; // Caso os dados ainda não tenham chegado
  }
  const proximaImagem = () => {
    carouselRef.current.scrollBy({
      left: 300, // role 300px pra direita
      behavior: "smooth", //desliza suavemente
    });
  };

  const imagemAnterior = () => {
    carouselRef.current.scrollBy({
      left: -300, //role 300px para esquerda
      behavior: "smooth",
    });
  };

  const getFeature = (type) => {
    switch (type) {
      case "GARAGE":
        return "garagem";
    }
  };

  return (
    <Fragment>
      {/* <TopBanner /> */}
      <Container>
        <Left>
          <Thumb>
            {imovel.photos && imovel.photos.length > 0 && (
              <>
                <Arrow className="Left" onClick={imagemAnterior}>
                  <FaArrowAltCircleLeft />
                </Arrow>

                <div
                  className="carousel"
                  ref={carouselRef}
                  onScroll={handleScroll}
                >
                  {Object.values(imovel.photos[0]).map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Imagem ${index + 1}`}
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="image-counter">
                  {imagemAtual + 1} / {Object.values(imovel.photos[0]).length}
                </div>

                <Arrow className="Right" onClick={proximaImagem}>
                  <FaArrowAltCircleRight />
                </Arrow>
              </>
            )}
          </Thumb>

          <Description>
            <hr></hr>
            <h2>
              {imovel.type} para Venda, {imovel.city} / {imovel.estado}
            </h2>
            <span className="price"> R$ {imovel.price}</span>
            <span className="street">{imovel.street} |</span>
            <span className="linebetween">a</span>
            <span className="linebetween2">a</span>
            <span className="features">
              {imovel.features.map((feature, index) => (
                <span key={index}>
                  {feature.quantity} {feature.description}
                  {index < imovel.features.length - 1 ? " |" : ""}
                </span>
              ))}
            </span>

            <span className="descricao">DESCRIÇÃO DO IMÓVEL</span>
            <p>{imovel.description}</p>
          </Description>
        </Left>
        <Right>
          <Profile>
            {/* <ProfileImg>
              <img
                src="https://i.pinimg.com/736x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg"
                alt=" "
              />
            </ProfileImg> */}
            <ProfileDescription>
              {/* <h3>RONEI VILELA</h3> */}
              {/* <p>Descricao do usuario</p> */}
            </ProfileDescription>
          </Profile>
          <ProfileContact>
            <h3>FALE AGORA CONOSCO</h3>
            {/* <p>(11) 111-1111</p> */}
            {/* <p>teste@teste.com</p> */}
          </ProfileContact>
          <ProfileFormContact>
            {/* <h3> Contate o anunciante:</h3> */}
            <form>
              <Input
                type="text"
                placeholder="Nome:"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <Input
                type="text"
                placeholder="E-mail:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextArea
                placeholder="Mensagem:"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
              <Button onClick={handleEnviarWhatsApp}> Enviar mensagem</Button>
            </form>
          </ProfileFormContact>
        </Right>
        <WhatsAppButton />
      </Container>
    </Fragment>
  );
};
export default Imobi;
