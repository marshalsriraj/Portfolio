import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Work - Projects</h1>
        <p className="pl-desc">
        Marscoin Blockchain - Digital payment solution created using Blockchain Technology.
        </p>
        <p className="pl-desc">
        Courier Tracking System - Courier & Cargo tracking business.
        </p>
      </div>
      {/*
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
        </div>*/}
    </div>
  );
};

export default ProductList;
