import { Container, Caption, Button, Nav, Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";

import { useNavigate } from "react-router";

const Cart = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <CardGroup>
                <Card style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <Card.Img variant="top" src={"assets/game2.jpg"} />
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
                    <Card.Img variant="top" src={"assets/game3.jpg"} />
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
            <Button>Оформить заказ</Button>
        </Container>
    )
}

export default Cart;