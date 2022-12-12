import { Card, CardImg } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function GoodCard({ id, img, name, price, follow, children }) {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        width: 500,
        margin: "auto",
        boxShadow: "2px 2px 2px 2px gray",
        cursor: follow ? "pointer": "default",
      }}
      onClick={() => {
        if (follow) navigate(`/good/${id}`);
      }}
    >
      <CardImg src={img} />
      <Card.Body style={{ textAlign: "center" }}>
        {name} <br />
        <b>Цена:</b> {price} <br />
        {children}
      </Card.Body>
    </Card>
  );
}

export default GoodCard;
