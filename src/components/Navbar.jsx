import { Link } from "react-router";
export const Navbar = ({ setCategoryFilter, categoryFilter, cartItems }) => {
  return (
    <nav className="px-4 sticky top-0 z-50 bg-stone-200/90 backdrop-blur-md shadow-sm text-stone-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3">
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-white rounded-box z-1 mt-6 p-6 w-84 shadow mx-auto space-y-2"
            >
              <div className="mx-auto">
                <button className="btn btn-ghost btn-circle btn-primary">
                  <span className="material-symbols-outlined text-2xl">
                    favorite
                  </span>
                </button>
                <button className="btn btn-ghost btn-circle btn-primary">
                  <span className="material-symbols-outlined text-2xl">
                    person
                  </span>
                </button>
              </div>
              <li>
                <Link
                  to="/"
                  onClick={() => setCategoryFilter("all")}
                  className={`btn rounded-btn btn-primary text-lg m-1 ${
                    categoryFilter === "all" ? "underline" : "btn-ghost"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => setCategoryFilter("jewelery")}
                  className={`btn rounded-btn btn-primary text-lg m-1 ${
                    categoryFilter === "jewelery" ? "underline" : "btn-ghost"
                  }`}
                >
                  Jewelery
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => setCategoryFilter("electronics")}
                  className={`btn rounded-btn btn-primary text-lg m-1 ${
                    categoryFilter === "electronics" ? "underline" : "btn-ghost"
                  }`}
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => setCategoryFilter("men's clothing")}
                  className={`btn rounded-btn btn-primary text-lg m-1 ${
                    categoryFilter === "men's clothing"
                      ? "underline"
                      : "btn-ghost"
                  }`}
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => setCategoryFilter("women's clothing")}
                  className={`btn rounded-btn btn-primary text-lg m-1 ${
                    categoryFilter === "women's clothing"
                      ? "underline"
                      : "btn-ghost"
                  }`}
                >
                  Women
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            onClick={() => setCategoryFilter("all")}
            style={{ fontFamily: "'Playwrite HU', cursive" }}
            className="text-2xl font-bold text-primary transition-transform duration-300 hover:scale-110"
          >
            Shop
          </Link>
          <div className="hidden md:flex">
            <Link
              to="/"
              onClick={() => setCategoryFilter("all")}
              className={`btn btn-ghost rounded-btn btn-primary text-lg m-1 ${
                categoryFilter === "all" ? "underline" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => setCategoryFilter("jewelery")}
              className={`btn btn-ghost rounded-btn btn-primary text-lg m-1 ${
                categoryFilter === "jewelery" ? "underline" : ""
              }`}
            >
              Jewelery
            </Link>
            <Link
              to="/"
              onClick={() => setCategoryFilter("electronics")}
              className={`btn btn-ghost rounded-btn btn-primary text-lg m-1 ${
                categoryFilter === "electronics" ? "underline" : ""
              }`}
            >
              Electronics
            </Link>

            <div className="dropdown dropdown-hover">
              <div
                tabIndex="0"
                role="button"
                className={`btn btn-ghost rounded-btn btn-primary text-lg m-1 ${
                  categoryFilter === "men's clothing" ||
                  categoryFilter === "women's clothing"
                    ? "underline"
                    : ""
                }`}
              >
                Clothing
              </div>
              <ul
                tabIndex="0"
                className="menu dropdown-content z-1 p-2 shadow bg-primary rounded-box w-52 text-white"
              >
                <li>
                  <Link
                    to="/"
                    onClick={() => setCategoryFilter("men's clothing")}
                    className="hover:text-gray-200"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => setCategoryFilter("women's clothing")}
                    className="hover:text-gray-200"
                  >
                    Women
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-primary btn-circle"
              >
                <div className="indicator">
                  <span className="material-symbols-outlined text-2xl">
                    shopping_cart
                  </span>
                  <span className="badge badge-sm indicator-item">
                    {cartItems.totalItems}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-white z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {cartItems.totalItems}
                  </span>
                  <span className="text-info">
                    ${Math.ceil(cartItems.totalPrice * 100) / 100}
                  </span>
                  <div className="card-actions">
                    <Link
                      to="/cart"
                      onClick={() => setCategoryFilter("cart")}
                      className="btn btn-primary btn-block"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-ghost btn-circle btn-primary hidden md:flex">
              <span className="material-symbols-outlined text-2xl">
                favorite
              </span>
            </button>
            <button className="btn btn-ghost btn-circle btn-primary hidden md:flex">
              <span className="material-symbols-outlined text-2xl">person</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
