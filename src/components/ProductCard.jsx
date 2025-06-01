export const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg shadow-sm bg-white">
      <figure className="px-4 pt-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto"
        />
      </figure>
      <div className="bg-white rounded-xl flex flex-col p-4 h-42">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-black font-semibold line-clamp-1">
              {product.title}
            </h2>
            <p className="text-xs text-gray-500 mt-2 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-8">
            <p className="font-bold text-primary">${product.price}</p>
            <button className="btn btn-sm btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};
