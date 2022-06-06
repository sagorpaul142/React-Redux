const {createStore} = require("redux");

// defining constant
const ADD_USER = "ADD_USER"

// initial state
const initialUserState = {
    users : ["Sagor"],
    count: 1
}

//action

const addUser = (user) => {
    return{
        type: ADD_USER,
        payload: user
    }
}

//Reducer
const addUserReducer = (state = initialUserState , action) => {
    switch (action.type) {
        case ADD_USER:
            return{
                users: [ ...state.users, action.payload],
                count: state.count + 1
            }
        default:
            return state;
    }
}

const store = createStore(addUserReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser("Saikot"))
