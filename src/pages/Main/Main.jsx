import React from "react";
import style from "./Main.css";
import { NavLink, Link } from "react-router-dom";
import img from "./ScreenMain.png";
import imgMemo from "./Memo.png";

const Main = () => {
  return (
    <div className="main--wrp">
      <div className="main">
        <div className="main--item">
          <div className="wrp--icon">
            <img className="main--icon" src={img} alt="" />
          </div>
          <div className="wrp--description">
            <h1 className="title--desc">Сахар в крови</h1>
            <span className="text--desc">
              Отслеживайте сахар в крови в реальном времени. Стандартная система
              состоит из: сенсора, передатчика и смартфона т.п
            </span>
          </div>
        </div>
        <div className="wrp--btn">
          <NavLink className="main--btn" to="/screen">
            Узнать
          </NavLink>
        </div>
      </div>
      <div className="main">
        <div className="main--item">
          <div className="wrp--icon">
            <img className="main--icon" src={imgMemo} alt="" />
          </div>
          <div className="wrp--description">
            <h1 className="title--desc">Сахарный диабет</h1>
            <span className="text--desc">
              Отслеживайте сахар в крови в реальном времени. Стандартная система
              состоит из: сенсора, передатчика и смартфона т.п
            </span>
          </div>
        </div>
        <div className="wrp--btn">
          <NavLink className="main--btn" to="/screen">
            Узнать
          </NavLink>
        </div>
      </div>
      <div className="main">
        <div className="main--item">
          <div className="wrp--icon">
            <img className="main--icon" src={img} alt="" />
          </div>
          <div className="wrp--description">
            <h1 className="title--desc">Сахарный диабет</h1>
            <span className="text--desc">
              Отслеживайте сахар в крови в реальном времени. Стандартная система
              состоит из: сенсора, передатчика и смартфона т.п
            </span>
          </div>
        </div>
        <div className="wrp--btn">
          <NavLink className="main--btn" to="/screen">
            Узнать
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Main;
