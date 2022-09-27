import { useLocation  } from "react-router";
import { Link } from "react-router-dom";

import logo from "../assets/logo.PNG";
import "./header.css"

import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
    const { pathname } = useLocation();

    return (
        <Navbar expand="sm">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img id="logo" src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav>
                    <Nav.Link as={Link} to="/" disabled={pathname === "/"}>Главная</Nav.Link>
                    <Nav.Link as={Link} to="/catalog" disabled={pathname === "/catalog"}>Каталог</Nav.Link>
                    <Nav.Link as={Link} to="/about" disabled={pathname === "/about"}>О нас</Nav.Link>
                    <Nav.Link as={Link} to="/contact" disabled={pathname === "/contact"}>Контакты</Nav.Link>
                    <Nav.Link as={Link} to="/singin" disabled={pathname === "/singin"}>Вход</Nav.Link>
                    <Nav.Link as={Link} to="/singup" disabled={pathname === "/singup"}>Регистрация</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Brand as={Link} to="/profile">Профиль</Navbar.Brand>
                <Navbar.Brand as={Link} to="/cart">Корзина</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;