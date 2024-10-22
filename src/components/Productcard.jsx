import React, { useContext } from "react";
import { cartContext } from "../App";

const Productcard = ({ product, key }) => {
  const { cart, setcart } = useContext(cartContext);
  const addcart = () => {
    setcart([...cart, product]);
  };

  const removecart = () => {
    setcart(cart.filter((item) => item.id !== product.id));
  };
  return (
    <>
      <div key={key} className="product">
        <div className="img">
          <img src={product.thumbnail} alt="" />
        </div>
        <div className="product-details">
          <h4>{product.title.slice(0, 18)}...</h4>
          <p>Price : {product.price}$</p>
          {cart.includes(product) ? (
            <button className="btn btn-danger" onClick={removecart}>
              Remove Cart
            </button>
          ) : (
            <button className="btn btn-primary" onClick={addcart}>
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Productcard;
