import React from "react";
import "./Women.scss";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Women = () => {
  const women = useSelector((s) => s.women);

  return (
    <section id="women">
      <div className="container">
        <div className="women">
          {women.map((el) => (
            <div className="women--card" key={el.id}>
              <img src={el?.url} alt="img" />
              <div className="women--card__text">
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

export default Women;
