const {createStore, combineReducers, applyMiddleware} = require('redux');
const {logger} = require("redux-logger");

// Product constant
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCT = "GET_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// Cart constant
const ADD_CART_ITEM = "ADD_CART_ITEM";
const GET_CART_ITEM = "GET_CART_ITEM";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

// Product initial state
const productInitialState = {
    product: ['Apple', 'Orange'],
    numberOfProduct: 2
}

// cart initial state
const cartInitialState = {
    product: ['Apple'],
    numberOfProduct: 1
}

// Product action
const getProducts = () => {
    return {
        type: GET_PRODUCT
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
const removeProduct = (product) => {
    return {
        type: REMOVE_PRODUCT,
        payload: product
    }
}

// Cart action
const addCartItem = (item) => {
    return {
        type: ADD_CART_ITEM,
        payload: item
    }
}
const getCartItem = () => {
    return {
        type: GET_CART_ITEM
    }
}
const removeCartItem = (item) => {
    return {
        type: REMOVE_CART_ITEM,
        payload: item
    }
}

//Product Reducer
const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                product: [...state.product, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }
        case REMOVE_PRODUCT:
            if (state.product.length > 0) {
                let product = [...state.product]
                // product = product.filter(item => item !== action.payload)
                product = product.filter(item => !action.payload.includes(item))
                return {
                    product: product,
                    numberOfProduct: state.numberOfProduct - 1
                }
            } else {
                return state;
            }
        default:
            return state;
    }
}

// Cart Reducer
const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case GET_CART_ITEM:
            return {
                ...state
            }
        case ADD_CART_ITEM:
            return {
                ...state,
                product: [...state.product, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }
        case REMOVE_CART_ITEM:
            let cartItem = [...state.product]
            cartItem = cartItem.filter(item => item !== action.payload)
            return {
                product: cartItem,
                numberOfProduct: state.numberOfProduct - 1
            }
        default:
            return state;
    }
}

// store
const rootReducer = combineReducers({
    productR : productReducer,
    cartR : cartReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("Tomato"));
// store.dispatch(removeProduct("Orange"));
// store.dispatch(removeProduct("Apple"));
// store.dispatch(removeProduct("Tomato"));
// store.dispatch(removeProduct("Tomato"));
//
// store.dispatch(getCartItem());
// store.dispatch(addCartItem('Pen'));
// store.dispatch(addCartItem('Black berry'));
// store.dispatch(removeCartItem('Pen'));