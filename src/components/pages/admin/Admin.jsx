import React, { useState } from "react";
import "./Admin.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("men");
  const dispatch = useDispatch();
  const nav = useNavigate();

  const AddSneakers = () => {
    if (!url.trim() || !name.trim() || !price.trim() || !category.trim()) {
      alert("Заполните все поля!");
    } else {
      const data = {
        id: Date.now(),
        url,
        name,
        price,
        category,
      };
      dispatch({
        type: "ADD_PRODUCT",
        payload: {
          category,
          product: data,
        },
      });
      setUrl("");
      setName("");
      setPrice("");
      setCategory("");
      alert("Успешно добавлено!");
      nav("/");
    }
  };

  return (
    <section id="admin">
      <div className="container">
        <div className="admin">
          <h1>Admin Panel</h1>
          <input
            type="text"
            placeholder="Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="sale">Sale</option>
          </select>
          <button onClick={AddSneakers}>Add Sneakers</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
