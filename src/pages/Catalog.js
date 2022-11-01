import { useState } from 'react';
import GoodCard from './GoodCard';

import goodsData from "../data/goods.json";

const categories = goodsData
  .goods
  .map(el => el.category)
  .filter((el, index, self) => self.indexOf(el) === index)

const Catalog = () => {
  const [category, setCategory] = useState("Отображать все")
  const [sortingProperty, setSortingProperty] = useState("added")

  return (
    <>
      <ol>
        <li 
          onClick={() => setCategory("Отображать все")} 
          style={{ cursor: "pointer"}}
        >
          Отображать все
        </li>
        {categories.map(el => (
          <li 
            key={el} 
            onClick={() => setCategory(el)}
            style={{ cursor: "pointer"}}
          >
            {el}
          </li>
        ))}
      </ol>

      <ol>
        <li style={{ cursor: "pointer"}} onClick={() => setSortingProperty("added")}>Дата добавления</li>
        <li style={{ cursor: "pointer"}} onClick={() => setSortingProperty("year")}>Год выпуска</li>
        <li style={{ cursor: "pointer"}} onClick={() => setSortingProperty("name")}>Название</li>
        <li style={{ cursor: "pointer"}} onClick={() => setSortingProperty("price")}>Цена</li>
      </ol>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {goodsData
          .goods
          .filter(el => el.hasInStock)
          .filter(el => category === "Отображать все" || category === el.category)
          .sort((a,b) => {
            if (a[sortingProperty] < b[sortingProperty]) return -1;
            if (a[sortingProperty] === b[sortingProperty]) return 0;
            return 1;
          })
          .map(good => (
            <GoodCard key={good.id} name={good.name} price={good.price} img={good.img} />
          ))}
      </div>
    </>
  );
}

export default Catalog;
