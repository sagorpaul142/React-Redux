const {createStore} = require("redux");

//defining constant
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// create initial state
const counterState = {
    count: 0
}

// action
const incrementCount = () => {
    return {
        type: INCREMENT
    }
}
const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}
const decrementCount = () => {
    return {
        type: DECREMENT
    }
}
const reset = () => {
    return {
        type: RESET
    }
}

// Reducer
const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            return state;
    }
}

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// dispatch
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(reset());
store.dispatch(incrementByValue(5))
store.dispatch(incrementByValue(10))
