import { useParams, useNavigate } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useCartStore } from "../store/cartStore";

export default function ProductDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useProduct(id);
  const navigate = useNavigate();
  const addItem = useCartStore((s) => s.addItem);

  if (isError) return <p>There's an error.</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {/* Back button */}
      <button onClick={() => navigate(-1)}>← Back</button>

      {/* Top section */}
      <div>
        {/* Left - image */}
        <div>
          <img src={data.images[0]} alt={data.title} />
        </div>

        {/* Right - main info */}
        <div>
          <p>{data.brand}</p>
          <h1>{data.title}</h1>
          <p>★{data.rating}</p>
          <p>{data.price}</p>
          <button onClick={() => addItem(data)}>Add to cart</button>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2>Description</h2>
        <p>{data.description}</p>
      </div>

      {/* Shipping / Warranty / Return policy */}
      <div>
        <p>{data.shippingInformation}</p>
        <p>{data.warrantyInformation}</p>
        <p>{data.returnPolicy}</p>
      </div>

      {/* Weight / Dimensions */}
      <div>
        <p>{data.weight}</p>
        <p>
          W: {data.dimensions.width} / H: {data.dimensions.height} / D:{" "}
          {data.dimensions.depth}
        </p>
      </div>

      {/* Reviews */}
      <div>
        <h2>Reviews</h2>
        {data.reviews.map((rev) => (
          <div key={rev.reviewerName}>
            <p>{rev.reviewerName}</p>
            <p>★{rev.rating}</p>
            <p>{rev.comment}</p>
            <p>{new Date(rev.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
