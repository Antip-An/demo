import Button from "react-bootstrap/Button";

import { useState, useEffect } from "react";

import GoodCard from "../components/GoodCard";
import goodsData from "../data/goods";

function Cart() {
  const [cartIsLoaded, setCartIsLoaded] = useState(false);
  const [inCart, setInCart] = useState({});

  useEffect(() => {
    setInCart(JSON.parse(localStorage.getItem("cart")));
    setCartIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!cartIsLoaded) return;
    localStorage.setItem("cart", JSON.stringify(inCart));
  }, [inCart]);

  const goods = goodsData.goods.filter(
    (el) => Object.keys(inCart).indexOf(`${el.id}`) !== -1
  );

  const inc = (id) => {
    setInCart((cart) => ({ ...cart, [id]: (cart[id] || 0) + 1 }));
  };

  const dec = (id) => {
    if (inCart[id] === 1) {
      setInCart((inCart) => {
        const returnValue = { ...inCart };
        delete returnValue[id];
        return returnValue;
      });
      return;
    }
    setInCart((inCart) => ({ ...inCart, [id]: (inCart[id] || 0) - 1 }));
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 15, margin:"20px" }}>
      {goods.map((good) => (
        <GoodCard
          key={good.id}
          id={good.id}
          img={good.img}
          name={good.name}
          price={good.price}
        >
          <Button onClick={() => dec(good.id)}>-</Button>
          {inCart[good.id]}
          <Button onClick={() => inc(good.id)}>+</Button>
        </GoodCard>
      ))}
      </div>
      <Button style={{marginLeft:"46%"}}>Оформить</Button>
    </div>
  );
}

export default Cart;
