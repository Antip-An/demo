import CardImg from "react-bootstrap/CardImg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useParams } from "react-router-dom";

import goodsData from "../data/goods";

function Good() {
  let { id } = useParams();
  id = +id;

  const good = goodsData.goods.filter((el) => el.id === id)[0];

  if (!good) {
    return <div>Товар не найден</div>;
  }

  const addToCart = () => {
    const inCart = JSON.parse(localStorage.getItem("cart") || "{}");
    inCart[id] = (inCart[id] || 0) + 1;
    localStorage.setItem("cart", JSON.stringify(inCart));
  };

  return (
    <Card style={{ width: 700, boxShadow: "2px 2px 2px 2px gray", margin:"auto", marginTop:"20px", marginBottom:"20px" }}>
      <CardImg src={good.img} />
      <Card.Body style={{ textAlign: "center" }}>
        {good.name} <br />
        <b>Цена:</b> {good.price} <br />
        {good.category} <br />
        {good.country} <br />
        {good.maker} <br />
        {good.model} <br />
        {good.year} <br />
        <Button onClick={addToCart}>В корзину</Button>
      </Card.Body>
    </Card>
  );
}

export default Good;
