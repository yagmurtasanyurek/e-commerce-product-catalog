import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const totalItem = useCartStore((s) => s.totalItem());
  const totalPrice = useCartStore((s) => s.totalPrice());

  if (items.length === 0) {
    return (
      <div>
        <Link to="products">←</Link>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Your cart</h1>
      <div>
        {items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}

        <button onClick={clearCart}>Clear Cart</button>
      </div>

      <div>
        <h2>Order Summary</h2>
        <div>
          <p>Total items </p>
          <p>{totalItem}</p>
        </div>
        <div>
          <p>Total price </p>
          <p>{totalPrice.toFixed(2)}</p>
        </div>
        <button onClick={clearCart}>Clear Cart</button>
        <Link to="products"> Continue Shopping</Link>
      </div>
    </div>
  );
}
