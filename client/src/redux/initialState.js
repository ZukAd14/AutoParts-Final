import { getLocalStorage } from "./cartRedux";


const initialState = {
    products: {
        data: []
    },
    cart: {
        products: getLocalStorage(),
    }
};

export default initialState;