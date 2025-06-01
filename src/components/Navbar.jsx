export const Navbar = () => {
  return (
    <nav className="px-4 sticky top-0 z-50 bg-stone-200/90 backdrop-blur-md shadow-sm text-stone-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3">
          <a
            href="#"
            style={{ fontFamily: "'Playwrite HU', cursive" }}
            className="text-2xl font-bold text-primary transition-transform duration-300 hover:scale-110"
          >
            Shop
          </a>
          <div>
            <button className="btn btn-ghost rounded-btn btn-primary">
              <span className="text-lg">Jewelery</span>
            </button>
            <button className="btn btn-ghost rounded-btn btn-primary">
              <span className="text-lg">Electronics</span>
            </button>
            <div className="dropdown dropdown-hover">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost rounded-btn btn-primary text-lg m-1"
              >
                Clothing
              </div>
              <ul
                tabIndex="0"
                className="menu dropdown-content z-1 p-2 shadow bg-primary rounded-box w-52 text-white"
              >
                <li>
                  <a>Men</a>
                </li>
                <li>
                  <a>Women</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <button className="btn btn-ghost btn-circle btn-primary">
              <span className="material-symbols-outlined text-2xl">
                shopping_cart
              </span>
            </button>
            <button className="btn btn-ghost btn-circle btn-primary">
              <span className="material-symbols-outlined text-2xl">
                favorite
              </span>
            </button>
            <button className="btn btn-ghost btn-circle btn-primary">
              <span className="material-symbols-outlined text-2xl">person</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
