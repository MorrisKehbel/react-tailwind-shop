import { Link } from "react-router";
import { useOutletContext } from "react-router";

export const Cart = () => {
  const { setCategoryFilter, cartItems, setCartItems } = useOutletContext();

  const handleRemove = (id) => {
    const updatedItems = cartItems.products.filter((item) => item.id !== id);
    const updatedPrice = updatedItems.reduce(
      (acc, item) => acc + item.price,
      0
    );

    setCartItems({
      products: updatedItems,
      totalPrice: updatedPrice,
      totalItems: updatedItems.length,
    });

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  return (
    <div className="max-w-5xl min-h-dvh mx-auto bg-white rounded-lg shadow-sm p-6 my-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Cart</h2>

      {cartItems.products.length === 0 ? (
        <p className="text-gray-500 text-sm">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto  flex-col">
          <table className="table w-full text-sm text-left text-gray-600">
            <thead className="text-xs uppercase text-gray-500 border-b border-gray-200">
              <tr>
                <th className="py-3">Product</th>
                <th className="py-3">Price</th>
                <th className="py-3">Quantity</th>
                <th className="py-3">Total</th>
                <th className="py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.products.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="line-clamp-1">{item.title}</span>
                  </td>
                  <td className="py-3">${item.price.toFixed(2)}</td>
                  <td className="py-3">1</td>
                  <td className="py-3">${item.price.toFixed(2)}</td>
                  <td className="py-3 text-right">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="btn btn-xs btn-outline text-red-500 border-red-300 hover:bg-red-100"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-end self-end py-8 items-center">
        <p className="px-8 font-bold text-black text-right">
          Total Price: ${Math.ceil(cartItems.totalPrice * 100) / 100}
        </p>

        {cartItems.products.length === 0 ? (
          <Link
            to="/"
            onClick={() => setCategoryFilter("all")}
            className="btn rounded-btn bg-primary text-lg"
          >
            Return
          </Link>
        ) : (
          <button className="btn rounded-btn btn-success text-lg">
            Proceed
          </button>
        )}
      </div>
    </div>
  );
};
