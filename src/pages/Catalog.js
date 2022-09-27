import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";
import foto4 from "../assets/4.jpg";

import "./css/home.css";

const Catalog = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <Row>
        <Col xs={6} >
          <Card
            style={{ width: "20rem", marginLeft: "20px", marginTop: "25px" }}
          >
            <Card.Img variant="top" src={foto4} />
            <Card.Body>
              <Card.Title>Ведьмак 3: Дикая Охота</Card.Title>
              <Card.Text>Цена: 3 000 руб.</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Подробнее
              </Button>
              <Button variant="primary">В корзину</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6}>
          <Card
            style={{
              width: "20rem",
              marginLeft: "20px",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            <Card.Img variant="top" src={foto4} />
            <Card.Body>
              <Card.Title>Ведьмак 3: Дикая Охота</Card.Title>
              <Card.Text>Цена: 3 000 руб.</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Подробнее
              </Button>
              <Button variant="primary">В корзину</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6}>
          <Card
            style={{ width: "20rem", marginLeft: "20px", marginTop: "25px" }}
          >
            <Card.Img variant="top" src={foto4} />
            <Card.Body>
              <Card.Title>Ведьмак 3: Дикая Охота</Card.Title>
              <Card.Text>Цена: 3 000 руб.</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Подробнее
              </Button>
              <Button variant="primary">В корзину</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={6}>
          <Card
            style={{
              width: "20rem",
              marginLeft: "20px",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            <Card.Img variant="top" src={foto4} />
            <Card.Body>
              <Card.Title>Ведьмак 3: Дикая Охота</Card.Title>
              <Card.Text>Цена: 3 000 руб.</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Подробнее
              </Button>
              <Button variant="primary">В корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default Catalog;
