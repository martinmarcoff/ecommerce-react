import React, { useState, useEffect } from "react";
import ProductList from "../containers/ProductList";
import Header from "../components/Header";
import useGetProducts from "../hooks/useGetProducts";

const API = "https://api.escuelajs.co/api/v1/products";

const Catalogue = () => {
  const products = useGetProducts(API);
  const [filteredProducts, setFilteredProducts] = useState(products);

  function clickHandler(e) {
    if (e.target.value === "0") {
      {
        setFilteredProducts(products);
      }
    }
    if (e.target.value === "1") {
      {
        setFilteredProducts(products.filter((product) => product.price < 100));
      }
    }
    if (e.target.value === "2") {
      {
        setFilteredProducts(products.filter((product) => product.price > 300));
      }
    }
  }

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <React.Fragment>
      <Header />
      <div className="input-group mb-3">
        <label className="input-group-text" forhtml="inputGroupSelect01">
          Options
        </label>
        <select
          className="form-select"
          id="inputGroupSelect01"
          onClick={clickHandler}
        >
          <option value="0">All Products</option>
          <option value="1">Cheaper Products</option>
          <option value="2">More Expensive Products</option>
        </select>
      </div>
      <ProductList products={filteredProducts} />
    </React.Fragment>
  );
};

export default Catalogue;
