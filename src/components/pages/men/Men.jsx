import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Men.scss";
import { FaShoppingCart } from "react-icons/fa";

const Men = () => {
  const men = useSelector((s) => s.men);
  const dispatch = useDispatch();

  const AddToBasket = (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  return (
    <section id="men">
      <div className="container">
        <div className="men">
          {men.map((el) => (
            <div className="men--card" key={el.id}>
              <img src={el?.url} alt="img" />
              <div className="men--card__text">
                <h1>{el.name}</h1>
                <h4 onClick={() => AddToBasket(el)}>
                  <FaShoppingCart />
                </h4>
                <h2>#{el.category}</h2>
                <h3>${el.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Men;
