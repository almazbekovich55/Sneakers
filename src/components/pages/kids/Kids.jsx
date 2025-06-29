import React from "react";
import { useSelector } from "react-redux";
import "./Kids.scss";
import { FaShoppingCart } from "react-icons/fa";

const Kids = () => {
  const kids = useSelector((s) => s.kids);

  return (
    <section id="kids">
      <div className="container">
        <div className="kids">
          {kids.map((el) => (
            <div className="kids--card" key={el.id}>
              <img src={el?.url} alt="img" />
              <div className="kids--card__text">
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

export default Kids;
