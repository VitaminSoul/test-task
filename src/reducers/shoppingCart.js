const initState = {
  cartItems: []
}

export default (state=initState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (!state.cartItems.find(o => o.id === action.payload)) {
        return {
          cartItems: [
            ...state.cartItems,
            { id: action.payload }
          ]
        }
      }
      else {
        return state
      }
    case 'REMOVE_FROM_CART':
      return {
        cartItems: [
          ...state.cartItems.filter(o => o.id !== action.payload)
        ]
      }
    default:
      return state
  }
}