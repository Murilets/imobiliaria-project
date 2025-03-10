import React, { Fragment } from 'react';
import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa"
import  LogoImg  from '../../assets/logo.png'
import { Container, Copy, Item  } from './styles';


const Footer = () =>{
  return (
     <Fragment>
         <Container>
      <Item>
        <img src={LogoImg} alt='' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at arcu iaculis, mollis libero eget, dapibus felis. Maecenas at enim eleifend, sagittis elit ut, placerat  Nullam ut mattis erat. </p>
        <nav>
            <li><span><FaFacebook  size={32}/></span></li>
            <li><span><FaInstagram size={32}/></span></li>
            <li><span><FaWhatsapp size={32}/></span></li>
            
        </nav>
      
      </Item>

      <Item>
        <h3>Nossos Servicos</h3>
        <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
        </ul>
      </Item>

      <Item>
        <h3>Nossos Servicos</h3>
        <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
        </ul>
      
      </Item>

      <Item>
        <h3>Nossos Servicos</h3>
        <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
        </ul>
      
      </Item>

      
    </Container>
    <Copy>
        <p> ©Copyright 2022 - Workside Tecnologia All Rights Reserved</p>
        <ul>
        <li><span>Sobre a Empresa</span></li>
            <li><span>Termos de Uso</span></li>
            <li><span>Politica de Privacidade</span></li>
            <li><span>Politica de Cookies</span></li>
        </ul>
    </Copy>
     </Fragment>
  )
}

export default Footer;
