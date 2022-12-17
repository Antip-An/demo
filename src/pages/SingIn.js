import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router";

const SingIn = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
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
                <Card.Title>Вход в систему</Card.Title>
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
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    onInput={handleSubmits}
                  />
                  <Form.Control.Feedback />
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    id="password"
                    required
                    type="password"
                    placeholder="Пароль"
                    onInput={handleSubmits}
                  />
                  <Form.Control.Feedback />
                </Form.Group>
              </Row>

              <Button type="submit">Войти</Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default SingIn;
