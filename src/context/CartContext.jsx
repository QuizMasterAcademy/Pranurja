import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [addedItemMsg, setAddedItemMsg] = useState("");

  // ✅ ADD TO CART
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name || product.title,
          price: product.discountPrice,
          qty: 1,
        },
      ];
    });

    setAddedItemMsg(`${product.name || product.title} added to cart`);
    setTimeout(() => setAddedItemMsg(""), 2000);
  };

  // ✅ INCREASE QTY
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ✅ DECREASE QTY
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        addedItemMsg,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
