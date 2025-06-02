import { useState, useEffect } from "react";

const addCartHandle = (product, setOnCart) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const exists = cartItems.some((item) => item.id === product.id);

  if (!exists) {
    const newItems = [...cartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(newItems));
    setOnCart(true);
  } else {
    const updatedItems = cartItems.filter((item) => item.id !== product.id);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setOnCart(false);
  }
};

export const ProductCard = ({ product }) => {
  const [onCart, setOnCart] = useState(false);
  const [itemTyp, setItemTyp] = useState("all");

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const exists = cartItems.some((item) => item.id === product.id);

    if (exists) {
      setOnCart(true);
    }
  }, [itemTyp]);

  return (
    <div className="rounded-lg shadow-sm bg-white">
      <figure className="px-4 pt-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto"
        />
      </figure>
      <div className="bg-white rounded-xl flex flex-col p-4 h-46">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-black font-semibold line-clamp-1">
              {product.title}
            </h2>
            <p className="text-xs text-gray-500 mt-2 line-clamp-2">
              {product.description}
            </p>
            <a href="#" className="text-xs font-semibold text-gray-500 mt-2">
              {product.category}
            </a>
          </div>

          <div className="flex justify-between items-center mt-8">
            <p className="font-bold text-primary">${product.price}</p>
            <button
              onClick={() => addCartHandle(product, setOnCart)}
              className={`btn btn-sm ${
                !onCart ? "btn-primary" : "bg-base-200"
              }`}
            >
              {onCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
