import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Search(products, GridList) {
  const [serachTerm, setSearchTerm] = useState("");
  console.log(products.products);
  const filteredProduct = products.products.filter((product) =>
    product.name.toLowerCase().includes(serachTerm.toLowerCase())
  );
  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3 ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search.........."
          defaultValue={serachTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <i className="icofont-search"></i>
        </button>
      </form>
      <div>
        {serachTerm &&
          filteredProduct.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`}>
              <div className=" d-flex gap-3 p-2 ">
                <div>
                  <div className="pro-thumb h-25 ">
                    <img
                      src={product.img}
                      alt=""
                      width={70}
                      className="flex-{grow|shrink}-0"
                    />
                  </div>
                </div>
                <div className="product-content">
                  <p width={30}>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </p>
                  {/* <h6>$ {product.price}</h6> */}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
