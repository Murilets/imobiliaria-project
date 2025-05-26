//importacoes
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaLocationArrow,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Container,
  Logo,
  Menu,
  Sidebar,
  MenuButton,
  CloseIcon,
  Overlay,
} from "./styles";

import LogoImg from "../../assets/visaoimoveislogo1.png";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSideBar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={LogoImg} alt="" />
        </Link>
    
      </Logo>

      {/*Overlay para escurecer o fundo quando abre o menu hamburguer */}

      {menuOpen && <Overlay onClick={() => setMenuOpen(false)} />}

      {/*botao do menu hambuguer */}

      {/* <MenuButton onClick={toggleSideBar}>
      <span>&#9776;</span> icone do menu hamburguer */}
      {/* </MenuButton> */}

      {/*Sidebar que aparece quando o botao hamburguer e clicado */}
      {/* {isSidebarOpen && (
      <Sidebar>
        <ul>
          <li><Link to='/Login' onClick={() => setIsSidebarOpen(false)}>Login/Cadastrar</Link></li>
          <li><Link to='/Sobre' onClick={() => setIsSidebarOpen(false)}>Sobre</Link></li>
          <li><Link to='/Contatos' onClick={() => setIsSidebarOpen(false)}>Contatos</Link></li>
          <li className="whatsapp"><a href="https://wa.me/5517997651100" target="_blank" rel="noopener noreferrer" onClick={() => setIsSidebarOpen(false)}><FaWhatsapp /> (17) 99637-4860</a></li>
        </ul>
      </Sidebar>
    )} */}

      {/*icone do menu so aparece no mobile*/}

      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

      {/*Sidebar para Mobile */}

      <Sidebar menuOpen={menuOpen}>
        <CloseIcon onClick={() => setMenuOpen(false)}>
          <h3>MENU</h3>
          <FaTimes />
        </CloseIcon>
        <ul>
          <li>
            
             <span></span> 
            <Link to="/Login">
              {/* <p>Login/Cadastrar</p> */}
            </Link>
          </li>
          <li className="whatsapp">
            <a
              href="https://wa.me/5517997651100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                
                <FaWhatsapp style={{color: " rgb(50, 207, 44)"}}></FaWhatsapp> (17) 99765-1100
              </p>{" "}
            </a>{" "}
          </li>
        </ul>
      </Sidebar>

      {/*Menu normal desktop */}
      <Menu>
        <ul>
          {/* <li><Link to='/Login'><span>Login/Cadastrar</span></Link></li> */}
          {/* <li className='whatsapp'>
            <a href='https://wa.me/5517997651100' target='_blank' rel= "noopener noreferrer">
              <FaWhatsapp /> (17) 99637-4860
            </a>
            </li>            */}

          <p style={{ right: "167px" }}>
            R. Vinte e Um de Abril, 363 - Centro, Catanduva - SP, 15801-170,
            Brasil
          </p>
          <p style={{ left: "790px", top: "35px" }}>
          Funcionamento de Segunda á Sexta
          </p>
          <p style={{ left: "790px", top:"55px" }}>
          Dás 8h ás 17h
          </p>

          {/* <p  style={{top: '10px', right: '220px', textDecorationLine:'underline', color: 'rgb(9, 74, 253)'}}> */}
          {/* <a href='https://wa.me/5517997651100' target='_blank' rel= "noopener noreferrer" style={{textDecoration:'none', color: 'rgb(9, 74, 253)'}}>
                      <FaWhatsapp style={{marginRight: '7px', color: 'green', fontSize: '15px' }} />
                      (17) 99637-4860
                      </a> */}
          {/* </p> */}
        </ul>
      </Menu>
    </Container>
  );
};
export default Header;
