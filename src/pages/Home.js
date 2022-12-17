import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import "./css/home.css"
import photo1 from "../assets/1.jpg";
import game2 from "../assets/game2.jpg";
import game3 from "../assets/game3.jpg";

const Home = () => {

  return (
    <Container>
      <h1 style={{marginTop:"20px"}}>Ваш помощник в выборе игр</h1>
      <Carousel style={{marginBottom:"20px", marginLeft:"-15%", marginRight:"-15%"}}>
        <Carousel.Item>
          <img id="foto" src={photo1} />
          <Carousel.Caption>
            <h1>Веедьмак 3 - Диакая Охота</h1>
            <h4>Скиндка 50%</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img id="foto" src={game3} />
          <Carousel.Caption>
            <h1>Прототип 2</h1>
            <h4>Дешевле при покупке первой части</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img id="foto" src={game2} />
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