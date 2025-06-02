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
    const totalPrice = stored.reduce((acc, item) => acc + item.price, 0);

    setCartItems({
      totalPrice: totalPrice,
      totalItems: stored.length,
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
