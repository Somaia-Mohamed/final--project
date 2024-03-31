import React from "react";
import { Link } from "react-router-dom";
import Ratting from "./Ratting";

export default function ProductCard({ GridList, products }) {
  // console.log(products.map(el=>el.img));
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {products.map((product, index) => (
        <div className=" col-lg-4 col-12 col-d-6">
          <div className="product-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} />
              </div>
              <div className="product-action-link">
                <Link
                  to={`/shop/${product.id}`}
                  style={{ backgroundColor: "#ff5d73", padding: "5px" }}
                >
                  {/* <i class="icofont-eye fs-2 " ></i> */}
                  <i class="icofont-eye fs-2 "></i>
                </Link>
                <a href="#" style={{ backgroundColor: "#ff5d73" }}>
                  <i className="icofont-heart"></i>
                </a>
                <Link
                  to={`/cart-page`}
                  style={{ backgroundColor: "#ff5d73", padding: "5px" }}
                >
                  {/* <i class="icofont-eye fs-2 " ></i> */}
                  <i class="icofont-cart-alt fs-2 "></i>
                </Link>
              </div>
            </div>
            <div className="product-content">
              <h6>
                <Link to={`/shop/${product.id}`} className="product-tit">
                  {product.name}
                </Link>
              </h6>
              <p className="productRating">
                <Ratting />
              </p>
              <h6>$ {product.price} </h6>
            </div>
          </div>
          <div className="product-list-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} />
              </div>
              <div className="product-action-link">
                <Link
                  to={`/shop/${product.id}`}
                  style={{ backgroundColor: "#ff5d73", padding: "5px" }}
                >
                  {/* <i class="icofont-eye fs-2 " ></i> */}
                  <i class="icofont-eye fs-2 "></i>
                </Link>
                <a href="#" style={{ backgroundColor: "#ff5d73" }}>
                  <i className="icofont-heart"></i>
                </a>
                <Link
                  to={`/cart-page`}
                  style={{ backgroundColor: "#ff5d73", padding: "5px" }}
                >
                  {/* <i class="icofont-eye fs-2 " ></i> */}
                  <i class="icofont-cart-alt fs-2 "></i>
                </Link>
              </div>
            </div>
            <div className="product-content">
              <h6>
                <Link to={`/shop/${product.id}`} className="product-tit">
                  {product.name}
                </Link>
              </h6>
              <p className="productRating">
                <Ratting />
              </p>
              <h6>$ {product.price} </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
