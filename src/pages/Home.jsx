import { useFetchData } from "../hooks/useFetchData";
import { ProductCard } from "../components/ProductCard";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";
import { useOutletContext } from "react-router";

export const Home = () => {
  const { fetchData, error, loading } = useFetchData(
    "https://fakestoreapi.com/products"
  );
  const { categoryFilter } = useOutletContext();

  if (loading) return <Loading />;
  if (!fetchData || error) return <Error error={error} />;

  const filteredProducts =
    categoryFilter === "all"
      ? fetchData
      : fetchData.filter((item) => item.category === categoryFilter);

  return (
    <div className="bg-stone-100 min-h-dvh py-4 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white text-black rounded-full shadow-md px-4 py-2 flex items-center">
          <span className="material-symbols-outlined text-gray-400">
            search
          </span>
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none w-full ml-2 placeholder-gray-400 text-sm"
          />
        </div>
      </div>

      <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
