const initState = {
  data: [],
  isReady: false,
  filteredBy: "all",
  searchBy: "",
  currentPage: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case "DATA_IS_FETCHING":
      return {
        ...state,
        isReady: false,
        data: [],
      };
    case "SET_DATA":
      return {
        ...state,
        isReady: true,
        likesData: action.payload.map((o) => ({
          id: o.id,
          likes: o.likes,
          liked: false,
        })),
        commentsData: action.payload.map((o) => ({
          id: o.id,
          comments: o.comments,
        })),
        ratingData: action.payload.map((o) => ({
          id: o.id,
          rating: o.rating,
        })),
        data: action.payload.map((o) => ({
          id: o.id,
          likes: o.likes,
          rating: o.rating,
          cart_counter: o.cart_counter,
          isAvailible: o.isAvailible,
          price: o.price,
          productDescription: o.productDescription,
          productName: o.productName,
          reviews: o.reviews,
        })),
        images: action.payload.map((o) => ({
          id: o.id,
          imageRdy: false,
          productImage: null,
        })),
      };
    case "SET_IMG":
      return {
        ...state,
        images: state.images.map((o) =>
          o.id === action.id
            ? {
                id: action.id,
                imageRdy: true,
                productImage: action.payload,
              }
            : o
        ),
      };
    case "FILTER_BY":
      return {
        ...state,
        filteredBy: action.payload,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchBy: action.payload,
      };

    case "HIT_LIKE":
      return {
        ...state,
        likesData: state.likesData.map((o) =>
          o.id === action.payload
            ? {
                id: action.payload,
                liked: true,
                likes: ++o.likes,
              }
            : o
        ),
      };

    case "HIT_DISLIKE":
      return {
        ...state,
        likesData: state.likesData.map((o) =>
          o.id === action.payload
            ? {
                id: action.payload,
                liked: false,
                likes: --o.likes,
              }
            : o
        ),
      };

    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
        isReady: false,
      };
    default:
      return state;
  }
};
