import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCartItems, getCartItems, removeFromCart, updateCartItem } from '../../../redux/cartRedux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  console.log(cartItems)
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateCartItem({ id: productId, quantity: parseInt(quantity, 10) }));
  };

  const clearCart = () => {
    dispatch(clearCartItems());
  };

  const updateLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  useEffect(() => {
    const cartState = JSON.parse(localStorage.getItem('cart'));
    if (cartState) {
        cartState.forEach((item) => {
            dispatch(
              updateCartItem({
                id: item.id,
                quantity: item.quantity,
              })
            );
          });
    }
  }, [dispatch]);

  useEffect(() => {
    updateLocalStorage();
  }, [cartItems]);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <input
                    type="text"
                    value={item.userComment}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                </td>
                <td>${item.price}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                </td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button onClick={clearCart}>Clear Cart</button>
      <Link to='/order/summary'>
        <button>Continue to Summary</button>
      </Link>
    </div>
  );
};

export default Cart;
