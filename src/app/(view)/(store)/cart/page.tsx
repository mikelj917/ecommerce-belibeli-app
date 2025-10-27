import { CartList } from "./components/CartList/CartList";
import { CartHeader } from "./components/Header/CartHeader";

const CartPage = () => {
  return (
    <div className="p-4">
      <CartHeader />
      <CartList />
    </div>
  );
};

export default CartPage;
