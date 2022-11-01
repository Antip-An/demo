import { useLocation, useNavigate } from "react-router";
import useToken from "../hooks/useToken";
import { Link } from "react-router-dom";
import { PersonSquare, Basket3Fill } from 'react-bootstrap-icons';

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./header.css"

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const { loggedIn } = useToken();

    const onLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img id="logo" src={"assets/logo.PNG"} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={Link} to="/" disabled={pathname === "/"}>Главная</Nav.Link>
                        <Nav.Link as={Link} to="/catalog" disabled={pathname === "/catalog"}>Каталог</Nav.Link>
                        <Nav.Link as={Link} to="/about" disabled={pathname === "/about"}>О нас</Nav.Link>
                        <Nav.Link as={Link} to="/contact" disabled={pathname === "/contact"}>Контакты</Nav.Link>
                    </Nav>

                    <Nav class="ms-auto" style={{ color: "black", marginRight: "15px" }}>

                        <NavDropdown title="Вход" >
                            <NavDropdown.Item as={Link} to="/singin">Войти</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/singup">
                                Зарегистрироваться
                            </NavDropdown.Item>
                        </NavDropdown>


                    </Nav>
                </Navbar.Collapse>

                <Navbar.Brand
                    as={Link}
                    to="/cart"
                    disabled={pathname === "/cart"}
                    style={{ display: "inline-block", marginRight: "15px", color: "black" }}
                >
                    <Basket3Fill size={35} />
                </Navbar.Brand>

                <Navbar.Brand
                    as={Link}
                    to="/profile"
                    disabled={pathname === "/profile"}
                    style={{ display: "inline-block", marginRight: "15px", color: "black" }}
                >
                    <PersonSquare size={35} />
                </Navbar.Brand>

            </Container>
        </Navbar>
    )
}

export default Header;