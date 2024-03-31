import React, { useState } from "react";
import { Link, json } from "react-router-dom";

export default function ProductDisplay({ data }) {
  const { name, id, price, seller, ratingsCount, quantity, img } = data;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("select size");
  const [color, setColor] = useState("select Color");
  const desc =
    " This product description highlights the features, benefits, uses, and warranty information of the smart fitness tracker watch, aiming to inform and persuade potential customers about its value and utility. ";
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleDecrese = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };
  const handleIncrese = () => {
    setQuantity(prequantity + 1);
  };
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      color: color,
      size: size,
      quantity: quantity,
      price: price,
      name: name,
      seller: seller,
      coupon: coupon,
    };
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (product) => product.id === id
    );
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setQuantity(1);
    setSize("select size");
    setColor("select Color");
    setCoupon("");
    console.log(product);
  };
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i> <i className="icofont-star"></i>
          <i className="icofont-star"></i> <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span className="rating-count">{ratingsCount} review</span>
        </p>
        <h4>{price}</h4>
        <h4>{seller}</h4>
        <p>{desc}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option value="select size">select size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <i class="icofont-rounded-down"></i>
          </div>
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option value="select color ">select Color</option>
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Pink">Pink</option>
            </select>
            <i class="icofont-rounded-down"></i>
          </div>
          <div className="cart-plus-minus">
            <div className="desc qtybutton" onClick={handleDecrese}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrese}>
              +
            </div>
          </div>
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link
            to="/cart-page"
            type="submit"
            className="lab-btn cartBtn bg-primary "
          >
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
