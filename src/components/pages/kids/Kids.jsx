import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Kids.scss";
import { FaShoppingCart } from "react-icons/fa";

const Kids = () => {
  const kids = useSelector((s) => s.kids);

  const dispatch = useDispatch();

  const AddToBasket = (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  return (
    <section id="kids">
      <div className="container">
        <div className="kids">
          {kids.map((el) => (
            <div className="kids--card" key={el.id}>
              <img src={el?.url} alt="img" />
              <div className="kids--card__text">
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

export default Kids;
