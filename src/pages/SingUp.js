import { useState } from "react";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router";

const SingUp = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
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
        <Card style={{ marginTop: 30 }}>
          <Card.Body>
            <Card.Title>Вход в систему</Card.Title>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Имя пользователя</Form.Label>
                  <Form.Control required type="text" placeholder="Логин" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control required type="text" placeholder="Пароль" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>

            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Войти
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default SingUp;
