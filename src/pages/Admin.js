import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router";

import game1 from "../assets/game1.jpg";
import "./css/home.css";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ marginTop: "20px" }}>Админ панель</h1>

      <Row>
        <Col>
          <Col>
            <Card style={{ margin: "10px", background: "rgba(191, 196, 232)" }}>
              <Card.Body>
                <Card.Title>Личные данные</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Prime Admin
                </Card.Subtitle>
                <Card.Text className="mb-2 text-muted">
                  Email: admin@mail.ru
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
              <Card.Header
                as="h5"
                style={{ background: "rgba(191, 196, 232)" }}
              >
                Админимтратры
                <Button style={{ margin: "15px" }}>Добавить</Button>
              </Card.Header>
              <Card.Body>
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Имя</th>
                      <th>Логин</th>
                      <th>Email</th>
                      <th></th>
                    </tr>
                  </thead>
                  <thead>
                    <th>1</th>
                    <th>admin1</th>
                    <th>djfnd</th>
                    <th>adksjd@mail.ru</th>
                    <Button
                      style={{
                        background: "red",
                        border: "red",
                        marginTop: "20px",
                      }}
                    >
                      Удалить
                    </Button>
                  </thead>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Col>

        <Col>
          <Card style={{ margin: "10px" }}>
            <Card.Header as="h5" style={{ background: "rgba(191, 196, 232)" }}>
              Товары
            </Card.Header>

            <Button style={{ margin: "15px" }}>Добавить</Button>

            <Card style={{ margin: "15px" }}>
              <Card.Img style={{ margin: "15px", width: "90%" }} src={game1} />
              <Card.Body>
                <Card.Title>Ведьмак 3: Дикая Охота</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Цена: 1000
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Количество: 30
                </Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted">
                  Есть в наличии: true
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Категория: Фантастика
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Производитель: CD Projekt
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Страна: Польша
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Модель: Расширенная версия
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Год выпуска: 2015
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Дата добавления: 01.11.2022
                </Card.Subtitle>

                <Button
                  style={{ background: "red", border: "red" }}
                  variant="primary"
                >
                  Удалить
                </Button>
              </Card.Body>
            </Card>
          </Card>
        </Col>
      </Row>
      <Card style={{ margin: "10px" }}>
        <Card.Header as="h5" style={{ background: "rgba(191, 196, 232)" }}>
          Пользователи
        </Card.Header>
        <Card.Body>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Логин</th>
                <th>ФИО</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <thead>
              <td>1</td>
              <td>Antip</td>
              <td>Антипина Анна Владимировна</td>
              <td>ann@mail.ru</td>

              <Button
                style={{ background: "red", border: "red", marginTop: "20px" }}
              >
                Удалить
              </Button>
            </thead>
            <thead>
              <td>2</td>
              <td>Antip</td>
              <td>Антипина Анна Владимировна</td>
              <td>ann@mail.ru</td>

              <Button
                style={{ background: "red", border: "red", marginTop: "20px" }}
              >
                Удалить
              </Button>
            </thead>
            <thead>
              <td>3</td>
              <td>Antip</td>
              <td>Антипина Анна Владимировна</td>
              <td>ann@mail.ru</td>

              <Button
                style={{ background: "red", border: "red", marginTop: "20px" }}
              >
                Удалить
              </Button>
            </thead>
            <thead>
              <td>4</td>
              <td>Antip</td>
              <td>Антипина Анна Владимировна</td>
              <td>ann@mail.ru</td>

              <Button
                style={{ background: "red", border: "red", marginTop: "20px" }}
              >
                Удалить
              </Button>
            </thead>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Admin;
