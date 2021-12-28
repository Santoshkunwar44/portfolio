import React from "react";
import Product from "../Product/product";
import "./Productlist.css";
import { products } from "../../data";
function Productlist() {
  return (
    <div className="pl">
      <div className="pl-text">
      <div className="pl-title">Create & inspire .Its' santosh</div>
      <p className="pl-desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, velit.
        Architecto est quibusdam, officiis modi quod explicabo veniam quidem.
      </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} val={item} />
        ))}
      </div>
    </div>
  );
}

export default Productlist;
