import React from "react";
import Generator from "../Generator/Generator.jsx";
import Graphic from "../Graphic/Graphic.jsx";
import { NavLink, Link } from "react-router-dom";

const Screen = () => {
  return (
    <div>
      <div>
        <div>
          <NavLink className="main--btn" to="/">
            Назад
          </NavLink>
        </div>
        <div>
          <Generator />
        </div>
      </div>
      <div>
        <Graphic />
      </div>
    </div>
  );
};

export default Screen;
