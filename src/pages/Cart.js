import { Container, Caption, Button, Nav, Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import foto2 from "../assets/2.jpg";
import foto3 from "../assets/3.jpg";
import { useNavigate } from "react-router";

const Cart = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <CardGroup>
                <Card style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <Card.Img variant="top" src={foto3} />
                    <Card.Body>
                        <Card.Title>Готика 2</Card.Title>
                        <Card.Text>Цена: 3 000 руб.</Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => {
                                navigate("/good");
                            }}
                        >
                            Подробнее
                        </Button>
                        <Button style={{marginLeft:"10px"}}>Удалить</Button>
                    </Card.Body>
                </Card>

                <Card style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <Card.Img variant="top" src={foto2} />
                    <Card.Body>
                        <Card.Title>Прототип</Card.Title>
                        <Card.Text>Цена: 3 000 руб.</Card.Text>
                        <Button
                            variant="primary"
                            onClick={() => {
                                navigate("/good");
                            }}
                        >
                            Подробнее
                        </Button>
                        <Button style={{marginLeft:"10px"}}>Удалить</Button>
                    </Card.Body>
                </Card>
            </CardGroup>

        </Container>
    )
}

export default Cart;