import React, { useState, useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './menu.css';
import ContextoUsuario from "../contextos/ContextoGlobal";

import logo from "./Image/Logo/Logo3.png"
import configIcon from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/1_Menu-1/Config.svg';

import categoriaIcon from  './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Invite.svg';
import loginIcon from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Logout.svg';
import clienteIcon from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Party & Profile.svg';
import fornecedorIcon from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Equipment.svg';
import produtosIcon from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Items.svg';
import forumIcon from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/1_Menu-1/Message.svg';
import contaIcon from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/1_Menu-1/Man.svg';

import configIconOn from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/1_Menu-1/Config_on.svg';
import loginIconOn from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Logout_on.svg';
import clienteIconOn from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Party & Profile_on.svg';
import fornecedorIconOn from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Equipment_on.svg';
import categoriaIconOn from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Invite_on.svg';
import produtosIconOn from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Items_on.svg';
import forumIconOn from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/1_Menu-1/Message_on.svg';
import contaIconOn from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/1_Menu-1/Man_on.svg';
import vendasIcon from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Guild_on.svg';
import vendasIconOn from './Image/SAO_icons/SAO_All-in-one_v4.000/SAO_Icons_v3.300/3_Menu-2/Guild_on.svg';

export default function Menu(props) {
  const [activeIcon, setActiveIcon] = useState(null);
  const [usuario, setUsuario] = useContext(ContextoUsuario);

  const ClickMouse = (icon) => {
    setActiveIcon(icon);
  };

  const mouseFora = () => {  
    setTimeout(() => {
      setActiveIcon(null);
    }, 2000);
  };

  const deslogar = () => {
    setUsuario((prevState) => ({
      ...prevState,
      logado: false,
    }));
  };

  const iconMappings = {
    login: activeIcon === 'login' ? loginIconOn : loginIcon,
    cliente: activeIcon === 'cliente' ? clienteIconOn : clienteIcon,
    fornecedor: activeIcon === 'fornecedor' ? fornecedorIconOn : fornecedorIcon,
    categoria: activeIcon === 'categoria' ? categoriaIconOn : categoriaIcon,
    produtos: activeIcon === 'produtos' ? produtosIconOn : produtosIcon,
    forum: activeIcon === 'forum' ? forumIconOn : forumIcon,
    conta: activeIcon === 'conta' ? contaIconOn : contaIcon,
    config: activeIcon === 'config' ? configIconOn : configIcon,
    vendas: activeIcon === 'vendas' ? vendasIconOn : vendasIcon,
  };

  const isMenuActive = activeIcon === 'config';

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-style">
      <Navbar.Brand href="/home" className="navbar-brand">
        <img src={logo} alt="Logo" height="60" className="d-inline-block align-top" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mb-right">
          {usuario.logado ? (
            <>
              <div className="ms-auto" onMouseEnter={() => ClickMouse('config')}>
                <img
                  src={isMenuActive ? configIconOn : configIcon}
                  alt="MENU"
                  className="menu-icon2"
                />
                <span className="menu-title"></span>
              </div>

              {isMenuActive && (
                <NavDropdown
                  id="basic-nav-dropdown"
                  className="nav-dropdown dropdown-right"
                  show={isMenuActive}
                  onMouseLeave={mouseFora}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/cliente"
                    className="nav-link"
                    eventKey="cliente"
                  >
                    <img src={iconMappings.cliente} alt="cliente" className="menu-icon" /> Cliente
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/fornecedor"
                    className="nav-link"
                    eventKey="fornecedor"
                  >
                    <img src={iconMappings.fornecedor} alt="fornecedor" className="menu-icon" /> Fornecedor
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/categoria"
                    className="nav-link"
                    eventKey="Categoria"
                  >
                    <img src={iconMappings.categoria} alt="categoria" className="menu-icon" /> Categoria
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/produto"
                    className="nav-link"
                    eventKey="produtos"
                  >
                    <img src={iconMappings.produtos} alt="produtos" className="menu-icon" /> Produtos
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/forum"
                    className="nav-link"
                    eventKey="forum"
                  >
                    <img src={iconMappings.forum} alt="forum" className="menu-icon" /> Forum
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/conta"
                    className="nav-link"
                    eventKey="conta"
                  >
                    <img src={iconMappings.conta} alt="conta" className="menu-icon" /> Conta
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/login"
                    className="nav-link"
                    eventKey="logout"
                    onClick={deslogar}
                  >
                    <img src={iconMappings.login} alt="logout" className="menu-icon" /> Logout
                  </NavDropdown.Item>
                  <NavDropdown.Item
                  as={Link}
                  to="/venda"
                  className="nav-link"
                  eventKey="vendas"
                 >
                  <img src={iconMappings.vendas} alt="vendas" className="menu-icon" /> Vendas
                </NavDropdown.Item>
                </NavDropdown>
              )}
            </>
          ) : (
            <>
             <div className="ms-auto" onMouseEnter={() => ClickMouse('config')}>
                <img
                  src={isMenuActive ? configIconOn : configIcon}
                  alt="MENU"
                  className="menu-icon2"
                />
                <span className="menu-title"></span>
              </div>
              {isMenuActive && (
                <NavDropdown
                id="basic-nav-dropdown"
                className="nav-dropdown dropdown-right"
                show={isMenuActive}
                onMouseLeave={mouseFora}
              >
              <NavDropdown.Item
                    as={Link}
                    to="/login"
                    className="nav-link"
                    eventKey="login"
                  >
                    <img src={iconMappings.login} alt="login" className="menu-icon" /> Login
                  </NavDropdown.Item>
              </NavDropdown>
               )}
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
