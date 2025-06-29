import React from "react";
import logo from "../../../assets/Images/Nike.svg";
import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const nav = useNavigate();

  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <img src={logo} alt="img" onClick={() => nav("/admin")} />
          </div>
          <div className="header--nav">
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"/men"}>MEN</NavLink>
            <NavLink to={"/women"}>WOMEN</NavLink>
            <NavLink to={"/kids"}>KIDS</NavLink>
            <NavLink to={"/sale"}>SALE</NavLink>
          </div>
          <div className="header--icons">
            <a href="#">
              <CiSearch />
            </a>
            <NavLink to={"/basket"}>
              <FaShoppingCart />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
