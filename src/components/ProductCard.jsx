import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";

// const addCartHandle = (product, setOnCart, setCartItems) => {
//   const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//   const exists = cartItems.some((item) => item.id === product.id);
//   if (!exists) {
//     const newItem = { ...product, quantity: 1 };
//     const newItems = [...cartItems, newItem];

//     localStorage.setItem("cartItems", JSON.stringify(newItems));
//     setOnCart(true);
//     const totalPrice = newItems.reduce((acc, item) => acc + item.price, 0);
//     setCartItems({
//       totalPrice: totalPrice,
//       totalItems: newItems.length,
//       products: newItems,
//     });
//   } else {
//     const updatedItems = cartItems.filter((item) => item.id !== product.id);
//     localStorage.setItem("cartItems", JSON.stringify(updatedItems));
//     setOnCart(false);
//     const totalPrice = updatedItems.reduce((acc, item) => acc + item.price, 0);
//     setCartItems({
//       totalPrice: totalPrice,
//       totalItems: updatedItems.length,
//       products: updatedItems,
//     });
//   }
// };

const addCartHandle = (product, setOnCart, setCartItems) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const exists = cartItems.some((item) => item.id === product.id);

  let newItems;

  if (!exists) {
    const newItem = { ...product, quantity: 1 };
    newItems = [...cartItems, newItem];
    setOnCart(true);
  } else {
    newItems = cartItems.filter((item) => item.id !== product.id);
    setOnCart(false);
  }

  const totalPrice = newItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = newItems.reduce((acc, item) => acc + item.quantity, 0);

  localStorage.setItem("cartItems", JSON.stringify(newItems));
  setCartItems({
    products: newItems,
    totalPrice,
    totalItems,
  });
};

export const ProductCard = ({ product }) => {
  const [onCart, setOnCart] = useState(false);
  const { setCategoryFilter, categoryFilter, setCartItems } =
    useOutletContext();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const exists = cartItems.some((item) => item.id === product.id);
    setOnCart(exists);
  }, [product.id]);

  return (
    <div className="rounded-lg shadow-sm bg-white">
      <figure className="px-4 pt-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto"
        />
      </figure>
      <div className="bg-white rounded-xl flex flex-col p-4 h-52">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-black font-semibold line-clamp-1">
              {product.title}
            </h2>
            <p className="text-xs text-gray-500 mt-2 line-clamp-2">
              {product.description}
            </p>
            <p
              className="text-xs font-semibold text-gray-500 mt-2 cursor-pointer"
              onClick={() => setCategoryFilter(product.category)}
            >
              {categoryFilter === product.category
                ? ""
                : `More of ${product.category}`}
            </p>
          </div>
          <div className="flex flex-wrap justify-between mt-auto">
            <p className="font-bold text-primary">${product.price}</p>
            <button
              onClick={() => addCartHandle(product, setOnCart, setCartItems)}
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
