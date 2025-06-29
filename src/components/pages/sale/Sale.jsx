import React from "react";
import { useSelector } from "react-redux";
import "./Sale.scss";
import { FaShoppingCart } from "react-icons/fa";

const Sale = () => {
  const sale = useSelector((s) => s.sale);

  return (
    <section id="sale">
      <div className="container">
        <div className="sale">
          {sale.map((el) => (
            <div className="sale--card" key={el.id}>
              <img src={el?.url} alt="img" />
              <div className="sale--card__text">
                <h1>{el.name}</h1>
                <h4>
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
