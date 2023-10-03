import { Button, Cart, CounterCart } from '../CartButton/styles';
import { useCart } from '../../contexts/CartContext';

export const CartButton = () => {
  const { cartItems, isCartVisible, setIsCartVisible } = useCart();

  return (
    <Button onClick={() => setIsCartVisible(!isCartVisible)}>
      <Cart />
      {cartItems.length > 0 && <CounterCart>{cartItems.length}</CounterCart>}
    </Button>
  );
};
