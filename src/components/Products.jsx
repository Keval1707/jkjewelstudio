import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  const data = [
    {
      id: 101,
      name: "Diamond Ring",
      sku: "DR-101-WG",
      desc: "Elegant 14k white gold diamond ring with certified diamonds.",
      price: 2500,
      discount: "20%",
      material: "14K White Gold",
      stock: true,
      rating: 4.8,
      reviews: 134,
      img: [
        "/images/gallery/11.png",
        "/images/gallery/11_1.png",
        "/images/gallery/11_2.png",
        "/images/gallery/11_3.png",
        "/images/gallery/11_4.png",
      ],
      category: "Rings",
    },
    {
      id: 102,
      name: "Gold Necklace",
      sku: "GN-102-FP",
      desc: "24k gold necklace with floral pendant.",
      price: 1800,
      discount: "1%",
      material: "24K Yellow Gold",
      stock: true,
      rating: 4.6,
      reviews: 89,
      img: [
        "/images/gallery/1.png",
        "/images/gallery/2.png",
        "/images/gallery/3.png",
        "/images/gallery/4.png",
        "/images/gallery/12.png",
      ],
      category: "Necklaces",
    },
  ];

  useEffect(() => {
    const found = data.find((item) => item.id === parseInt(id, 10)) || null;
    setProduct(found);
    if (found) {
      setMainImage(found.img[0]);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container">
        <h1>Product Not Found</h1>
        <p>No product exists with ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="product-container container">
      <div className="product-left">
        <div className="main-image">
          <img src={mainImage} alt={product.name} />
        </div>
        <div className="thumbnail-gallery">
          {product.img.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${product.name} ${index + 1}`}
              className={mainImage === src ? "active-thumb" : ""}
              onClick={() => setMainImage(src)}
            />
          ))}
        </div>
      </div>

      <div className="product-right">
        <h2>{product.name}</h2>
        <p>
          <strong>SKU:</strong> {product.sku}
        </p>
        <p>
          <strong>Rating:</strong> ⭐ {product.rating} ({product.reviews} reviews)
        </p>
        <p>
          <strong>Price:</strong> $
          {product.discount && parseFloat(product.discount) > 0
            ? (
                product.price *
                (1 - parseFloat(product.discount) / 100)
              ).toFixed(2)
            : product.price.toFixed(2)}
          {product.discount && parseFloat(product.discount) > 0 && (
            <span className="discount-tag"> ({product.discount} OFF)</span>
          )}
        </p>

        <div className="product-actions">
          <button className="buy-btn Products-btn">Buy Now</button>
          <button className="cart-btn Products-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;