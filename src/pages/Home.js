import { Carousel, Caption, Button, Nav, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "../assets/logo.PNG";
import foto1 from "../assets/1.jpg";
import foto2 from "../assets/2.jpg";
import foto3 from "../assets/3.jpg";
import useToken from "../hooks/useToken";

import "./css/home.css"

const Home = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <p></p>
      <h1>Что наша жизнь — игра...?</h1>
      <Carousel>
        <Carousel.Item>
          <img id="foto" src={foto1} />
          <Carousel.Caption>
            <h1>Веедьмак 3 - Диакая Охота</h1>
            <h4>Скиндка 50%</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img id="foto" src={foto2} />
          <Carousel.Caption>
            <h1>Прототип 2</h1>
            <h4>Дешевле при покупке первой части</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img id="foto" src={foto3} />
          <Carousel.Caption>
            <h1>Old shool</h1>
            <h4>По низким ценам</h4>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </Card>
  );
};

export default Home;