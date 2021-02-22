import API from "../API";

export const addToCart = (id) => ({
  type: "ADD_TO_CART",
  payload: id,
});

export const like = (id) => ({
  type: "LIKE",
  payload: id,
});

export const dislike = (id) => ({
  type: "DISLIKE",
  payload: id,
});

export const getImg = (id) => (dispatch) => {
  const api = new API();
  api.getImg().then((img) => {
    dispatch({
      type: "SET_IMG",
      payload:
        "https://media.newyorker.com/photos/5a95a5b13d9089123c9fdb7e/2:2/w_3289,h_3289,c_limit/Petrusich-Dont-Mess-with-the-Birds.jpg",
      id,
    });
  });
};
