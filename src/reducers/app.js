import _ from "lodash";

const initState = {
  data: [],
  isReady: false,
  filteredBy: "all",
  searchBy: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case "DATA_IS_FETCHING":
      return {
        ...state,
        isReady: false,
      };
    case "SET_DATA":
      return {
        ...state,
        isReady: true,
        data: [...action.payload],
      };
    case "SET_IMG":
      const {
        likes,
        cart_counter,
        id,
        productDescription,
        productName,
        price,
        rating,
        reviews,
        comments,
        isAvailible,
      } = state.data.find((o) => o.id === action.id);
      return {
        ...state,
        data: [
          ...state.data.filter((o) => o.id !== action.id),
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
            isAvailible,
            likes,
          },
        ],
      };
    case "FILTER_BY":
      return {
        ...state,
        filteredBy: action.payload,
      };
    // switch (action.payload) {
    //   case "all":
    //     return {
    //       ...state,
    //     };
    //   case "reversedByAlphabet":
    //     return {
    //       ...state,
    //       data: _.sortBy(state.data, (i) => i.productName).reverse(),
    //     };
    //   default:
    //     return {
    //       ...state,
    //       data: _.sortBy(state.data, (i) => i[action.payload]),
    //     };
    // }
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchBy: action.payload,
      };

    case "LIKE":
      const card = state.data.find((o) => o.id === action.payload);

      return {
        ...state,
        data: [
          ...state.data.filter((o) => o.id !== action.payload),
          {
            ...card,
            likes: card.likes + 1,
            isLiked: true,
          },
        ],
      };

    case "DISLIKE":
      const disliked_card = state.data.find((o) => o.id === action.payload);
      return {
        ...state,
        data: [
          ...state.data.filter((o) => o.id !== action.payload),
          {
            ...disliked_card,
            likes: disliked_card.likes - 1,
            isLiked: false,
          },
        ],
      };

    default:
      return state;
  }
};
