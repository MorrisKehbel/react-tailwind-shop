import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { Navbar, Footer } from "../components/Index";

export const Layout = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [cartItems, setCartItems] = useState({
    totalPrice: 0,
    totalItems: 0,
    products: [],
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    const totalPrice = stored.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const totalItems = stored.reduce((acc, item) => acc + item.quantity, 0);

    setCartItems({
      totalPrice: totalPrice,
      totalItems: totalItems,
      products: stored,
    });
  }, []);

  return (
    <>
      <Navbar
        setCategoryFilter={setCategoryFilter}
        categoryFilter={categoryFilter}
        cartItems={cartItems}
      />
      <main>
        <Outlet
          context={{
            categoryFilter,
            setCategoryFilter,
            cartItems,
            setCartItems,
          }}
        />
      </main>
      <Footer />
    </>
  );
};
