import React, { Fragment } from 'react';
import {FaFacebook, FaInstagram, FaWhatsapp, FaLocationArrow, FaClock } from "react-icons/fa"
import  LogoImg  from '../../assets/logo.png'
import { Container, Copy, Item  } from './styles';

const Footer = () =>{
  return (
     <Fragment>
         <Container>
      <Item>
        <img src={LogoImg} alt='' />
    
        <p style={{ right: '167px'}}>
          <FaLocationArrow style={{marginRight: '10px', fontSize: '27px', color: '#1E90FF'}} />
          R. Vinte e Um de Abril, 363 - Centro, Catanduva - SP, 15801-170, Brasil
        </p>
        <p  style={{top: '20px', right: '290px', textDecorationLine:'underline', color: 'rgb(9, 74, 253)'}}>
        <a href='https://wa.me/5517996374860' target='_blank' rel= "noopener noreferrer" style={{textDecoration:'none', color: 'rgb(9, 74, 253)'}}>
          <FaWhatsapp style={{marginRight: '7px', color: 'green', fontSize: '20px' }} />
          (17) 99637-4860
          </a>
        </p>
       

        <p style={{bottom: '50px', left: '-137px'}}>
          <FaClock style={{marginRight: '7px', fontSize: '20px', color: '#4079f3',}} />
          Segunda a Sexta das 8h as 17h
        </p>
        <nav className='social-icons'>
         
            {/* <li><span><FaFacebook style={{color: 'blue'}}  size={32}/></span></li> */}
            {/* <li><span><FaInstagram style={{background: 'linear-gradient(45deg, #c300ff, #ffb004)',
            borderRadius:'10px',
              fontSize: '40px'
            }} size={32}/></span></li> */}
            {/* <hr className='social-line' /> */}
        </nav>
      
      </Item>

      <Item className='services'>
        {/* <h3>Nossos Servicos</h3>
        <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
            <li><span>Atendimento Personalizado</span></li>
            <li><span>Fale Conosco</span></li>
        </ul> */}
      </Item>

      {/* <Item>
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
      
      </Item> */}

      
    </Container>
    <Copy>
        <p> ©Copyright 2023 - Bertelli Development  All Rights Reserved</p>
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
