import React, { useState } from "react";
import EditProductModal from "../components/modals/EditProductModal";

function Product({ product, updateProduct }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Count: {product.count}</p>
      <p>
        Size: {product.size.width}{product.size.height} 
      </p>
      <p>Weight: {product.weight}</p>
      <button onClick={() => setIsEditModalOpen(true)}>Edit</button>

      {isEditModalOpen && (
        <EditProductModal
          open={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          product={product}
          updateProduct={updateProduct}
        />
      )}
    </div>
  );
}

export default Product;
