import { useState } from "react";
import giftData from "../data/giftData";
import "./Gift.css";

const Gift = () => {
  return (
    <div className="gift-page">
      <h1 className="gift-title">Gift Collection</h1>

      <div className="gift-grid">
        {giftData.map((gift) => (
          <GiftCard key={gift.id} gift={gift} />
        ))}
      </div>
    </div>
  );
};

const GiftCard = ({ gift }) => {
  const [activeImg, setActiveImg] = useState(gift.images[0]);

  return (
    <div className="gift-card">
      {/* ✅ Main Image */}
      <img src={activeImg} alt={gift.name} className="gift-main-img" />

      {/* ✅ Thumbnails */}
      <div className="gift-thumbs">
        {gift.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            className={`gift-thumb ${activeImg === img ? "active" : ""}`}
            onClick={() => setActiveImg(img)}
          />
        ))}
      </div>

      <h3>{gift.name}</h3>
      <p className="gift-category">{gift.category}</p>
      <p className="gift-desc">{gift.description}</p>
      <p className="gift-price">₹{gift.price}</p>
      <button className="gift-btn">Add to Cart</button>
    </div>
  );
};

export default Gift;
