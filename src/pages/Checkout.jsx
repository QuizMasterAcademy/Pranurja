import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  // ✅ FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
  });

  // ✅ SAME LOGIC AS CART PAGE
  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const platformFee = +(subTotal * 0.025).toFixed(2);
  const deliveryCharge = subTotal >= 749 ? 0 : 40;
  const grandTotal = subTotal + platformFee + deliveryCharge;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ OPEN RAZORPAY
  const openRazorpay = (order) => {
    const options = {
      key: "rzp_live_S1JADME1QiIaCB",
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      name: "Pranurja",
      description: "Order Payment",
      handler: function () {
        navigate("/success");
      },
      prefill: {
        name: formData.name,
        contact: formData.mobile,
      },
      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // ✅ PAY BUTTON
  const handlePayment = async () => {
    if (!formData.name || !formData.mobile || !formData.address) {
      alert("Please fill all details");
      return;
    }

    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    try {
      const res = await fetch("https://pranurja-backend.onrender.com/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // ✅ SEND SAME GRAND TOTAL
        body: JSON.stringify({
          amount: grandTotal,
          customer: formData,
          cartItems: cartItems
        })
        
      });

      const order = await res.json();
      openRazorpay(order);
    } catch (error) {
      alert("Payment failed");
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-box">
        {/* ADDRESS */}
        <div className="checkout-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Full Address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* SUMMARY */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>

          {cartItems.map((item) => (
            <p key={item.id}>
              {item.name} × {item.qty}
            </p>
          ))}

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subTotal}</span>
          </div>

          <div className="summary-row">
            <span>Platform Fee (2.5%)</span>
            <span>₹{platformFee}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>{deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}</span>
          </div>

          <hr />

          <div className="summary-row total-row">
            <span>Total Payable</span>
            <span>₹{grandTotal}</span>
          </div>

          <button onClick={handlePayment}>
            Pay ₹{grandTotal}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
