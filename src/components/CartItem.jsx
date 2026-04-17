import { useCartStore } from "../store/cartStore";

export default function CartItem(item) {
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQty = useCartStore((s) => s.updateQty);
  return (
    <div>
      <img src={item.thumbnail} alt={item.title} />
      <div>
        <p>{item.brand}</p>
        <p>{item.title}</p>
      </div>
      <div>
        <button onClick={() => updateQty(item.id, -1)}>-</button>
        <span>{item.qty}</span>
        {/* note : Disable button if quantity is 10  */}
        <button onClick={() => updateQty(item.id, 1)}>+</button>
      </div>
      <p>${(item.price * item.qty).toFixed(2)}</p>
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
}
