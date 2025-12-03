import { useState } from "react";
import ProductData from "../data/ProductData";
import "./Product.css";

import InstagramIcon from '@mui/icons-material/Instagram';
const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [showCartDialog, setShowCartDialog] = useState(false);

  return (
    <div className="product-page">
      <h1 className="product-title">All Products</h1>

      <div className="product-container">
        {ProductData.map((type, typeIndex) => (
          <div key={typeIndex}>
            <h2 className="product-type">{type.productType}</h2>

            {type.categories.map((category, catIndex) => (
              <div key={catIndex}>
                {category.products.length > 0 && (
                  <>
                    <h3 className="category-title">{category.categoryName}</h3>

                    <div className="product-grid">
                      {category.products.map((product) => (
                        <div className="product-card" key={product.id}>
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="product-img"
                          />

                          <h4>{product.name}</h4>
                          <p>{product.fragrance}</p>

                          <div className="price-box">
                            <span className="original-price">
                              ₹{product.price}
                            </span>
                            <span className="discount-price">
                              ₹{product.discountPrice}
                            </span>
                          </div>

                          <div className="btn-group">
                            <button
                              className="add-btn"
                              onClick={() => setShowCartDialog(true)}
                            >
                              Add to Cart
                            </button>

                            <button
                              className="view-btn"
                              onClick={() => {
                                setSelectedProduct(product);
                                setActiveImage(product.images[0]);
                              }}
                            >
                              View
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ✅ ✅ ✅ PRODUCT VIEW MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedProduct(null)}>
              ✖
            </span>

            <div className="main-image-box">
              <img src={activeImage} alt="Main Product" />
            </div>

            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.fragrance}</p>

            <p className="modal-description">
              {selectedProduct.description}
            </p>

            <div className="price-box">
              <span className="original-price">
                ₹{selectedProduct.price}
              </span>
              <span className="discount-price">
                ₹{selectedProduct.discountPrice}
              </span>
            </div>

            <div className="thumbnail-row">
              {selectedProduct.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  className={
                    activeImage === img ? "thumb active-thumb" : "thumb"
                  }
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ✅ ✅ ✅ ADD TO CART DIALOG */}
      {showCartDialog && (
        <div className="modal-overlay" onClick={() => setShowCartDialog(false)}>
          <div className="cart-dialog" onClick={(e) => e.stopPropagation()}>
            <span
              className="close-btn"
              onClick={() => setShowCartDialog(false)}
            >
              ✖
            </span>

            <h2>Website Under Construction 🚧</h2>
            <p className="cart-text">
              To buy this product, please click on the Instagram logo below and
              purchase directly.
            </p>

            <a
              href="https://www.instagram.com/pran_urja?igsh=YnMxMnBhZndtNTlm"
              target="_blank"
              rel="noopener noreferrer"
            >
           <InstagramIcon sx={{ fontSize: 100, color: "#E1306C" }} />


            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
