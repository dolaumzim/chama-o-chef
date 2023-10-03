import { CartItem } from '../CartItem';
import {
  CartContainer,
  CartItems,
  CartResume,
  ButtonCartOrder
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCart } from '../../contexts/CartContext';
import { Formik, Field, Form } from 'formik';
import { ClientAddress } from '../../services/structure';
import { postCreateOrder } from '../../services/Order/postCreateOrder';
import { useNavigate } from 'react-router-dom';
import { frontEndRoutes } from '../../routes';
import { useState } from 'react';
import { QRCodeDisplay } from '../QrCode';
import { patchCheckoutOrder } from '../../services/Order/patchCheckoutOrder';

export const Cart = () => {
  const { userData, cartItems, setCartItems, isCartVisible, setIsCartVisible } =
    useCart();
  const pageProfile = useNavigate();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [orderId, setOrderId] = useState('');

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.unit_price) * (item.quantity || 0),
    0
  );

  const handleAddAddress = () => {
    pageProfile(frontEndRoutes.userProfile);
  };

  const handleCreateOrder = async (address: string) => {
    setLoading(true);
    const response = await postCreateOrder({
      delivery_address_id: address,
      items_attributes: cartItems.map(item => ({
        dish_id: item.id,
        amount: item.quantity || 0
      }))
    });
    if (response.status === 201) {
      setCartItems([]);
      setIsCartVisible(false);
      setLoading(false);
      setOrderId(response.data.id);
      const reponsePay = await patchCheckoutOrder(response.data.id);
      if (reponsePay.status == 200) {
        setUrl(reponsePay.data.payment_link);
      }
    }
  };
  const onSubmit = () => {};

  return (
    <>
      <CartContainer isactive={isCartVisible}>
        <CartItems>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              data={{
                id: item.id,
                image: item.images[0],
                name: item.name,
                unit_price: item.unit_price,
                quantity: item.quantity
              }}
            />
          ))}
        </CartItems>

        <CartResume>{formatCurrency(Number(totalPrice), 'BRL')}</CartResume>
        {userData.addresses ? (
          <div>
            <Formik
              initialValues={{ address: userData.addresses[0].id }}
              onSubmit={onSubmit}
            >
              {({ values }) => (
                <Form>
                  <h4>Escolha o endereço</h4>
                  <Field className="field-address" as="select" name="address">
                    {userData.addresses.map((add: ClientAddress) => (
                      <option
                        key={add.id}
                        value={add.id}
                        defaultValue={userData.addresses[0].id}
                      >
                        {add.name}
                      </option>
                    ))}
                  </Field>

                  <ButtonCartOrder
                    type="button"
                    onClick={() => {
                      handleCreateOrder(values.address);
                    }}
                    disabled={cartItems.length === 0}
                    loading={loading}
                  >
                    {loading ? '' : 'Finalizar compra'}
                  </ButtonCartOrder>
                </Form>
              )}
            </Formik>
          </div>
        ) : (
          <ButtonCartOrder onClick={() => handleAddAddress()}>
            Adicione um endereço
          </ButtonCartOrder>
        )}
      </CartContainer>
      {url && <QRCodeDisplay url={url} orderId={orderId} />}
    </>
  );
};
