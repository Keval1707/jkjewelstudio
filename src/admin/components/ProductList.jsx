import React, { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../utils/api";
import ProductView from "./ProductView";

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewingProduct, setViewingProduct] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await fetchProducts();
      setProducts(res.data);
    } catch (err) {
      alert("Failed to load products");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this product?")) return;
    try {
      await deleteProduct(id);
      loadProducts();
    } catch (err) {
      alert("Failed to delete product");
    }
  };

  const handleView = (product) => {
    setViewingProduct(product);
  };

  const handleCloseView = () => {
    setViewingProduct(null);
  };

  // Calculate displayed products for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <div className="admin-loading">Loading products...</div>;
  if (products.length === 0) return <div className="admin-empty-state">No products found.</div>;

  return (
    <>
      {viewingProduct && (
        <ProductView product={viewingProduct} onClose={handleCloseView} />
      )}

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stock ? "Yes" : "No"}</td>
              <td>
                <div className="admin-table-actions">
                  <button 
                    className="admin-table-btn admin-table-btn-view"
                    onClick={() => handleView(product)}
                  >
                    View
                  </button>
                  <button 
                    className="admin-table-btn admin-table-btn-edit"
                    onClick={() => onEdit(product._id)}
                  >
                    Edit
                  </button>
                  <button 
                    className="admin-table-btn admin-table-btn-delete"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="pagination-btn"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`pagination-btn ${currentPage === pageNum ? "active" : ""}`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ProductList;
