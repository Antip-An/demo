import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import foto4 from "../assets/4.jpg";
import Image from 'react-bootstrap/Image'

const Good = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Image src={foto4} style={{width:"100%", marginTop:"10px"}} />
            <h1>Ведьмак 3: Дикая Охота</h1> 
            <h4>3 000 рублей</h4>
            <h4>Производитель: CD Projekt</h4>
            <h4>Год выпуска: 2015</h4>
            <Button
            style={{marginBottom:"10px"}}
            onClick={() => {
                navigate("/cart");
            }}>
                В корзину
            </Button>
            <Button
            style={{marginLeft:"10px", marginBottom:"10px"}}
            onClick={() => {
                navigate("/catalog");
            }}>
                Назад
            </Button>
        </Container>
    );
};

export default Good;