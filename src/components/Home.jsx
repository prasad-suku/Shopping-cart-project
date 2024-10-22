import React, { useEffect, useState } from "react";

import Productcard from "./Productcard";

const Home = () => {
  const [products, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  // thumbnail

  useEffect(() => {
    try {
      fetch(
        `https://dummyjson.com/products?limit=50&skip=10&select=title,price,thumbnail`
      )
        .then((data) => data.json())
        .then((res) => {
          setloading(true);
          console.log(res.products);
          setproduct(res.products);
          setloading(false);
        });
    } catch {
      (e) => console.log(e);
    }
  }, []);

  // loading ui
  if (loading) return <div>Loading...</div>;

  return (
    <div className="product-container">
      {products.map((item, i) => {
        return <Productcard key={item.id} product={item} />;
      })}
    </div>
  );
};

export default Home;
