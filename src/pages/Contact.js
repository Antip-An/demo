import Container from "react-bootstrap/Container";
import map from "../assets/map.PNG";

const Contact = () => {
  return (
    <Container>
      <h1>Как с нами связаться?</h1>
      <h4>Телефон: 8 900 000 00 00</h4>
      <h4>Email: game@mail.ru</h4>

      <h1>Где нас найти?</h1>
      <p>г. Владимир, ул. Полины Осипенко, дом 22</p>
      <img style={{margin:"auto"}} id="foto" src={map} />
    </Container>
  );
};

export default Contact;
