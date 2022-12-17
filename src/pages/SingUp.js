import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router";

const SingUp = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      if (password !== confirmPassword) {
        alert("Неверный пароль!");
        return;
      }
    } else {
      navigate("/");
    }

    setValidated(true);
  };

  const handleSubmits = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row>
        <Card style={{ marginTop: 30, marginBottom: "30px" }}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>Регистрация</Card.Title>
              </Col>
              <Col>
                <CloseButton
                  style={{ marginLeft: "97%" }}
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </Col>
            </Row>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  style={{ marginBottom: "10px" }}
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                >
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Имя"
                    pattern="^[А-Яа-я/ /-]*$"
                    onInput={handleSubmits}
                  />
                  <Form.Control.Feedback />
                </Form.Group>

                <Form.Group
                  style={{ marginBottom: "10px" }}
                  as={Col}
                  md="6"
                  controlId="validationCustom02"
                >
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Фамилия"
                    pattern="^[А-Яа-я/ /-]*$"
                    onInput={handleSubmits}
                  />
                  <Form.Control.Feedback />
                </Form.Group>

                <Form.Group
                  style={{ marginBottom: "10px" }}
                  as={Col}
                  md="100"
                  controlId="validationCustom03"
                >
                  <Form.Label>Отчество</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Отчество"
                    pattern="^[А-Яа-я/ /-]*$"
                    onInput={handleSubmits}
                  />
                </Form.Group>

                <Form.Group
                  style={{ marginBottom: "10px" }}
                  as={Col}
                  md="6"
                  controlId="validationCustom04"
                >
                  <Form.Label>Логин</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Логин"
                    pattern="[A-za-z/0-9/-]*$"
                    onInput={handleSubmits}
                  />
                  <Form.Control.Feedback />
                </Form.Group>

                <Form.Group
                  style={{ marginBottom: "10px" }}
                  as={Col}
                  md="6"
                  controlId="validationCustom05"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    onInput={handleSubmits}
                  />
                  <Form.Control.Feedback />
                </Form.Group>

                <Form.Group
                  style={{ marginBottom: "10px" }}
                  as={Col}
                  md="6"
                  controlId="validationCustom06"
                >
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    value={password}
                    minlength="6"
                    placeholder="Пароль"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <Form.Control.Feedback />
                </Form.Group>

                <Form.Group
                  style={{ marginBottom: "10px" }}
                  as={Col}
                  md="6"
                  controlId="validationCustom07"
                >
                  <Form.Label>Повторите пароль</Form.Label>
                  <Form.Control
                    value={confirmPassword}
                    required
                    type="password"
                    placeholder="Пароль"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                  <Form.Control.Feedback />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Я согласен на условия"
                  feedback="Необходимо ваше согласие"
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit">Зарегистрироваться</Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default SingUp;
