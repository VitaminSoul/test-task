import API from "../API";

export function setDataThunk() {
  return (dispatch) => {
    const api = new API();
    dispatch({ type: "DATA_IS_FETCHING" });
    api.getData().then((data) => {
      dispatch({ type: "SET_DATA", payload: data });
    });
  };
}

export const setFilter = (filter) => {
  return {
    type: "FILTER_BY",
    payload: filter,
  };
};
