import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../App";

const Header = () => {
  const { cart } = useContext(cartContext);
  return (
    <>
      <nav>
        <div className="logo">Shophy</div>
        <ul className="nav-list">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/cart">
              View Cart
              <span className="badge bg-secondary text-white">
                {cart.length}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
