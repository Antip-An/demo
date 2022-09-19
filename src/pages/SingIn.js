import { useState } from "react";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

const SingIn = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col md={3} sm={0} />
        <Col md={6} sm={12}>
          <Card style={{ marginTop: 50 }}>
            <Card.Body>
              <Card.Title>Вход в систему</Card.Title>
              <Form>
                <Form.Group className="login-fg">
                  <Form.Label>Имя пользователя</Form.Label>
                  <Form.Control
                    type="text"
                    id="username"
                  />
                </Form.Group>
                <Form.Group className="login-fg">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                  />
                </Form.Group>
              </Form>
              
              <Button onClick={() => { 
                navigate("/");
              }}>
                Войти
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={0} />
      </Row>
    </Container>
  );
};

export default SingIn;