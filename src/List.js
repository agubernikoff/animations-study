import React from "react";
import { NavLink } from "react-router-dom";

function List() {
  return (
    <div>
      <h1>CSS ANIMATIONS</h1>
      <ul>
        <li>
          <NavLink to="/mario">Mario Kart</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default List;
