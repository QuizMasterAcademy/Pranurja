import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* ✅ ABOUT US SECTION */}
      <div className="about-section">
        <h1 className="brand-title">PRAN URJA</h1>

        <p className="about-text">
          Pran Urja is a home-grown Indian fragrance brand that proudly introduced
          a premium range of solid perfumes and roll-on perfumes crafted with
          natural ingredients and authentic sourcing.
        </p>

        <p className="about-text">
          For our perfumes, we carefully extract high-quality fragrance oil from
          Tibet, known for its rich and pure aromatic traditions. The natural wax
          used in our solid perfumes is sourced from the pristine regions of
          Himachal Pradesh, ensuring purity, safety, and long-lasting
          performance.
        </p>

        <p className="about-text">
          Each fragrance is expertly blended with our signature fragrance
          compositions, creating a unique balance of freshness, warmth, and
          elegance. Our products are designed for everyday use, offering a
          long-lasting aroma in a compact, travel-friendly form.
        </p>

        <p className="about-text">
          At Pran Urja, we believe in quality, authenticity, and craftsmanship.
          Every product reflects our commitment to natural sourcing, premium
          blends, and customer satisfaction. Our goal is to deliver fragrances
          that energize your senses and elevate your lifestyle.
        </p>
      </div>

      {/* ✅ WHY CHOOSE PRAN URJA SECTION (DETAILED) */}
      <div className="why-section">
        <h2 className="why-title">WHY CHOOSE PRAN URJA?</h2>

        <div className="why-card">
          <h3>Authentic Tibetan Fragrance Oil</h3>
          <p>
            We use premium-quality fragrance oil sourced from Tibet, known for
            its purity and rich aromatic strength.
          </p>
        </div>

        <div className="why-card">
          <h3>Alcohol-Free Formula</h3>
          <p>
            Our solid and roll-on perfumes are completely alcohol-free, making
            them safe for all skin types and long-lasting without dryness or
            irritation.
          </p>
        </div>

        <div className="why-card">
          <h3>Natural Wax from Himachal Pradesh</h3>
          <p>
            The wax used in our solid perfumes is sourced from the clean and
            natural regions of Himachal Pradesh, ensuring purity and smooth
            application.
          </p>
        </div>

        <div className="why-card">
          <h3>Long-Lasting Fragrance</h3>
          <p>
            Our expert blending process ensures that the fragrance stays with
            you for hours.
          </p>
        </div>

        <div className="why-card">
          <h3>Skin-Friendly & Safe</h3>
          <p>
            Made with natural ingredients, our products are gentle on the skin
            and suitable for daily use.
          </p>
        </div>

        <div className="why-card">
          <h3>Travel-Friendly Design</h3>
          <p>
            Compact solid perfume and roll-on bottles make them easy to carry
            anywhere.
          </p>
        </div>

        <div className="why-card">
          <h3>Premium Quality at Affordable Pricing</h3>
          <p>
            We deliver luxury fragrance quality at a reasonable and accessible
            price.
          </p>
        </div>

        <div className="why-card">
          <h3>Made in India with Global Standards</h3>
          <p>
            Proudly crafted in India using international quality standards.
          </p>
        </div>
      </div>

      {/* ✅ CONTACT INFO SECTION */}
      <div className="contact-section">
        <div className="contact-box">
          <p className="contact-title">CONTACT INFORMATION</p>

          <p className="contact-text">
            <strong>Office Address:</strong><br />
            Office no: 02/03, Dube Nagar Phata,<br />
            Kesnand, Dube Nagar Phata, Wagholi,<br />
            Pune, Maharashtra - 412207
          </p>

          <p className="contact-text">
            <strong>Legal Name:</strong> GIFTVERSE
          </p>

          <p className="contact-text">
            <strong>GST Address:</strong><br />
            Office no: 02/03, Dube Nagar Phata,<br />
            Kesnand, Dube Nagar Phata, Wagholi,<br />
            Pune, Maharashtra - 412207
          </p>

          <h2 className="hours-title">OPERATING HOURS</h2>

          <p className="contact-text">
            Monday to Friday / 10am to 6pm
          </p>

          <p className="contact-text">
            <strong>Contact:</strong> +91 9657602575
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
