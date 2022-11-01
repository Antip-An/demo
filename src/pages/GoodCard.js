import { Button, Card, CardImg } from "react-bootstrap";

function GoodCard({ name, img, price  }) {
    return (
        <Card style={{ width: 300, boxShadow: "2px 2px 2px 2px gray", margin:"auto"}}>
            <CardImg src={img} />
            <Card.Body style={{textAlign: "center"}}>
                {name} <br />
                <b>Цена:</b> {price}
                
            </Card.Body>
            <Button style={{margin:"5px"}}>Подробнее</Button>
            <Button style={{margin:"5px"}}>В корзину</Button>
        </Card>
    );
}

export default GoodCard;