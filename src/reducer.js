export const initialState = {
  // basket: {cart:[],quantity:1},
  basket: [],
  detail: [],
  quantity: 1,
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log("basket", basket);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    // { state.basket: [...state.basket, action.payload] };
    // if (state.basket.id === action.payload.id) {
    //   return {
    //     ...state,
    //     quantity: state.quantity + 1,
    //   };
    // }

    // const index = state.basket.findIndex(
    //   (item) => item.id === action.payload.id
    // );
    // const newState = [...state];
    // if (true) {
    //   return {
    //      ...state,
    //     basket: [...state.basket, action.payload],
    //   };
    // } else {
    //   return {
    //     ...state,
    //     basket: [...state.basket, action.payload],
    //   };
    // }
    case "ADD_TO_DETAIL":
      return {
        ...state,
        basket: [...state.basket],
        detail: [action.payload],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
