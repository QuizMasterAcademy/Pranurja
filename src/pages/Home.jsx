import { useEffect, useState } from "react";
import "./Home.css";

// ✅ Import your 3 images
import img1 from "../assets/images/branding.png";
import img2 from "../assets/images/orange.png";
import img3 from "../assets/images/wood.png";
import img4 from "../assets/images/homebg.png";

const Home = () => {
  const images = [img3,img1, img2,img4 ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // ✅ Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-wrapper">

      {/* ✅ LEFT CONTENT */}
      <div className="hero-left">
        <h1>Pran Urja</h1>
        <p>
          Pran Urja is a premium fragrance brand crafted for those who believe
          in elegance, purity, and lasting impressions. Our solid perfumes are
          designed to deliver long-lasting aroma with a luxurious feel, perfect
          for everyday wear and special occasions.
        </p>
        <button className="hero-btn">Shop All</button>
      </div>

      {/* ✅ RIGHT IMAGE (AUTO CHANGING) */}
      <div className="hero-right">
        <img
          src={images[currentIndex]}
          alt="Pran Urja Banner"
          className="hero-img"
        />
      </div>

    </div>
  );
};

export default Home;
