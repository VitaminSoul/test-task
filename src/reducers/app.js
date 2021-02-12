const initState = {
  data: [],
  isReady: false,
  filteredBy: 'all'
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'DATA_IS_FETCHING':
      return {
        ...state,
        isReady: false
      }
    case 'SET_DATA': 
      return {
        ...state,
        isReady: true,
        data: [
          ...action.payload
        ]
      }
    case 'SET_IMG': 
      const {cart_counter, id, productDescription, productName, price, rating, reviews, comments, isAvailible } = state.data.find(o => o.id === action.id)
      return {
        ...state,
        data: [
          ...state.data.filter(o => o.id !== action.id),
          {
            id,
            cart_counter,
            imageRdy: true,
            productDescription,
            productImage: action.payload,
            productName,
            price,
            rating, 
            reviews, 
            comments, 
            isAvailible
          }
        ]
      }
    case 'SET_FILTER':
      return {
        ...state,
        filteredBy: action.payload
      }  

    default:
      return state
  }
} 