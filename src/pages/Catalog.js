import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router";
import foto2 from "../assets/2.jpg";
import foto3 from "../assets/3.jpg";
import foto4 from "../assets/4.jpg";

import "./css/home.css";

const Catalog = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Dropdown style={{marginTop:"10px"}}>
        <Dropdown.Toggle id="dropdown-basic">
          Сортировка
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Новые</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Год</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Название</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Цена</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Категория</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <CardGroup>
        <Card style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Card.Img variant="top" src={foto4} />
          <Card.Body>
            <Card.Title>Ведьмак 3: Дикая Охота</Card.Title>
            <Card.Text>Цена: 3 000 руб.</Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                navigate("/good");
              }}
            >
              Подробнее
            </Button>
            <Button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                navigate("/cart");
              }}>
              В корзину
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>

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
            <Button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                navigate("/cart");
              }}>
              В корзину
            </Button>
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
            <Button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                navigate("/cart");
              }}>
              В корзину
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>



      {/* <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col>
            <Card style={{ marginTop: "10px", marginBottom: "10px" }}>
              <Card.Img variant="top" src={foto4} />
              <Card.Body>
                <Card.Title>Ведьмак 3: Дикая Охота</Card.Title>
                <Card.Text>Цена: 3 000 руб.</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/good");
                  }}
                >
                  Подробнее
                </Button>
                <Button
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    navigate("/cart");
                  }}>
                  В корзину
                </Button>
              </Card.Body>
            </Card>

          </Col>
        ))}
      </Row> */}

    </Container>
  );
};

export default Catalog;
