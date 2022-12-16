import { Button, Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router";

import "./css/home.css";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Личный кабинет</h1>

      <Row>
        <Col>
          <Card style={{ margin: "10px", background: "rgba(191, 196, 232)" }}>
            <Card.Body>
              <Card.Title>Личные данные</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Антипина Анна
              </Card.Subtitle>
              <Card.Text className="mb-2 text-muted">
                Email: anna@mail.ru
              </Card.Text>
              <Card.Text className="mb-2 text-muted">
                Карта: **** **** **** 1234
              </Card.Text>

              <Button
                style={{ marginTop: "20px" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Выйти
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ margin: "10px" }}>
            <Card.Header as="h5" style={{background: "rgba(191, 196, 232)" }}>Заказы</Card.Header>

            <Card style={{ margin: "15px" }}>
              <Card.Body>
                <Card.Title>Номер: 3872484</Card.Title>
                <Card.Text>Товары:</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Ведьмак 3, ГТА5
                </Card.Subtitle>
                <Card.Text>Пункт выдачи:</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  ул.Северная дом 3
                </Card.Subtitle>
                <Button variant="primary">Отменить</Button>
              </Card.Body>
            </Card>

            <Card style={{ margin: "15px" }}>
              <Card.Body>
                <Card.Title>Номер: 563452</Card.Title>
                <Card.Text>Товары:</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Ведьмак 1, ГТА Сан Андрес
                </Card.Subtitle>
                <Card.Text>Пункт выдачи:</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  ул.Северная дом 3
                </Card.Subtitle>
                <Button variant="primary">Отменить</Button>
              </Card.Body>
            </Card>


          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
