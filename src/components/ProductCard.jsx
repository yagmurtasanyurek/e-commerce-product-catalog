import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <Link to={`products/:${product.id}`}>
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col">
        <div>
          <p>{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div>
          <h5>★{product.rating}</h5>
        </div>
        <div>
          <h5>${product.price}</h5>
        </div>
      </div>
    </Link>
  );
}
