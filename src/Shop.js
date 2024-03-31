import React, { useState } from "react";
import PageHeader from "./PageHeader";
import Data from "./products.json";
import ProductCard from "./ProductCard";
import Search from "./Search";


export default function Shop() {
  const showResult = "Showing 01 - 12 of 139 Results ";
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);
  
  // const [selectedCategory, setSelectCategory] = useState("All");
  // const [items, setItems] = useState([]);
  // const menuItem = () => Data.map((el) => setItems(el.category));
  // console.log(items);
  // const filterItem = (curcate) => {
  //   const newItem = Data.filter((el) => {
  //     return el.category === curcate;
  //   });
  //   setSelectCategory(curcate);
  //   setProducts(newItem);
  // };

  // console.log(products);
  return (
    <div>
      <PageHeader title="Our Shop Page" curpage="shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap  justify-content-between ">
                  <p>{showResult}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActiver"
                    }`}
                  >
                    <a
                      className="  grid "
                      onClick={() => setGridList(!gridList)}
                    >
                      <i class="icofont-ghost"></i>
                    </a>
                    <a
                      className=" list "
                      onClick={() => setGridList(!gridList)}
                    >
                      <i class="icofont-listing-box"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <ProductCard GridList={gridList} products={products} />
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={gridList} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
