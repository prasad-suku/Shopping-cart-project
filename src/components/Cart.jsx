import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../App";

const Cart = () => {
  const [total, settotal] = useState(0);
  const { cart, setcart } = useContext(cartContext);

  // total amount calculation useEffect

  useEffect(() => {
    settotal(cart.reduce((prev, cur) => prev + cur.price, 0));
  }, [cart]);

  // Remove item function

  let removeitem = (selectitem) => {
    setcart(cart.filter((item) => item.id !== selectitem.id));
  };
  return (
    <>
      <h2 className="cart-title">Cart Products </h2>
      <div className="cart-container">
        {cart.map((item, i) => {
          return (
            <div className="cart-product" key={i}>
              <div className="img">
                <img src={item.thumbnail} alt="img" />
              </div>
              <div className="product-details">
                <h2>{item.title}</h2>
                <p>price amt :{item.price}$</p>
              </div>
              <div className="deleteitem" onClick={() => removeitem(item)}>
                <img
                  src="https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo-thumbnail.png"
                  alt=""
                />
              </div>
            </div>
          );
        })}
        {cart.length < 1 ? (
          <img
            className="No-product"
            alt="no products"
            width="70%"
            height="70%"
            src="https://img.freepik.com/free-vector/mistery-box-concept-illustration_114360-8902.jpg?t=st=1729597506~exp=1729601106~hmac=b0df9f7e378b1497aec337c0c302200a182a7ac5ca8b98e816b877cfaaa38cbe&w=740"
          />
        ) : null}
      </div>

      {/* total amount */}
      <hr />
      <h2>
        Total amount RS :<span className="display-6">{total.toFixed(2)}$</span>
      </h2>
      <hr />
    </>
  );
};

export default Cart;
