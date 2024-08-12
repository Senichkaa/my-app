import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import AddProductModal from "../components/modals/AddProductModal";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("name");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/products")
      .then((response) =>
        setProducts(Array.isArray(response.data) ? response.data : [])
      );
  }, []);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  //   const sortedProducts = [...products].sort((a, b) => {
  //     return sortOption === "name"
  //       ? a.name.localeCompare(b.name)
  //       : a.count - b.count;
  //   });

  const sortFunctions = {
    name: (a, b) => (a.name || "").localeCompare(b.name || ""),
    count: (a, b) => a.count - b.count,
  };

  const sortedProducts = [...products]?.sort(sortFunctions[sortOption]);

  console.log("===", sortedProducts.length);
  return (
    <div>
      <h1>Product List</h1>
      <button onClick={() => setIsAddModalOpen(true)}>Add Product</button>
      <select
        onChange={(e) => setSortOption(e.target.value)}
        value={sortOption}
      >
        <option value="name">Sort by Name</option>
        <option value="count">Sort by Count</option>
      </select>
      {sortedProducts.length ? (
        sortedProducts?.map((product) => (
          <Product
            key={product.id || product.name}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))
      ) : (
        <div>No products.</div>
      )}

      <AddProductModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        addProduct={addProduct}
      />
    </div>
  );
}

export default ProductList;
