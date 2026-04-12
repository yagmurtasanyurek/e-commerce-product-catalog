import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

export function useProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  //useSearchParams reads the current URL, so filters changes.
  //and becomes something like : laptop, price ,page 2
  //which changes the queryKey. React Q fetches again.

  const filters = {
    // Reading the URL
    category: searchParams.get("category") ?? undefined,
    sort: searchParams.get("sort") ?? undefined,
    page: Number(searchParams.get("page") ?? 1),
  };

  // fetch, cache
  return useQuery({
    queryKey: ["producst", filters],
    //The function that the query will use to request data.
    queryFn: () => fetchProducts(filters),
    staleTime: 1000 * 60 * 5,
  });
}
