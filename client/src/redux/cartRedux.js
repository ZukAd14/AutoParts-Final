
import initialState from './initialState';
import axios from 'axios';

//Selectors
export const getCartItems = (state) => state.cart.items;

//actions
const createActionName = (actionName) => `app/products/${actionName}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const UPDATE_CART_ITEM = createActionName('UPDATE_CART_ITEM');

//action creators

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
  
  export const updateCartItem = (productId, quantity) => ({
    type: UPDATE_CART_ITEM,
    payload: { productId, quantity },
  });

  
  
  //LocalStorage

  const loadCartState = () => {
    try {
      const cartState = localStorage.getItem('cartState');
      return cartState ? JSON.parse(cartState) : initialState.cart;
    } catch (error) {
      console.error('Error loading cart state from local storage:', error);
      return initialState.cart;
    }
  };
  
  const saveCartState = (cartState) => {
    try {
      const serializedCartState = JSON.stringify(cartState);
      localStorage.setItem('cartState', serializedCartState);
    } catch (error) {
      console.error('Error saving cart state to local storage:', error);
    }
  };
  
  const initialCartState = loadCartState();


  const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      case UPDATE_CART_ITEM:
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.productId
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;