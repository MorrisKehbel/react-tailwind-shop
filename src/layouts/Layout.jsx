import { Outlet } from "react-router";
import { useState } from "react";
import { Navbar, Footer } from "../components/Index";

export const Layout = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");

  return (
    <>
      <Navbar setCategoryFilter={setCategoryFilter} />
      <main>
        <Outlet context={{ categoryFilter }} />
      </main>
      <Footer />
    </>
  );
};
