import { Carousel, Container, Button, Nav, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useToken from "../hooks/useToken";

import "./css/home.css"

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <p></p>
      <h1>Ваш помощник в выборе игр</h1>
      <Carousel style={{marginBottom:"20px"}}>
        <Carousel.Item>
          <img id="foto" src={"assets/1.jpg"} />
          <Carousel.Caption>
            <h1>Веедьмак 3 - Диакая Охота</h1>
            <h4>Скиндка 50%</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img id="foto" src={"assets/game3.jpg"} />
          <Carousel.Caption>
            <h1>Прототип 2</h1>
            <h4>Дешевле при покупке первой части</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img id="foto" src={"assets/game2.jpg"} />
          <Carousel.Caption>
            <h1>Old shool</h1>
            <h4>По низким ценам</h4>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </Container>
  );
};

export default Home;