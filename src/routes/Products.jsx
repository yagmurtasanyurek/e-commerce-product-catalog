import { useProducts } from "../hooks/useProducts";
import ProductGrid from "../components/ProductGrid";

export default function Products() {
  const { data, isLoading, isError } = useProducts();

  // early checks to make sure data is available, then render data
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>There's an error</p>;

  return (
    <div>
      <ProductGrid products={data.products} />
    </div>
  );
}
