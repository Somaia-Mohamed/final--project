import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "./assets/images/shop/del.png";
export default function CartPage() {
  const [cartItems, setCartItem] = useState([]);
  useEffect(() => {
    const storedCartItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(storedCartItem);
  }, []);
  const calactotalPrice = (item) => {
    return item.price * item.quantity;
  };
  const handleIncrese = (item) => {
    item.quantity += 1;
    setCartItem([...cartItems]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const handleDecrese = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItem([...cartItems]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };
  const handleRemoveItem = (item) => {
    const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItem(updateCart);
    updateLocalStorage(updateCart);
  };
  const updateLocalStorage = (cart) => [
    localStorage.setItem("cart", JSON.stringify(cart)),
  ];
  // const subTotal = cartItems.reduce((total, item) => {
  //   return total + calactotalPrice(item);
  // });
  // const orderTotal = subTotal;
  console.log(cartItems);
  return (
    <div>
      <PageHeader title="Our CartPage" curpage="shop/Cart Page" />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr style={{ background: "#ff5d73" }}>
                    <th className="cart-product">Product</th>
                    <th className="cart-toprice">Price</th>
                    <th className="cart-quantity">Quantity</th>
                    <th className="cart-toprice">Total</th>
                    <th className="cart-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="cat-product product-item ">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="images" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to={"/shop"}>{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">{item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="desc qtybutton"
                            onClick={() => handleDecrese(item)}
                          >
                            -
                          </div>
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            id="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrese(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td>${calactotalPrice(item)}</td>
                      <td>
                        <a
                          href="#"
                          onClick={() => {
                            handleRemoveItem(item);
                          }}
                        >
                          <img src={delImgUrl} alt="delImage" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
