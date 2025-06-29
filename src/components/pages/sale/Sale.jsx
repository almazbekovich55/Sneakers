import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Sale.scss";
import { FaShoppingCart } from "react-icons/fa";

const Sale = () => {
  const sale = useSelector((s) => s.sale);

 const dispatch = useDispatch();

  const AddToBasket = (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  return (
    <section id="sale">
      <div className="container">
        <div className="sale">
          {sale.map((el) => (
            <div className="sale--card" key={el.id}>
              <img src={el?.url} alt="img" />
              <div className="sale--card__text">
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

export default Sale;
