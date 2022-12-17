import GoodCard from "../components/GoodCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";

import { useState } from "react";

import goodsData from "../data/goods";

const categories = goodsData.goods
  .map((el) => el.category)
  .filter((el, index, self) => self.indexOf(el) === index);

const Catalog = () => {
  const [category, setCategory] = useState("Отображать все");
  const [sortingProperty, setSortingProperty] = useState("added");

  return (
    <>
      <Row>
        <Col>
          <DropdownButton
            title="Жанр"
            style={{
              marginLeft: "15px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <li
              onClick={() => setCategory("Отображать все")}
              style={{ cursor: "pointer" }}
            >
              Отображать все
            </li>

            {categories.map((el) => (
              <li
                key={el}
                onClick={() => setCategory(el)}
                style={{ cursor: "pointer" }}
              >
                {el}
                <br />
              </li>
            ))}
          </DropdownButton>
        </Col>

        <Col>
          <DropdownButton title="Сортировка" style={{ marginTop: "20px" }}>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => setSortingProperty("added")}
            >
              Дата добавления
            </li>

            <li
              style={{ cursor: "pointer" }}
              onClick={() => setSortingProperty("year")}
            >
              Год выпуска
            </li>

            <li
              style={{ cursor: "pointer" }}
              onClick={() => setSortingProperty("name")}
            >
              Название
            </li>

            <li
              style={{ cursor: "pointer" }}
              onClick={() => setSortingProperty("price")}
            >
              Цена
            </li>
          </DropdownButton>
        </Col>
      </Row>

      <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: 15 }}>
        {goodsData.goods
          .filter((el) => el.hasInStock)
          .filter(
            (el) => category === "Отображать все" || category === el.category
          )
          .sort((a, b) => {
            if (a[sortingProperty] < b[sortingProperty]) return -1;
            if (a[sortingProperty] === b[sortingProperty]) return 0;
            return 1;
          })
          .map((good) => (
            <GoodCard
              key={good.id}
              id={good.id}
              name={good.name}
              price={good.price}
              img={good.img}
              follow
            />
          ))}
      </div>
    </>
  );
};

export default Catalog;
