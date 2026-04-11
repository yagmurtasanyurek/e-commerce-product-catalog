import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Products from "./routes/Products";
import ProductDetail from "./routes/ProductDetail";
import Cart from "./routes/Cart";
import Wishlist from "./routes/Wishlist";
import NotFound from "./routes/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Products /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
