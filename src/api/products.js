const BASE_URL = "https://dummyjson.com";

export async function fetchProducts({ category, sort, page = 1, limit = 12 }) {
  let url = `${BASE_URL}/products?linit=${limit}&skip=${(page - 1) * limit}`;

  if (category) url = `${BASE_URL}/products/category/${category}`;
  if (sort) url += `&sortBy=${sort}&order=asc`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  //When that error is thrown, React Query catches it automatically
  //  and puts it in the isError state.
  console.log(res.json);
  return res.json;
}

export async function fetchProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function searchProducts(query) {
  const res = await fetch(
    `${BASE_URL}/products/search?q=${encodeURIComponent(query)}`,
  );
  if (!res.ok) throw new Error("Search failed");
  console.log(res.json);
  return res.json();
}
