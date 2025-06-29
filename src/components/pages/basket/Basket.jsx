import React from "react";
import "./Basket.scss";
import { useDispatch, useSelector } from "react-redux";

const Basket = () => {
  const basket = useSelector((s) => s.basket);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };

  return (
    <section id="basket">
      <div className="container">
        <h1>Basket</h1>
        <div className="basket">
          {basket.map((el) => (
            <div className="basket--item" key={el.id}>
              <img src={el.url} alt={el.name} />
              <div className="basket--item__info">
                <h2>{el.name}</h2>
                <h3>#{el.category}</h3>
                <p>${el.price}</p>
              </div>
              <button onClick={() => remove(el.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Basket;
