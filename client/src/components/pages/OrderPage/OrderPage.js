import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartItems, getCartItems } from '../../../redux/cartRedux';
import { useHistory } from 'react-router-dom';

const OrderPage = () => {
  const [orderData, setOrderData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
  });

  const cartProducts = useSelector(getCartItems);
  const dispatch = useDispatch();
 

  const handleSubmitOrder = async () => {
    try {
      const response = await axios.post(`${API_URL}/orders`, orderData);

      if (response.status === 201) {
        alert('Zamówienie zostało złożone pomyślnie.');
        dispatch(clearCartItems());
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Błąd podczas składania zamówienia:', error);
      alert('Wystąpił błąd podczas składania zamówienia. Spróbuj ponownie później.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  return (
    <div>
      <h2>Order Summary</h2>
      {cartProducts.map((product) => (
      <div key={product.id}>
      <p>{product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Total: ${product.price * product.quantity}</p>
   </div>
   ))}
  

      <h2>Contact Details</h2>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={orderData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={orderData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={orderData.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={orderData.phone}
            onChange={handleInputChange}
          />
        </div>
      </form>

      <button onClick={handleSubmitOrder}>Order</button>
    </div>
  );
};

export default OrderPage;
