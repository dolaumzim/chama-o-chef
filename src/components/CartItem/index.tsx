import { formatCurrency } from '../../utils/formatCurrency';
import {
  ImageDish,
  Item,
  ItemContent,
  ItemTile,
  ItemPrice,
  RemoveItem,
  Counter,
  ButtonPlus
} from './styles';
import { BsCartDash } from 'react-icons/bs';
import { useCart } from '../../contexts/CartContext';

interface CartItemProps {
  data: {
    id: string;
    image: string;
    name: string;
    unit_price: string;
    quantity: number | undefined;
  };
}

export const CartItem = ({ data }: CartItemProps) => {
  const { cartItems, setCartItems } = useCart();
  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter(item => item.id !== data.id);
    setCartItems(updatedItems);
  };
  const handleDecrementItem = () => {
    if (data.quantity !== undefined && data.quantity > 1) {
      const updatedItems = cartItems.map(item =>
        item.id === data.id
          ? { ...item, quantity: (item.quantity || 0) - 1 }
          : item
      );
      setCartItems(updatedItems);
    } else {
      const updatedItems = cartItems.filter(item => item.id !== data.id);
      setCartItems(updatedItems);
    }
  };

  const handleIncrementItem = () => {
    const updatedItems = cartItems.map(item =>
      item.id === data.id
        ? { ...item, quantity: (item.quantity || 0) + 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  return (
    <Item>
      <ImageDish src={data.image} />
      <ItemContent>
        <ItemTile>{data.name}</ItemTile>
        <ItemPrice>{formatCurrency(Number(data.unit_price), 'BRL')}</ItemPrice>
        <RemoveItem onClick={handleRemoveItem}>
          <BsCartDash />
        </RemoveItem>
        <Counter>
          <ButtonPlus color="#C9C9C9" onClick={handleDecrementItem}>
            -
          </ButtonPlus>
          {data.quantity}
          <ButtonPlus color="#f58100" onClick={handleIncrementItem}>
            +
          </ButtonPlus>
        </Counter>
      </ItemContent>
    </Item>
  );
};
