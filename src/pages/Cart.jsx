import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty } =
    useContext(CartContext);

  const navigate = useNavigate();

  // ✅ SUBTOTAL
  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ✅ 2.5% PLATFORM FEE
  const platformFee = +(subTotal * 0.025).toFixed(2);

  // ✅ DELIVERY CHARGE LOGIC
  const deliveryCharge = subTotal >= 749 ? 0 : 40;

  // ✅ FINAL TOTAL
  const grandTotal = subTotal + platformFee + deliveryCharge;

  return (
    <div className="cart-page">
      <h2 className="cart-title">My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>

                  <td>
                    <div className="qty-box">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                  </td>

                  <td>₹{item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ✅ PRICE SUMMARY */}
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subTotal}</span>
            </div>

            <div className="summary-row">
              <span>Platform Fee (2.5%)</span>
              <span>₹{platformFee}</span>
            </div>

            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>
                {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
              </span>
            </div>

            <hr />

            <div className="summary-row total-row">
              <span>Total Payable</span>
              <span>₹{grandTotal}</span>
            </div>

            {subTotal < 500 && (
              <p className="free-delivery-msg">
                Add items worth ₹{500 - subTotal} more for FREE delivery 🚚
              </p>
            )}

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
